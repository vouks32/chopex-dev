import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles, screenWidth, screenHeight } from '../Style';
import OrderModal from '../Sections/modal';

export default function FoodDetail({ navigation: { navigate, goBack } }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={{ ...styles.viewport, height: screenHeight }}>
      <ScrollView style={{ ...styles.defaultScollView, height: screenHeight }}>

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
          <View style={{width: 35, aspectRatio: 1}}>
            <TouchableOpacity style={{ ...styles.backButton }} onPressOut={()=>{goBack()}}>
              <Text style={styles.backButtonIcon}>
                {"←"}
              </Text>
            </TouchableOpacity>
          </View>

        </View>

        {/** Food details (name, price, etc) */}
        <Text
          style={{
            color: "#000000",
            fontSize: 24,
            fontWeight: "bold",
            marginLeft: 20,
          }}>
          {"Nom du Plat"}
        </Text>
        <Text
          style={{
            color: "#000000",
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 20,
          }}>
          {"12000 Frs"}
        </Text>
        <Text
          style={{
            color: "#000000",
            fontSize: 14,
            fontWeight: "bold",
            marginLeft: 20,
          }}>
          {"Description détaillé du plat"}
        </Text>

        {/** Food variants and addings TITLE */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            marginHorizontal: 20,
            paddingVertical: 5,
            borderTopWidth: 1,
            borderColor: '#00000010'
          }}>
          <View
            style={{
              width: 175,
            }}>
            <Text
              style={{
                color: "#000000",
                fontSize: 16,
                fontWeight: "bold",
                marginLeft: 1,
              }}>
              {"Nom du plat"}
            </Text>
            <Text
              style={{
                color: "#00000050",
                fontSize: 13,
                fontWeight: "bold",
              }}>
              {"Selectionnez le type du plat"}
            </Text>
          </View>
          <View
            style={{
              width: 73,
              alignItems: "center",
              backgroundColor: "#D9D9D9",
              borderRadius: 20,
              paddingVertical: 5,
            }}>
            <Text
              style={{
                color: "#000000",
                fontSize: 15,
                fontWeight: "bold",
              }}>
              {"Requis"}
            </Text>
          </View>
        </View>

        {/** Food variants and addings OPTIONS */}
        <View
         onTouchEnd={() => { setIsModalVisible(true) }}
          style={{
            flexDirection: "row",
            marginBottom: 10,
            marginHorizontal: 25,
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderColor: '#00000010',
            paddingVertical: 5
          }}>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              borderRadius: 10,
              flex: 1,
              aspectRatio: 1,
              marginRight: 13,
            }}
          />
          <View style={{
            flex: 5,
          }}>
            <Text
              style={{
                color: "#000000",
                fontSize: 20,
                fontWeight: "bold",
              }}>
              {"Plat N° 001"}
            </Text>
            <Text
              style={{
                color: "#000000",
                fontSize: 14,
                fontWeight: "bold",
                marginTop: 5,
              }}>
              {"Plat N° 001"}
            </Text>
          </View>
          <Image
            source={{ uri: "https://docs.blender.org/manual/sl/3.6/_images/grease-pencil_modes_draw_tools_circle_example-02.png" }}
            resizeMode={"stretch"}
            style={{
              width: 25,
              height: 25,
              marginTop: 8,
            }}
          />
        </View>

        {/** Frequently ordered food */}
        <View style={{ marginTop: 20 }} onTouchEnd={() => { navigate('FoodDetail') }}>
          <Text
            style={{
              color: "#000000",
              fontSize: 16,
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
        
      {isModalVisible?  <OrderModal setVisible={isModalVisible} onModalClosed={()=>{setIsModalVisible(false)}}/> : <></>}
        
      </ScrollView>
    </SafeAreaView>
  );
}
