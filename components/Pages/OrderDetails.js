import React, { useState } from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles } from '../Style';
import { wallet } from '../defaults/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WebView } from 'react-native-webview';

export default function OrderDetails({ navigation: { navigate, goBack } }) {
  const [Orders, setOrders] = useState(null)

  const getBasketStorage = async () => {
    let orders = await AsyncStorage.getItem('Orders')
    if (orders)
      orders = JSON.parse(orders)
    else
      orders = []
    setOrders(orders)
  }

  if (!Orders) {
    getBasketStorage()
  }

  return (
    <SafeAreaView
      style={styles.viewport}>
      <ScrollView
        style={styles.defaultScollView}>

        {/** MAP */}
        <WebView
          geolocationEnabled={true}
          javaScriptEnabled={true}
          style={styles.WebViewContainer}
          source={{ uri: 'https://stripe-sturdy-zinc.glitch.me/' }}
        />

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
