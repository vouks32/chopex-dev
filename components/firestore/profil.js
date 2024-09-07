import db from "./initialise";
import firebase from "firebase/compat/app";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { collection, getDocs, query, where, doc, setDoc, addDoc, getDoc, arrayUnion, writeBatch } from 'firebase/firestore/lite';

let _isLoading = true;
let _isError = null;

const getProfilCollection = () => {

}

const SignInProfil = async (name, mail, number, password, _callback, _errorCallback) => {
    let profil = {
        name: name,
        mail: mail.toLowerCase(),
        number: "237" + number,
        password: password,
        isMailValidated: false,
        date_created: Math.round(new Date().getTime() / 1000),
        orders: [],
        wallet: {
            transactions: [],
            balance: 0,
            mobileMoneyNumbers: []
        }
    }
    try {
        // CHECK IF MAIL USER EXISTS
        const q = query(collection(db, "Col_Profils_Clients"), where("mail", "==", mail.toLowerCase()));
        const querySnapshot = await getDocs(q);
        let existingprofil = [];
        querySnapshot.forEach((doc) => {
            let _p = doc.data();
            _p.id = doc.id;
            existingprofil.push(_p);
        });

        if (existingprofil.length > 0) {
            _errorCallback(true, false)
            return;
        }
        console.log("Existing Profil =>", existingprofil)
        // CHECK IF number USER EXISTS
        const q_num = query(collection(db, "Col_Profils_Clients"), where("number", "==", profil.number));
        const queryNumSnapshot = await getDocs(q_num);
        existingprofil = [];
        queryNumSnapshot.forEach((doc) => {
            let _p = doc.data();
            _p.id = doc.id;
            existingprofil.push(_p);
        });

        if (existingprofil.length > 0) {
            _errorCallback(true, true)
            return;
        }
        console.log("Existing Profil =>", existingprofil)

        // USER DOESN'T EXIST SO SIGN IN
        const docRef = await addDoc(collection(db, "Col_Profils_Clients"), profil);
        profil.id = docRef.id;
        await AsyncStorage.setItem('Profil', JSON.stringify(profil))

        let ss = await fetch('https://chopex-mail.vercel.app/api/sendMail/?mail=' + profil.mail + '&id=' + profil.id);
        console.log("confirmation mail sent :", ss);
        _callback()
    } catch (e) {
        console.error("Error adding document: ", e);
        _errorCallback(false)
    }
}

const LoginInProfil = async (mail, number, password, _callback, _errorCallback) => {

    try {
        // CHECK IF USER EXISTS
        let q;
        if (number != '') {
            q = query(collection(db, "Col_Profils_Clients"), where("number", "==", number));
        } else {
            q = query(collection(db, "Col_Profils_Clients"), where("mail", "==", mail.toLowerCase()));
        }
        const querySnapshot = await getDocs(q);
        let existingprofil = [];
        querySnapshot.forEach((doc) => {
            let _p = doc.data();
            _p.id = doc.id;
            existingprofil.push(_p);
        });

        if (existingprofil.length > 0) {
            if (existingprofil[0].password == password) {
                await AsyncStorage.setItem('Profil', JSON.stringify(existingprofil[0]))
                _callback();
            } else {
                _errorCallback(true, (number != '') ? true : false)
            }
        } else {
            _errorCallback(false);
        }
    } catch (e) {
        console.error("Error getting document: ", e);
        _errorCallback()
    }
}

const getProfilLocal = async () => {
    let profilText = await AsyncStorage.getItem('Profil');
    return JSON.parse(profilText);
}

const makeTransaction = async (amount, reason, from = null, to = null) => {
    if (reason == 'order_payment') {
        const batch = writeBatch(db);
        var ProfilRef = await getDoc(collection(db, "Col_Profils_Clients", profil.id));
        let profil = ProfilRef.data();
        profil.id = ProfilRef.id;

        batch.update(ProfilRef, {
            "wallet.transactions": arrayUnion({
                transaction_id: profil.id + "-" + Date.now(),
                from: "wallet", // momo: when added to his wallet from mobile money, chopex: when added from the app to his wallet (refund)
                to: "chopex", // wallet: when money is added to the wallet (funding wallet or refund), chopex: when sending to the app (buying an order)
                amount: amount,
            })
        })
        batch.update(ProfilRef, {
            "wallet.amount": profil.wallet.amount - amount
        })
        await batch.commit();

        ProfilRef = await getDoc(collection(db, "Col_Profils_Clients", profil.id));
        profil = ProfilRef.data();
        profil.id = ProfilRef.id;
        console.log("Amount Deducted :", amount)
        console.log("Profil.Wallet :", profil.wallet)
        await AsyncStorage.setItem('Profil', JSON.stringify(profil))


    }

    return;
}

const placeOrder = async (order) => {
   // USER DOESN'T EXIST SO SIGN IN
   let o = order;
   const docRef = await addDoc(collection(db, "Col_Orders"), order);
   o.id = docRef.id;
   let storageOrders = await AsyncStorage.getItem('Orders');
   storageOrders = storageOrders? storageOrders : "[]";
   storageOrders = JSON.parse(storageOrders)
   storageOrders.push(o)
   await AsyncStorage.setItem('Orders', JSON.stringify(storageOrders))

    return;
}

export { getProfilCollection, getProfilLocal, SignInProfil, LoginInProfil, placeOrder }

/*

User Profil Object :
{
        name: string,
        mail: string,
        number: string,
        password: string,
        isMailValidated: boolean,
        date_created: int,
        orders: [
        { order_id : string }
        ],
        wallet: {
            transactions: [
             {
               transaction_id: string,
               from : string, // momo: when added to his wallet from mobile money, chopex: when added from the app to his wallet, wallet: when paying an order(refund)
               to : string, // wallet: when money is added to the wallet (funding wallet or refund), chopex: when sending to the app (buying an order)
               amount: int,
             }
            ],
            balance: 0,
            mobileMoneyNumbers: [string]
        }
    }

*/