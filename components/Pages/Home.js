import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles, screenWidth, screenHeight } from '../Style';
import { wallet, search, cart } from '../defaults/images';
import { GetRestaurantsLocal } from '../firestore/restaurants';
import { BasketButton } from '../Sections/basket';

export default function Home({ navigation: { navigate } }) {

  const [restaurants, setRetaurants] = useState([]);

  if (restaurants.length == 0)
    GetRestaurantsLocal().then(_restaurants => {
      setRetaurants(_restaurants)
    })

  // 2. Use at the root of your app
  return (
    <SafeAreaView
      style={styles.viewport}>
      <ScrollView style={styles.defaultScollView}>

        {/* TOP SECTION WITH LOCATION, WALLET, AND BASKET*/}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 14, marginHorizontal: 17, }}>
          <Text style={{ color: "#000000", fontSize: 16, fontWeight: "bold", marginRight: 4, }}>
            {"Yaoundé ▾"}
          </Text>
          <View
            style={{
              flex: 1,
            }}>
          </View>
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
          <BasketButton navigate={(name)=>{
            navigate(name)
          }} />
        </View>

        {/* SEARCH BAR */}
        <View
          style={styles.searchContainer} onTouchEnd={() => { navigate('Search') }}>
          <Image
            source={search}
            resizeMode={"contain"}
            style={styles.searchIcon}
          />
          <TextInput style={{ width: '90%', marginVertical: 2, marginHorizontal: 10 }}></TextInput>
        </View>

        {/* CATEGORY SCROLLVIEW 
        <ScrollView
          horizontal onTouchEnd={() => { navigate('CategoryDetail') }}
          style={{ flexDirection: "row", marginBottom: 25, marginHorizontal: 0, paddingHorizontal: 20 }}>
          <View style={{ width: screenWidth * 0.25, aspectRatio: 1, backgroundColor: "#D2D2D2", borderRadius: 50, marginHorizontal: 5 }}>
          </View>
          <View style={{ width: screenWidth * 0.25, aspectRatio: 1, backgroundColor: "#D2D2D2", borderRadius: 50, marginHorizontal: 5 }}>
          </View>
          <View style={{ width: screenWidth * 0.25, aspectRatio: 1, backgroundColor: "#D2D2D2", borderRadius: 50, marginHorizontal: 5 }}>
          </View>
          <View style={{ width: screenWidth * 0.25, aspectRatio: 1, backgroundColor: "#D2D2D2", borderRadius: 50, marginHorizontal: 5 }}>
          </View>
          <View style={{ width: screenWidth * 0.25, aspectRatio: 1, backgroundColor: "#D2D2D2", borderRadius: 50, marginHorizontal: 5 }}>
          </View>
          <View style={{ width: screenWidth * 0.25, aspectRatio: 1, backgroundColor: "#D2D2D2", borderRadius: 50, marginHorizontal: 5 }}>
          </View>
        </ScrollView>
        */}

        {/* RESTAURANT SCROLLVIEW */}
        <View style={{ marginBottom: 7, paddingHorizontal: 17, flexDirection: 'row' }}>
          <Text style={{ color: "#000000", fontSize: 16, fontWeight: "bold" }}> {"Restaurants "} </Text>
          <Text style={{ color: "#000000", fontSize: 16, fontWeight: "bold", }}> {"→"} </Text>
        </View>

        <ScrollView horizontal style={{ flexDirection: "row", marginBottom: 25, marginHorizontal: 0, paddingHorizontal: 20 }}>
          <FlatList
            data={restaurants}
            renderItem={(item) => (
              <View
                onTouchEnd={() => { navigate('RestaurantDetail', { restaurant: item.item }) }}
                style={{ width: screenWidth * 0.25, marginHorizontal: 5 }}>
                <View style={{ width: "100%", aspectRatio: 1, backgroundColor: "#D2D2D2", borderRadius: 50, overflow: 'hidden' }}>
                  <Image
                    source={{ uri: item.item.logo_image }}
                    resizeMode={"cover"}
                    style={{ width: "100%", aspectRatio: 1 }}
                  />
                </View>
                <Text style={{ textAlign: "center", fontWeight: 'bold' }}>{item.item.name}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={{ flexDirection: 'row' }}
          />
        </ScrollView>

        {/*Events*/}
        <View style={{ marginBottom: 7, paddingHorizontal: 20, paddingTop: 10, borderColor: "#D2D2D2", borderTopWidth: 1 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
            <View>
              <Text style={{ color: "#000000", fontSize: 16, fontWeight: "bold", }}>{"Promotions"} </Text>
              <Text style={styles.eventContainerSubTitle}>{"Économisez sur vos commandes"} </Text>
            </View>
            <View>
              <Text style={[styles.eventContainerPriceText, {fontSize: 20}]}>
                {"  →  "}
              </Text>
            </View>
          </View>
        </View>

        <ScrollView horizontal >
          <FlatList
            data={restaurants}
            renderItem={(item) => (
              <FlatList
                data={item.item.events}
                renderItem={(eventsItem) => (
                  <View
                    onTouchEnd={() => { navigate('EventDetail', { restaurant: item.item, event: eventsItem.item }) }}
                    style={styles.eventContainer}>

                    <Image
                      source={{ uri: eventsItem.item.image }}
                      resizeMode={"cover"}
                      style={styles.eventContainerImage}
                    />
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                      <View style={{ flex: 1, marginRight: 4, }}>
                        <Text style={styles.eventContainerTitle}>
                          {eventsItem.item.name.toUpperCase()}
                        </Text>
                        <Text style={styles.eventContainerSubTitle}>
                          {"Se termine : " + (ConvertDateToFrench(eventsItem.item.date_of_end))}
                        </Text>
                      </View>
                      <View style={styles.eventContainerPriceTag}>
                        <Text style={styles.eventContainerPriceText}>
                          {"-" + eventsItem.item.dish[0].reduction + "%"}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
                keyExtractor={item => item.name}
                contentContainerStyle={{ flexDirection: 'row' }}
              />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={{ flexDirection: 'row' }}
          />
        </ScrollView>

        {/** Near restaurants */}
        <View style={{ marginBottom: 7, paddingHorizontal: 20, paddingTop: 10, borderColor: "#D2D2D2", borderTopWidth: 1 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
            <View>
              <Text style={{ color: "#000000", fontSize: 16, fontWeight: "bold", }}>{"Restaurants proches"} </Text>
              <Text style={styles.eventContainerSubTitle}>{"Économisez en frais de livraison"} </Text>
            </View>
            <View>
              <Text style={[styles.eventContainerPriceText, {fontSize: 20}]}>
                {"  →  "}
              </Text>
            </View>
          </View>
        </View>

        <ScrollView horizontal>
          <FlatList
            data={restaurants}
            renderItem={(item) => (
              <View
                onTouchEnd={() => { navigate('RestaurantDetail', { restaurant: item.item }) }}
                style={styles.eventContainer}>

                <View>
                  <Image
                    source={{ uri: item.item.cover_image }}
                    resizeMode={"cover"}
                    style={styles.eventContainerImage}
                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', height: 170, width: '100%' }}>
                    <View style={{ overflow: 'hidden', width: screenWidth / 3, aspectRatio: 1, backgroundColor: '#D2D2D2', borderRadius: 100, borderColor: 'white', borderWidth: 5 }}>
                      <Image
                        source={{ uri: item.item.logo_image }}
                        resizeMode={"cover"}
                        style={{ width: '100%', height: '100%', position: 'absolute' }}
                      />
                    </View>
                  </View>

                </View>

                <View style={{ flexDirection: "row", alignItems: "center", }}>
                  <View style={{ flex: 1, marginRight: 4, }}>
                    <Text style={styles.eventContainerTitle}>
                      {item.item.name.toUpperCase()}
                    </Text>
                    <Text style={styles.eventContainerSubTitle}>
                      {item.item.description}
                    </Text>
                  </View>
                 
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={{ flexDirection: 'row' }}
          />
        </ScrollView>


        <View style={{ marginTop: 50 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ConvertDateToFrench(timestamp) {
  const mois = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"]

  function frenchTodayDate(date) {
    let today = new Date(date);
    let year = today.getFullYear()
    let dayNumber = today.getDate()
    let month = mois[today.getMonth()]
    let weekday = today.toLocaleDateString("fr-FR", { weekday: "long" });

    return { weekday, dayNumber, month, year }
  }

  //=> { weekday: 'mercredi', dayNumber: 12, month: 'octobre', year: 2022 }

  /*So let's say you want to print date according tothe french languages rules*/
  const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
  const { weekday, dayNumber, month, year } = frenchTodayDate(parseInt(timestamp))
  const aujourdhui = `${capitalize(weekday)}, le ${dayNumber} ${month} ${year}`
  return aujourdhui
}