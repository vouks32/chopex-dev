import React from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles, screenWidth, screenHeight } from '../Style';
import { wallet, search } from '../defaults/images';


export default function CategoryDetail({ navigation: { navigate, goBack } }) {
  // 2. Use at the root of your app
  return (
    <SafeAreaView style={styles.viewport}>
      <ScrollView style={styles.defaultScollView}>

        {/* TOP Line with back button */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: 'space-between',
            marginBottom: 14,
            marginHorizontal: 20,
          }}>
          <TouchableOpacity style={styles.backButton} onPressOut={()=>{goBack()}}>
            <Text style={styles.backButtonIcon}>
              {"←"}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
              flex: 9,
              fontWeight: "bold",
              textAlign: 'center',
            }}>
            {"Nom de La Catégorie"}
          </Text>
        </View>

        {/* SEARCH BAR */}
        <View
          style={{
            borderColor: "#00000015",
            borderBottomWidth: 1,
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
