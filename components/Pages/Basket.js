import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native';
import { wallet } from '../defaults/images';
import { styles } from '../Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { numberWithCommas } from '../functions';
import { OrderModal } from '../Sections/modal';
import { placeOrder } from '../firestore/profil';

export default function Basket({ navigation: { navigate, goBack } }) {
  const [Basket, setBasket] = useState(null)
  const [Orders, setOrders] = useState(null)
  const [orderModalInfo, setOrderModalInfo] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const getBasketStorage = async () => {
    let basket = await AsyncStorage.getItem('Basket')
    let orders = await AsyncStorage.getItem('Orders')
    if (basket)
      basket = JSON.parse(basket)
    else
      basket = []
    setBasket(basket)

    if (orders)
      orders = JSON.parse(orders)
    else
      orders = []
    setOrders(orders)
  }

  if (!Basket || !Orders) {
    getBasketStorage()
  }

  const deleteOrder = (isGroup, groupId, itemId = null) => {
    let ordersTemp = [...Basket]
    if (isGroup) {
      ordersTemp.splice(groupId, 1)
    } else {
      ordersTemp[groupId].orders.splice(itemId, 1)
      if (ordersTemp[groupId].orders.length < 1)
        ordersTemp.splice(groupId, 1)
    }
    AsyncStorage.setItem('Basket', JSON.stringify(ordersTemp), () => {
      setBasket(ordersTemp)
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

          {/** Orders List per Restaurant */
            Orders && Orders.length > 0 ?
              <View>
                <Text style={{ borderTopWidth: 1, borderColor: "#cccccc", color: "#000000", fontSize: 20, fontWeight: "bold", marginLeft: 20, marginTop: 10 }}>
                  {"Commandé"}
                </Text>
                <Text style={{ color: "#00000050", fontSize: 13, ontWeight: "bold", marginLeft: 20, }}>
                  {"Commande en cours"}
                </Text>
                {Orders?.map((_orderGroup, groupIndex) => {
                  let TotalPrice = 0;
                  return (
                    <View key={groupIndex} style={{ margin: 10, padding: 0, borderRadius: 10, backgroundColor: "#7AEC6730" }}>
                      <View style={[styles.sectionTitleContainer, { borderTopWidth: 0, marginTop: 5 }]}>
                        <View style={{}}>
                          <Text style={styles.sectionTitleHeading}>{_orderGroup.restaurant.name}</Text>
                          <Text style={styles.sectionTitleSubHeading}>{_orderGroup.orders.length} Commande(s)</Text>
                        </View>
                        <View onTouchEnd={() => { }} style={[styles.sectionTitleBubble, { backgroundColor: "#EE5050", marginLeft: 20 }]}>
                          <Text style={[styles.sectionTitleBubbleText, { color: "white", fontSize: 14 }]}>{"Annuler"}</Text>
                        </View>
                      </View>

                      <View onTouchEnd={() => { }} style={styles.dishOptionWrapper}>
                        <Image
                          source={{ uri: _orderGroup.restaurant.logo_image }}
                          resizeMode={"cover"}
                          style={styles.dishOptionImage}
                        />
                        <View style={{
                          flex: 4,
                        }}>
                          {
                            _orderGroup.orders.map((_order, index) => {
                              TotalPrice += _order.order_price.total_price;
                              return (

                                <View>
                                  <View>
                                    <Text
                                      style={styles.dishOptionTitle}>
                                      {_order.dish.name}<Text
                                        style={styles.dishOptionSubTitle}>
                                        {" (" + _order.dish_variant.name + ")"}
                                      </Text>
                                    </Text>


                                    {_order.complements.map((_complement, _complementIndex) =>
                                      <Text key={groupIndex + "-" + index + "-" + _complementIndex}

                                        style={[styles.dishOptionSubTitle, { color: "#07450D" }]}>
                                        → {_complement.name}
                                      </Text>
                                    )}
                                  </View>
                                </View>
                              )
                            })
                          }
                        </View>
                      </View>


                      <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ ...styles.sectionTitleHeading, fontSize: 16 }}>Status: </Text>
                        <Text style={{ ...styles.sectionTitleHeading, color: "#07450D", fontSize: 16 }}>{_orderGroup.status}</Text>
                      </View>

                      <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'stretch', marginVertical: 10, justifyContent: 'center' }}>

                        <TouchableOpacity style={{ ...styles.primaryButton, marginHorizontal: 10, paddingHorizontal: 20 }} onPress={() => setOrderModalInfo(_orderGroup)}>
                          <Text
                            style={{ ...styles.primaryButtonText, fontSize: 16 }}>
                            {"Plus d'informations"}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                }
                )
                }
              </View>
              :
              <></>
          }
          {/** Basket List per Restaurant */}
          <Text style={{ borderTopWidth: 1, borderColor: "#cccccc", color: "#000000", fontSize: 20, fontWeight: "bold", marginLeft: 20, marginTop: 10 }}>
            {"En attente"}
          </Text>
          <Text style={{ color: "#00000050", fontSize: 13, ontWeight: "bold", marginLeft: 20, }}>
            {"Commandes en attentes de validation"}
          </Text>
          {Basket?.map((_orderGroup, groupIndex) => {
            let TotalPrice = 0;
            return (
              <View key={groupIndex} style={{ margin: 10, padding: 0, borderRadius: 10, backgroundColor: "#7AEC6710" }}>
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
                            {_order.dish.name}<Text
                              style={styles.dishOptionSubTitle}>
                              {_order.dish_variant.name}
                            </Text>
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
                  <TouchableOpacity style={{ ...styles.primaryButton, marginHorizontal: 10, paddingHorizontal: 20 }} onPress={() => setOrderModalInfo(_orderGroup)}>
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

          {orderModalInfo ?
            <OrderModal modalVisible={orderModalInfo ? true : false} modalInfo={orderModalInfo} onModalClosed={(profil, numberToContact, numberToPay) => {
              if (!profil) {
                setOrderModalInfo(false)
                return;
              }
              console.log('making order')
              let order = orderModalInfo;
              order.profil = profil;
              order.numberToContact = numberToContact;
              order.numberToPay = numberToPay;
              order.dateOrdered = Date.now();
              order.status = "En attente de la validation du restaurant";
              order.statusCode = "100";
              Basket.forEach((orderGroup, index) => {
                if (orderGroup.restaurant.id == orderModalInfo.restaurant.id)
                  deleteOrder(true, index)
              })
              placeOrder(order).then(() => {
                console.log('order made')
                getBasketStorage()
                setOrderModalInfo(false)
              })
            }} />
            : <></>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
