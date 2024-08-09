import React from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native';
import { wallet, search } from '../defaults/images';
import { styles, screenWidth, screenHeight } from '../Style';

export default function Search({ navigation: { navigate, goBack } }) {
  // 2. Use at the root of your app
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'space-between',
              marginBottom: 14,
              marginHorizontal: 20,
            }}>
            <TouchableOpacity style={styles.backButton} onPressOut={() => { goBack() }}>
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
              {"Recherche"}
            </Text>
          </View>

          {/* SEARCH BAR */}
          <View
            style={styles.searchContainer}>
            <Image
              source={search}
              resizeMode={"contain"}
              style={styles.searchIcon}
            />
            <TextInput style={{ width: '90%', marginVertical: 2, marginHorizontal: 10 }}></TextInput>
          </View>
        </View>

        {/** Liste of Categories 
        <ScrollView
          onTouchEnd={() => { navigate('CategoryDetail') }}
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
*/}
        {/** Liste of Results */}
        <View onTouchEnd={() => { /*navigate('FoodDetail')*/ }}>
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
    </SafeAreaView>
  );
}
