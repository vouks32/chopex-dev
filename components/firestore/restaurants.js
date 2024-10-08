import db from "./initialise";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { collection, getDocs, query, where, doc, setDoc, addDoc } from 'firebase/firestore/lite';

let _isLoading = true;
let _isError = null;

const GetRestaurants = async (_callback, _errorCallback) => {

    let Restaurants_Last_Loaded = await AsyncStorage.getItem('Restaurants_last_Laoded');

    if (Restaurants_Last_Loaded != null && parseInt(Restaurants_Last_Loaded) > (Date.now() - (60000))) {
        console.log("already loaded, last Load was :" + parseInt((Date.now() - Restaurants_Last_Loaded)/60000).toFixed(1) + "Mins")
        return
    }

    let Restaurant_Collection_name = 'Col_Profils_restaurants';

    try {
        const rest_col = collection(db, Restaurant_Collection_name);
        const restaurantSnapshot = await getDocs(rest_col);

        let restaurants = [];
        restaurantSnapshot.forEach((doc) => {
            let _p = doc.data();
            _p.id = doc.id;
            restaurants.push(_p);
        });

        if (restaurants.length > 0) {
            await AsyncStorage.setItem('Restaurants', JSON.stringify(restaurants))
            await AsyncStorage.setItem('Restaurants_last_Laoded', Date.now().toString())
            _callback();
        } else {
            _errorCallback(true)
        }
    } catch (e) {
        console.error("Error getting document: ", e);
        _errorCallback()
    }
}

const GetRestaurantsLocal = async ()=>{
    let profilText = await AsyncStorage.getItem('Restaurants');
    return JSON.parse(profilText);
}


export { GetRestaurants, GetRestaurantsLocal }

/**
 * 
 * Restaurant profil JSON
 * {
      "localisation": {
        "lon": float,
        "lat": float
      },
      "name": string,
      "locality": string,
      "description": string,
      "cover_image": string,
      "creation_date": 1684275200,
      "logo_image": string,
      "events": [
        {
          "image": string,
          "date_of_end": int,
          "dish": [ 
            {
              "dish_id": string,
              "reduction_type": string, // "pourcentage" : for now it is the only option, reduce the dish price by a percent of its price
              "reduction": int
            }
          ],
          "name": string,
          "date_of_start": int,
          "description": string
        }
      ],
      "dish": [
        {
          "id": string,
          "image": string,
          "categorys": [string],
          "reviews": [
            {
              "date": int,
              "note": int, // 1 to 5
              "comment": string,
              "profils_ID": string
            }
          ],
          "complements": [
            {
              "image": string,
              "price": int,
              "name": string
            }
          ],
          "name": string,
          "variantes": [
            {
              "image": string",
              "name": string
            }
          ],
          "initial_price": int,
          "description": string
        }
      ]
    }
 * 
 */