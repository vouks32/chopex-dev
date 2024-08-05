import db from "./initialise";
import AsyncStorage from '@react-native-async-storage/async-storage'

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

        db.collection("Col_Profils_Clients").where("mail", "==", mail.toLowerCase())
            .get()
            .then(async (querySnapshot) => {
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

                db.collection("Col_Profils_Clients").where("number", "==", profil.number)
                .get()
                .then(async (queryNumSnapshot) => {
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
                    db.collection("Col_Profils_Clients").add(profil);
                    profil.id = docRef.id;
                    await AsyncStorage.setItem('Profil', JSON.stringify(profil))
    
                    let ss = await fetch('https://chopex-mail.vercel.app/api/sendMail/?mail=' + profil.mail + '&id=' + profil.id);
                    console.log("confirmation mail sent :", ss);
                    _callback()
                })               
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

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
            db.collection("Col_Profils_Clients").where("number", "==", number)
                .get()
                .then(async (querySnapshot) => {
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
                })     
        } else {
            db.collection("Col_Profils_Clients").where("mail", "==", mail.toLowerCase())
                .get()
                .then(async (querySnapshot) => {
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
                })     
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

function getProfilErrorState() {
    return _isError;
}

export { getProfilCollection, getProfilLocal, getProfilErrorState, SignInProfil, LoginInProfil }
