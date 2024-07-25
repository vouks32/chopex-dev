import React from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native';
import { wallet, search } from '../defaults/images';
import { styles, screenWidth, screenHeight } from '../Style';

export default function Search() {
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
                marginBottom: 14,
                marginHorizontal: 20,
              }}>
              <View style={{ alignItems: "center", padding: 5, width: 35, marginRight: 108, backgroundColor: "#D2D2D2", borderRadius: 50, aspectRatio: 1 }}>
                <Text style={{ color: "#000000", fontSize: 20, fontWeight: "bold", }}>
                  {"←"}
                </Text>
              </View>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 20,
                  fontWeight: "bold",
                  flex: 1,
                }}>
                {"Catégories"}
              </Text>
            </View>

            {/* SEARCH BAR */}
            <View
              style={ styles.searchContainer}>
              <Image
                source={search}
                resizeMode={"contain"}
                style={styles.searchIcon}
              />
              <TextInput style={{ width: '90%', marginVertical: 2, marginHorizontal: 10 }}></TextInput>
            </View>
        </View>

        {/** Liste of Categories */}
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
        
        {/** Liste of Results */}
        <View>
          <View style={{flexDirection : 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'stretch'}}>
            <View style={{width: "25%", borderRadius: 10, backgroundColor: "#D2D2D2", aspectRatio: 1}}></View>
            <View style={{width: "50%"}}>
              <Text style={{backgroundColor: "#D2D2D2", marginVertical: 5}}></Text>
              <Text style={{backgroundColor: "#D2D2D2", marginBottom: 5}}></Text>
              <Text style={{backgroundColor: "#D2D2D2", marginBottom: 5}}></Text>
            </View>
            <View style={{width: "20%", borderRadius: 10, backgroundColor: "#D2D2D2", paddingVertical: 10}}></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
