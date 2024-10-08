import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles, screenWidth, screenHeight } from '../Style';
import { wallet, search } from '../defaults/images';
import OrderModal from '../Sections/modal';
import { BasketButton } from '../Sections/basket';


export default function EventDetail({ route, navigation: { navigate, goBack, } }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let { restaurant, event } = route.params;


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
            source={{ uri: event.image }}
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

        {/** Food details (name, price, etc) */}
        <Text
          style={{
            color: "#000000",
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: 20,
            textAlign: 'center'
          }}>
          {restaurant.name}
        </Text>
        <Text
          style={{
            color: "#000000",
            fontSize: 16,
            marginLeft: 20,
            textAlign: 'center'
          }}>
          {"Vous propose"}
        </Text>
        <Text
          style={{
            color: "#000000",
            fontSize: 24,
            fontWeight: "bold",
            marginLeft: 20,
            textAlign: 'center'
          }}>
          {event.name.toUpperCase()}
        </Text>


        {/** Liste of Results */}
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: "#000000",
              fontSize: 24,
              fontWeight: "bold",
              marginLeft: 20,
            }}>
            {"Profitez de:"}
          </Text>

          {event.dish.map((event_dish, index) =>{
              let dish_info;
              restaurant.dish.forEach((rest_dish) => {
                console.log(event_dish.dish_id, rest_dish.id)
                if (event_dish.dish_id == rest_dish.id) {
                  dish_info = rest_dish;
                }
              })
              return (
                <View key={index} onTouchEnd={() => { navigate('FoodDetail', { restaurant: restaurant, dish : dish_info, event : event, event_dish : event_dish }) }} style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'stretch', padding: 10, borderColor: '#00000020', borderBottomWidth: 1 }}>
                  <View style={{ width: "65%" }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{dish_info.name}</Text>
                    <Text style={{ marginBottom: 0 }}>{dish_info.description}</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ textDecorationLine: 'line-through', fontWeight: 'bold', fontSize: 18, color: '#A2A2A2' }}>{dish_info.initial_price} Frs</Text>
                      <Text style={{ fontWeight: 'bold', fontSize: 18, marginHorizontal: 10, color: '#07450D' }}>{((100 - event_dish.reduction) / 100) * dish_info.initial_price} Frs</Text>
                    </View>
                  </View>
                  <View style={{ width: "30%", borderRadius: 10, backgroundColor: "#D2D2D2", overflow: 'hidden', aspectRatio: 1 }}>
                    <Image
                      source={{ uri: dish_info.image }}
                      resizeMode={"cover"}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </View>
                </View>
              )
            }
          )}

        </View>
        {isModalVisible ? <OrderModal setVisible={isModalVisible} onModalClosed={() => { setIsModalVisible(false) }} /> : <></>}
      </ScrollView>


    </SafeAreaView >
  );
}
