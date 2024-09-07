import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, StyleSheet, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cart } from '../defaults/images';
import { styles } from '../Style';



const BasketButton = ({ navigate, newBasketLength }) => {
    const [basket, setBasket] = useState(null)
    const [orders, setOrders] = useState(null)

    const getBasketStorage = async () => {
        let _basket = await AsyncStorage.getItem('Basket')
        let _orders = await AsyncStorage.getItem('Orders')
        if (_basket)
            _basket = JSON.parse(_basket)
        else
            _basket = []
        setBasket(_basket)
        if (_orders)
            _orders = JSON.parse(_orders)
        else
            _orders = []
        setOrders(_orders)
    }

    if (orders == null || basket == null || (newBasketLength && basket && newBasketLength != basket.length)) {
        console.log(" Basket button: basket :", basket?.length, "new lenght: ", newBasketLength)

        getBasketStorage()
    }
    return (
        <View>
            {(basket && basket.length > 0) || (orders && orders.length > 0)  ?
                <View onTouchEnd={() => { navigate('Basket') }} style={[styles.backButton, {}]}>
                    <Image
                        source={cart}
                        resizeMode={"stretch"}
                        style={{
                            height: "80%",
                            width: "80%",
                            marginLeft: 2,
                            marginTop: 2,
                        }}
                    />

<Text style={{ position: 'absolute', top: 0, right: -3, backgroundColor: 'red', color: 'white', paddingVertical: 0, paddingHorizontal: 2, borderRadius: 5, }}>{basket?.length}</Text>
<Text style={{ position: 'absolute', top: 0, left: -3, backgroundColor: 'green', color: 'white', paddingVertical: 0, paddingHorizontal: 2, borderRadius: 5, }}>{orders?.length}</Text>
                </View>
                :
                <></>
            }
        </View>
    );
}
const _styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: '#E0E0E080',
        marginTop: -100
    },
    modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
        width: "90%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",

    },
    button: {
        borderRadius: 10,
        paddingHorizontal: 45,
        paddingVertical: 15,
    },
    buttonClose: {
        backgroundColor: '#7AEC67',
    },
    buttonNo: {
        backgroundColor: '#D2D2D2',
    },
    textStyle: {
        color: '#07450D',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 25,
        textAlign: 'center',
        width: "100%",
        fontSize: 18,
        color: '#222',
    },
});


export { BasketButton }
