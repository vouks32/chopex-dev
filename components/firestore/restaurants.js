import db from "./initialise";
import AsyncStorage from '@react-native-async-storage/async-storage'

let _isLoading = true;
let _isError = null;

const GetRestaurants = async (_callback, _errorCallback) => {

    let Restaurants_Last_Loaded = await AsyncStorage.getItem('Restaurants_last_Laoded');

    if (Restaurants_Last_Loaded != null && parseInt(Restaurants_Last_Loaded) > (Date.now() - (60000))) {
        console.log("already loaded, last Load was :" + parseInt((Date.now() - Restaurants_Last_Loaded) / 60000).toFixed(1) + "Mins")
        return
    }

    let Restaurant_Collection_name = 'Col_Profils_restaurants';

    try {
        db.collection(Restaurant_Collection_name).get().then(async (restaurantSnapshot) => {
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
        });
    } catch (e) {
        console.error("Error getting document: ", e);
        _errorCallback()
    }
}

const GetRestaurantsLocal = async () => {
    let profilText = await AsyncStorage.getItem('Restaurants');
    return JSON.parse(profilText);
}


export { GetRestaurants, GetRestaurantsLocal }
