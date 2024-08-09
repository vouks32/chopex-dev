import React, { useRef, useState } from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, Easing, ImageBackground, Animated } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles, screenWidth, screenHeight } from '../Style';
import OrderModal from '../Sections/modal';
import { getProfilLocal } from '../firestore/profil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BasketButton } from '../Sections/basket';
import LottieView from 'lottie-react-native';
import { sparks } from '../defaults/images';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default function FoodDetail({ route, navigation: { navigate, goBack, reload } }) {
  //AsyncStorage.removeItem('Basket')
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [_animated, setAnimated] = useState(false);
  const [newBasketLength, setNewBasketLength] = useState(0);
  let animationProgress = useRef(new Animated.Value(0));

  const playLottie = () => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(()=>{
      animationProgress.current.setValue(0)
    });
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: -125,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  const { restaurant, dish, event, event_dish } = route.params;
  const [profil, setProfil] = useState(null);
  if (profil == null) {
    AsyncStorage.getItem('Basket', (_basket) => {
      if (_basket)
        _basket = JSON.parse(_basket)
      else
        _basket = []
      setNewBasketLength(_basket.length)
    });
    getProfilLocal().then(prof => {
      setProfil(prof)
    })
  }

  let orderTemplate = {
    id: 0,
    dish: dish,
    dish_variant: {},
    complements: [],
    restaurant_id: restaurant.id,
    client_id: 0,
    order_price: {
      total_price: 0,
      dish_price: dish.initial_price,
      complement_price: 0,
      food_reduction: !event ? 0 : ((event_dish.reduction) / 100) * dish.initial_price
    },
    delivery_id: 0,
    status: {
      _status: 'Ordered', // ordered(100), preparing(200), waiting_delivery(300), delivering(400), delivered(500), order_cancelled(101), preperation_cancelled(201), delivery_cancelled(401), 
      _status_code: 100,
      ordered_date: 0,
      preparing_date: 0,
      delivery_date: 0,
      delivered_date: 0,
    }
  }
  const [order, setOrder] = useState(orderTemplate);


  const setOrderComplements = (complement) => {
    let hasBeenAdded = -1;
    order.complements.forEach((_complement, index) => {
      if (complement.name == _complement.name)
        hasBeenAdded = index
    })
    if (hasBeenAdded == -1) {
      orderTemplate = { ...order };
      orderTemplate.complements.push(complement)
      setOrder(orderTemplate)
    } else {
      orderTemplate = { ...order };
      orderTemplate.complements.splice(hasBeenAdded, 1)
      setOrder(orderTemplate)
    }
  }

  const setOrderVariant = (variante) => {
    orderTemplate = { ...order };
    orderTemplate.dish_variant = variante
    setOrder(orderTemplate)
  }

  const makeOrder = async () => {
    orderTemplate = { ...order };
    orderTemplate.id = Date.now() + "-" + profil.id;
    orderTemplate.client_id = profil.id;
    orderTemplate.order_price.complement_price = 0;

    orderTemplate.complements.forEach(_complement => {
      orderTemplate.order_price.complement_price += parseInt(_complement.price)
    })

    orderTemplate.order_price.total_price = (parseInt(orderTemplate.order_price.dish_price) + parseInt(orderTemplate.order_price.complement_price)) - parseInt(orderTemplate.order_price.food_reduction);
    orderTemplate.status.ordered_date = Date.now();

    let panier = await AsyncStorage.getItem('Basket');
    if (panier)
      panier = JSON.parse(panier)
    else
      panier = []
    let restaurantFound = false;

    panier.forEach((orderPack, index) => {
      if (orderPack.restaurant.id == orderTemplate.restaurant_id) {
        panier[index].orders.push(orderTemplate);
        restaurantFound = true
      }
    })

    if (!restaurantFound) {
      panier.push({
        restaurant: restaurant,
        orders: [orderTemplate]
      })
    }

    await AsyncStorage.setItem('Basket', JSON.stringify(panier), async () => {
      let _basket = await AsyncStorage.getItem('Basket');
      _basket = JSON.parse(_basket)
      console.log("Food detail page basket lentgh", _basket.length)
      if (!_animated) {
        setAnimated(true)
        fadeIn()
      }
      playLottie()
      setNewBasketLength(_basket.length)
    })

  }

  return (
    <SafeAreaView
      style={{ ...styles.viewport, height: screenHeight }}>
      <ScrollView style={{ ...styles.defaultScollView, height: screenHeight }}>

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
          <View style={{ alignItems: 'center', zIndex: 80, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <TouchableOpacity style={{ ...styles.backButton }} onPressOut={() => { goBack() }}>
              <Text style={styles.backButtonIcon}>
                {"←"}
              </Text>
            </TouchableOpacity>
            <AnimatedLottieView
              style={{ position: 'absolute', right: -270,  width: 600, aspectRatio:1 }}
              progress={animationProgress.current}
              source={sparks}
            />
            <BasketButton navigate={(name) => { navigate(name) }} newBasketLength={newBasketLength} />
            
          </View>

          <Image
            source={{ uri: dish.image }}
            resizeMode={"cover"}
            style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 10 }}
          />

        </View>

        {/** Food details (name, price, etc) */}
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ color: "#000000", fontSize: 24, fontWeight: "bold", }}>{dish.name}</Text>
          {event_dish ?
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ textDecorationLine: 'line-through', fontWeight: 'bold', fontSize: 18, color: '#A2A2A2' }}>{dish.initial_price} Frs</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginHorizontal: 10, color: '#07450D' }}>{((100 - event_dish.reduction) / 100) * dish.initial_price} Frs</Text>
            </View>
            :
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#07450D' }}>{dish.initial_price} Frs</Text>
            </View>
          }
          <Text style={{ color: "#000000", fontSize: 16, }}>{dish.description}</Text>
        </View>

        {/** Food variants and addings TITLE */}
        <View style={styles.sectionTitleContainer}>
          <View style={{ width: 175, }}>
            <Text style={styles.sectionTitleHeading}>{"Variantes"}</Text>
            <Text style={styles.sectionTitleSubHeading}>{"Selectionnez le type du plat"}</Text>
          </View>
          <View style={[styles.sectionTitleBubble, { backgroundColor: "#C22" }]}>
            <Text style={[styles.sectionTitleBubbleText, { color: "#FFF" }]}>{"Requis"}</Text>
          </View>
        </View>

        {/** Food variants and addings OPTIONS */}
        {dish.variantes.map((variante, index) => {
          let isSelected = false;
          if (order.dish_variant.name == variante.name) {
            isSelected = true
          }
          return (
            <View key={index} onTouchEnd={() => { setOrderVariant(variante) }} style={styles.dishOptionWrapper}>
              <Image
                source={{ uri: variante.image }}
                resizeMode={"stretch"}
                style={styles.dishOptionImage}
              />
              <View style={{
                flex: 4,
              }}>
                <Text
                  style={styles.dishOptionTitle}>
                  {variante.name}
                </Text>
              </View>
              <Image
                source={{ uri: isSelected ? "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/800px-Eo_circle_green_checkmark.svg.png" : "https://docs.blender.org/manual/sl/3.6/_images/grease-pencil_modes_draw_tools_circle_example-02.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 8,
                }}
              />
            </View>)
        }
        )}


        {/** Food variants and addings TITLE */}
        <View style={styles.sectionTitleContainer}>
          <View style={{ width: 175, }}>
            <Text style={styles.sectionTitleHeading}>{"Compléments"}</Text>
            <Text style={styles.sectionTitleSubHeading}>{"Selectionnez un complément"}</Text>
          </View>
          <View style={styles.sectionTitleBubble}>
            <Text style={styles.sectionTitleBubbleText}>{"Optionel"}</Text>
          </View>
        </View>

        {/** Food variants and addings OPTIONS */}
        {dish.complements.map((complements, index) => {
          let isSelected = false;
          order.complements.forEach(_complement => {
            if (_complement.name == complements.name)
              isSelected = true
          })
          return (
            <View key={index} onTouchEnd={() => { setOrderComplements(complements) }} style={styles.dishOptionWrapper}>
              <Image
                source={{ uri: complements.image }}
                resizeMode={"stretch"}
                style={styles.dishOptionImage}
              />
              <View style={{ flex: 5, }}>
                <Text style={styles.dishOptionTitle}>{complements.name}</Text>
                <Text
                  style={styles.dishOptionPrice}>
                  +{complements.price} Frs
                </Text>
              </View>

              <Image
                source={{ uri: isSelected ? "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/White_check_mark_in_dark_green_rounded_square.svg/1200px-White_check_mark_in_dark_green_rounded_square.svg.png" : "https://static.thenounproject.com/png/191781-200.png" }}
                resizeMode={"stretch"}
                style={{ width: 25, height: 25, marginTop: 8, }} />
            </View>)
        }
        )}


        {/** Frequently ordered food */}
        <View style={{ marginTop: 20 }} onTouchEnd={() => { navigate('FoodDetail') }}>
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 20,
            }}>
            {"Plats fréquement commandé ensemble"}
          </Text>
          <Text
            style={{
              color: "#00000050",
              fontSize: 13,
              fontWeight: "bold",
              marginLeft: 20,
            }}>
            {"Découvrez nos merveilles"}
          </Text>

          <View style={{ marginTop: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'stretch' }}>
              <View style={{ width: "70%" }}>
                <Text style={{ backgroundColor: "#D2D2D2", marginVertical: 5 }}></Text>
                <Text style={{ backgroundColor: "#D2D2D2", marginBottom: 5 }}></Text>
                <Text style={{ backgroundColor: "#D2D2D2", marginBottom: 5 }}></Text>
              </View>
              <View style={{ width: "25%", borderRadius: 10, backgroundColor: "#D2D2D2", aspectRatio: 1 }}></View>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 150 }}></View>

        {isModalVisible ? <OrderModal setVisible={isModalVisible} onModalClosed={() => { setIsModalVisible(false) }} /> : <></>}

      </ScrollView>


      <Animated.View style={{
        paddingVertical: 10, borderRadius: 150, position: 'absolute', bottom: -400, height: 400, left: 0, right: 0, backgroundColor: '#07450D', elevation: 15,
        transform: [{
          translateY: fadeAnim
        }]
      }}>
        <TouchableOpacity onPressOut={() => { navigate('Basket') }}>
          <Text
            style={{ fontSize: 18, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
            {'Voir le panier'}
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', elevation: 15 }}>
        <TouchableOpacity style={[order.dish_variant.name ? styles.primaryButton : styles.secondaryButton, { marginVertical: 10 }]} onPressOut={() => { makeOrder() }}>
          <Text
            style={order.dish_variant.name ? styles.primaryButtonText : styles.secondaryButtonText}>
            {'Ajouter au panier'}
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}
