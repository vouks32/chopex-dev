import React from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles, screenWidth, screenHeight } from '../Style';
import { wallet, search } from '../defaults/images';

export default function Home() {
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
          <View
            style={{
              height: 35,
              width: 35,
              borderRadius: 50,
              backgroundColor: "#D2D2D2",
              padding: 3,
              marginHorizontal: 10
            }}>
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

        {/* SEARCH BAR */}
        <View
          style={{
            backgroundColor: "#D9D9D9",
            borderRadius: 20,
            paddingHorizontal: 10,
            marginBottom: 24,
            marginHorizontal: 20,
            flexDirection: 'row',
            flexWrap: 'nowrap'
          }}>
          <Image
            source={search}
            resizeMode={"contain"}
            style={{
              width: 23,
              height: 30,
              marginVertical: 5,
            }}
          />
          <TextInput style={{ width: '90%', marginVertical: 2, marginHorizontal: 10 }}></TextInput>
        </View>

        {/* CATEGORY SCROLLVIEW */}
        <ScrollView
          horizontal
          style={{ flexDirection: "row", marginBottom: 25, marginHorizontal: 0, paddingHorizontal: 10 }}>
          <View style={{ padding: 35, backgroundColor: "#D2D2D2", borderRadius: 50, marginHorizontal: 5 }}>
          </View>
          <View style={{ padding: 35, backgroundColor: "#D2D2D2", borderRadius: 50, marginHorizontal: 5 }}>
          </View>
          <View style={{ padding: 35, backgroundColor: "#D2D2D2", borderRadius: 50, marginHorizontal: 5 }}>
          </View>
          <View style={{ padding: 35, backgroundColor: "#D2D2D2", borderRadius: 50, marginHorizontal: 5 }}>
          </View>
          <View style={{ padding: 35, backgroundColor: "#D2D2D2", borderRadius: 50, marginHorizontal: 5 }}>
          </View>
          <View style={{ padding: 35, backgroundColor: "#D2D2D2", borderRadius: 50, marginHorizontal: 5 }}>
          </View>
        </ScrollView>

        {/* RESTAURANT SCROLLVIEW */}
        <ScrollView
          horizontal
          style={{
            marginBottom: 7,
            paddingHorizontal: 17,
          }}>
          <Text
            style={{
              color: "#000000",
              fontSize: 16,
              fontWeight: "bold",
            }}>
            {"Restaurants proches"}
          </Text>

          <Text
            style={{
              color: "#000000",
              fontSize: 16,
              fontWeight: "bold",
            }}>
            {"→"}
          </Text>
        </ScrollView>

        <ScrollView horizontal style={{ flexDirection: "row", marginBottom: 25, marginHorizontal: 0, paddingHorizontal: 10 }}>
          <View style={{ width: screenWidth / 4, paddingHorizontal: 5 }}>
            <View style={{ width: "100%", aspectRatio: 1, backgroundColor: "#D2D2D2", borderRadius: 50, marginHorizontal: 5, marginHorizontal: 5 }}></View>
            <Text style={{ textAlign: "center" }}>Nom du resto</Text>
          </View>
          <View style={{ width: screenWidth / 4, paddingHorizontal: 5 }}>
            <View style={{ width: "100%", aspectRatio: 1, backgroundColor: "#D2D2D2", borderRadius: 50, marginHorizontal: 5, marginHorizontal: 5 }}></View>
            <Text style={{ textAlign: "center" }}>Nom du resto</Text>
          </View>
          <View style={{ width: screenWidth / 4, paddingHorizontal: 5 }}>
            <View style={{ width: "100%", aspectRatio: 1, backgroundColor: "#D2D2D2", borderRadius: 50, marginHorizontal: 5, marginHorizontal: 5 }}></View>
            <Text style={{ textAlign: "center" }}>Nom du resto</Text>
          </View>
        </ScrollView>

        <View
          style={{
            borderColor: "#00000015",
            borderWidth: 1,
            paddingVertical: 20,
            paddingHorizontal: 19,
            marginBottom: 9,
          }}>
          <Image
            source={{ uri: "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?b=1&s=612x612&w=0&k=20&c=Mn_EPBAGwtzh5K6VyfDmd7Q5eJFXSHhGWVr3T4WDQRo=" }}
            resizeMode={"cover"}
            style={{
              borderRadius: 20,
              height: 170,
              marginBottom: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center", }}>

            <View style={{ flex: 1, marginRight: 4, }}>
              <Text style={{ color: "#000000", fontSize: 16, fontWeight: "bold", }}>
                {"-50% chez MAMIE BEIGNETS !"}
              </Text>
              <Text style={{ color: "#000000", fontSize: 12, fontWeight: "bold", }}>
                {"0Frs Delivery fee  ▪  10 - 20 min"}
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
                backgroundColor: "#D2D2D2",
                padding: 10,
                borderRadius: 50
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 13,
                  fontWeight: "bold",
                }}>
                {"4.3"}
              </Text>
            </View>

          </View>
        </View>

        <View
          style={{
            marginBottom: 7,
            paddingHorizontal: 17,
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text
              style={{
                color: "#000000",
                fontSize: 16,
                fontWeight: "bold",
              }}>
              {"Restaurants proches"}
            </Text>
            <Text
              style={{
                color: "#000000",
                fontSize: 16,
                fontWeight: "bold",
              }}>
              {"→"}
            </Text>
          </View>

          <Text
            style={{
              color: "#000000",
              fontSize: 13,
              fontWeight: "bold",
            }}>
            {"Menu de la force du poulet"}
          </Text>
        </View>

        <View >
          <View
            style={{
              paddingHorizontal: 20,
            }}>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 10,
                height: 170,
                marginTop: 0,
              }}
            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
