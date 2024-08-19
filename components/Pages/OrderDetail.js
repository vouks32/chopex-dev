import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native';
import { wallet } from '../defaults/images';
import { styles } from '../Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { numberWithCommas } from '../functions';

export default function OrderDetail({ navigation: { navigate, goBack } }) {
  const [orders, setOrders] = useState([])

  const getBasketStorage = async () => {
    let basket = await AsyncStorage.getItem('Basket')
    if (basket)
      basket = JSON.parse(basket)
    else
      basket = []
    console.log("basket page there are", basket)
    setOrders(basket)
  }

  if (orders.length == 0) {
    getBasketStorage()
  }

  return (
    <SafeAreaView
      style={styles.viewport}>
      <ScrollView
        style={styles.defaultScollView}>

        {/* TOP Line with back button */}
        <View style={{ paddingBottom: 0, alignItems: 'center', zIndex: 80, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
          <TouchableOpacity style={{ ...styles.backButton }} onPressOut={() => { goBack() }}>
            <Text style={styles.backButtonIcon}>
              {"←"}
            </Text>
          </TouchableOpacity>
          <Text style={styles.sectionTitleHeading}>Panier</Text>
          <View style={styles.backButton}>
            <Image
              source={wallet}
              resizeMode={"stretch"}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
