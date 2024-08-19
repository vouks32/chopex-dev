import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native';
import { wallet, search } from '../defaults/images';
import { styles, screenWidth, screenHeight } from '../Style';
import { BasketButton } from '../Sections/basket';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetRestaurantsLocal } from '../firestore/restaurants';
import { numberWithCommas } from '../functions';

export default function Basket({ navigation: { navigate, goBack } }) {
  const [orders, setOrders] = useState([])
  const [restaurant, setRestaurant] = useState([])

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

  const deleteOrder = (isGroup, groupId, itemId = null) => {
    let ordersTemp = [...orders]
    if (isGroup) {
      ordersTemp.splice(groupId, 1)
    } else {
      ordersTemp[groupId].orders.splice(itemId, 1)
      if(ordersTemp[groupId].orders.length < 1)
        ordersTemp.splice(groupId, 1)
    }

    


    AsyncStorage.setItem('Basket', JSON.stringify(ordersTemp), () => {
      setOrders(ordersTemp)
    })
  }

  return (
    <SafeAreaView
      style={styles.viewport}>
      <ScrollView
        style={styles.defaultScollView}>
        <View
          style={{
            marginBottom: 14,
          }}>

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

          {/** Orders List per Restaurant */}


          {orders.map((_orderGroup, groupIndex) => {
            let TotalPrice = 0;
            return (
              <View key={groupIndex} style={{ margin: 10, padding: 0, borderRadius: 10, backgroundColor: "#7AEC6720" }}>
                <View style={[styles.sectionTitleContainer, { borderTopWidth: 0, marginTop: 5 }]}>
                  <View style={{}}>
                    <Text style={styles.sectionTitleHeading}>{_orderGroup.restaurant.name}</Text>
                    <Text style={styles.sectionTitleSubHeading}>{_orderGroup.orders.length} Commande(s)</Text>
                  </View>
                  <View onTouchEnd={() => { deleteOrder(true, groupIndex) }} style={[styles.sectionTitleBubble, { backgroundColor: "#EE5050", marginLeft: 20 }]}>
                    <Text style={[styles.sectionTitleBubbleText, { color: "white", fontSize: 14 }]}>{"Supprimer"}</Text>
                  </View>

                </View>
                {
                  _orderGroup.orders.map((_order, index) => {
                    TotalPrice += _order.order_price.total_price;
                    return (
                      <View key={groupIndex + "-" + index} onTouchEnd={() => { }} style={styles.dishOptionWrapper}>
                        <Image
                          source={{ uri: _order.dish_variant.image }}
                          resizeMode={"cover"}
                          style={styles.dishOptionImage}
                        />
                        <View style={{
                          flex: 4,
                        }}>
                          <Text
                            style={styles.dishOptionTitle}>
                            {_order.dish.name}
                          </Text>
                          <Text
                            style={styles.dishOptionSubTitle}>
                            {_order.dish_variant.name}
                          </Text>
                          {_order.complements.map((_complement, _complementIndex) =>
                            <Text key={groupIndex + "-" + index + "-" + _complementIndex}
                              style={[styles.dishOptionSubTitle, { color: "#07450D" }]}>
                              → {_complement.name}
                            </Text>
                          )}
                          <Text
                            style={[styles.dishOptionSubTitle, { color: "#07450D", fontSize: 18 }]}>
                            {_order.order_price.total_price} Frs
                          </Text>
                        </View>
                        <View onTouchEnd={() => { deleteOrder(false, groupIndex, index) }} >
                          <Image
                            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Cross_red_circle.svg/2048px-Cross_red_circle.svg.png" }}
                            resizeMode={"stretch"}
                            style={{
                              width: 25,
                              height: 25,
                              marginTop: 8,
                            }}
                          />
                        </View>

                      </View>
                    )
                  })
                }

                <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'baseline' }}>
                  <Text style={{ ...styles.sectionTitleHeading, fontSize: 16 }}>Total: </Text>
                  <Text style={{ ...styles.sectionTitleHeading, color: "#07450D" }}>{TotalPrice} Frs</Text>
                </View>
                <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'baseline' }}>
                  <Text style={{ ...styles.sectionTitleHeading, fontSize: 16 }}>Livraison: </Text>
                  <Text style={{ ...styles.sectionTitleHeading, color: "#07450D" }}>1000 Frs</Text>
                </View>

                <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'stretch', marginVertical: 10, justifyContent: 'center' }}>
                  <TouchableOpacity style={{ ...styles.primaryButtonDark, marginHorizontal: 10, paddingHorizontal: 20 }} onPressOut={() => { }}>
                    <Text
                      style={{ ...styles.primaryButtonDarkText, fontSize: 16 }}>
                      {'Offrir ● ' + numberWithCommas(TotalPrice + 1000) + 'Frs'}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ ...styles.primaryButton, marginHorizontal: 10, paddingHorizontal: 20 }} onPressOut={() => { }}>
                    <Text
                      style={{ ...styles.primaryButtonText, fontSize: 16 }}>
                      {'Acheter ● ' + numberWithCommas(TotalPrice + 1000) + 'Frs'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          }
          )
          }


        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
