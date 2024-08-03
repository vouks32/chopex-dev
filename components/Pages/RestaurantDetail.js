import React from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles, screenWidth, screenHeight } from '../Style';
import { wallet, search } from '../defaults/images';


export default function RestaurantDetail({ route, navigation: { navigate, goBack } }) {

  const {restaurant} = route.params;

  // 2. Use at the root of your app
  return (
    <SafeAreaView style={styles.viewport}>
      <ScrollView style={styles.defaultScollView}>

        {/** Big Header Image */}
        <View
          style={{
            height: 200,
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginBottom: 6,
            backgroundColor: "#AAAAAA",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <View style={{ width: 35, aspectRatio: 1 }}>
            <TouchableOpacity style={{ ...styles.backButton }} onPressOut={() => { goBack() }}>
              <Text style={styles.backButtonIcon}>
                {"←"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/** LOGO */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: -100 }}>
          <View style={{ width: screenWidth / 3, aspectRatio: 1, backgroundColor: '#D2D2D2', borderRadius: 100, borderColor: 'white', borderWidth: 5 }}></View>
        </View>

        {/** Restaurant details (name, price, etc) */}
        <Text
          style={{
            color: "#000000",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: 'center'
          }}>
          {restaurant.name}
        </Text>
        <Text
          style={{
            color: "#00000080",
            fontSize: 14,
            fontWeight: "bold",
            textAlign: 'center'
          }}>
          {"4.5 ✩ (500+) • 500Frs Livraison • 7km"}
        </Text>
        <Text
          style={{
            color: "#000000",
            fontSize: 14,
            fontWeight: "bold",
            textAlign: 'center',
            marginHorizontal: 50
          }}>
          {restaurant.description}
        </Text>

        {/** Plat du jour */}        
        <ScrollView horizontal onTouchEnd={() => { navigate('EventDetail') }} style={{marginTop: 20}}>
          <View
            style={styles.eventContainer}>
            <Image
              source={{ uri: "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?b=1&s=612x612&w=0&k=20&c=Mn_EPBAGwtzh5K6VyfDmd7Q5eJFXSHhGWVr3T4WDQRo=" }}
              resizeMode={"cover"}
              style={styles.eventContainerImage}
            />
            <View style={{ flexDirection: "row", alignItems: "center", }}>
              <View style={{ flex: 1, marginRight: 4, }}>
                <Text style={styles.eventContainerTitle}>
                  {"-50% chez MAMIE BEIGNETS !"}
                </Text>
                <Text style={styles.eventContainerSubTitle}>
                  {"0Frs Delivery fee  ▪  10 - 20 min"}
                </Text>
              </View>
              <View style={styles.eventContainerPriceTag}>
                <Text style={styles.eventContainerPriceText}>
                  {"4.3"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={styles.eventContainer}>
            <Image
              source={{ uri: "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?b=1&s=612x612&w=0&k=20&c=Mn_EPBAGwtzh5K6VyfDmd7Q5eJFXSHhGWVr3T4WDQRo=" }}
              resizeMode={"cover"}
              style={styles.eventContainerImage}
            />
            <View style={{ flexDirection: "row", alignItems: "center", }}>
              <View style={{ flex: 1, marginRight: 4, }}>
                <Text style={styles.eventContainerTitle}>
                  {"-50% chez MAMIE BEIGNETS !"}
                </Text>
                <Text style={styles.eventContainerSubTitle}>
                  {"0Frs Delivery fee  ▪  10 - 20 min"}
                </Text>
              </View>
              <View style={styles.eventContainerPriceTag}>
                <Text style={styles.eventContainerPriceText}>
                  {"4.3"}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/** Liste of Results */}
        <View onTouchEnd={() => { navigate('FoodDetail') }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'stretch' }}>
            <View style={{ width: "70%" }}>
              <Text style={{ backgroundColor: "#D2D2D2", marginVertical: 5 }}></Text>
              <Text style={{ backgroundColor: "#D2D2D2", marginBottom: 5 }}></Text>
              <Text style={{ backgroundColor: "#D2D2D2", marginBottom: 5 }}></Text>
            </View>
            <View style={{ width: "25%", borderRadius: 10, backgroundColor: "#D2D2D2", aspectRatio: 1 }}></View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView >
  );
}
