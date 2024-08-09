import React from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles, screenWidth, screenHeight } from '../Style';
import { wallet, search } from '../defaults/images';
import { BasketButton } from '../Sections/basket';


export default function RestaurantDetail({ route, navigation: { navigate, goBack } }) {

  const { restaurant } = route.params;

  // 2. Use at the root of your app
  return (
    <SafeAreaView style={styles.viewport}>
      <ScrollView style={styles.defaultScollView}>

        {/** Big Header Image */}
        <View
          style={{
            height: 200,
            marginBottom: 6,
            backgroundColor: "#AAAAAA",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            overflow: 'hidden'
          }}
        >
          <Image
            source={{ uri: restaurant.cover_image }}
            resizeMode={"cover"}
            style={{ width: '100%', height: '100%', position: 'absolute' }}
          />
          <View style={{ alignItems: 'center', zIndex: 80, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <TouchableOpacity style={{ ...styles.backButton }} onPressOut={() => { goBack() }}>
              <Text style={styles.backButtonIcon}>
                {"←"}
              </Text>
            </TouchableOpacity>
            <BasketButton navigate={(name) => { navigate(name) }} />
          </View>
        </View>
        {/** LOGO */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: -100 }}>
          <View style={{ overflow: 'hidden', width: screenWidth / 3, aspectRatio: 1, backgroundColor: '#D2D2D2', borderRadius: 100, borderColor: 'white', borderWidth: 5 }}>
            <Image
              source={{ uri: restaurant.logo_image }}
              resizeMode={"cover"}
              style={{ width: '100%', height: '100%', position: 'absolute' }}
            />
          </View>
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
        <ScrollView horizontal onTouchEnd={() => { navigate('EventDetail') }} style={{ marginTop: 20 }}>

        </ScrollView>

        {/** Liste of Results */}
        {restaurant.dish.map((dish_item, index) =>
          <View key={index} onTouchEnd={() => { navigate('FoodDetail', { restaurant: restaurant, dish: dish_item, event: null, event_dish: null }) }} style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'stretch', padding: 10, borderColor: '#00000020', borderBottomWidth: 1 }}>
            <View style={{ width: "65%" }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{dish_item.name}</Text>
              <Text style={{ marginBottom: 0 }}>{dish_item.description}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginHorizontal: 2, color: '#07450D' }}>{dish_item.initial_price} Frs</Text>
              </View>
            </View>
            <View style={{ width: "30%", borderRadius: 10, backgroundColor: "#D2D2D2", overflow: 'hidden', aspectRatio: 1 }}>
              <Image
                source={{ uri: dish_item.image }}
                resizeMode={"cover"}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          </View>
        )}

      </ScrollView>
    </SafeAreaView >
  );
}
