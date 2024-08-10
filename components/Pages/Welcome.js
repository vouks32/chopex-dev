import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles, screenWidth, screenHeight } from '../Style';
import { welcome } from '../defaults/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetRestaurants } from '../firestore/restaurants';
import { getProfilLocal } from '../firestore/profil';

export default function Welcome({ navigation: { navigate } }) {

  const [destination, setDestination] = useState('SignUp')

  //AsyncStorage.clear()
  getProfilLocal().then(prof => {
    if (prof != null){
      setDestination('Home')
    }
  })

  GetRestaurants(() => {
    console.log("restaurants loaded")
  }, (isNoRestaurants) => {
    if (isNoRestaurants)
      console.log("there are no restaurants")
    else
      console.log("Connection error?")
  })

  // 2. Use at the root of your app
  return (
    <SafeAreaView style={styles.viewport}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF"
        }}>
        <Image
          source={welcome}
          resizeMode={'cover'}

          style={{
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
            marginBottom: 26,
            height: screenHeight * 0.8,
            width: screenWidth
          }}
        />
        <TouchableOpacity style={styles.primaryButton} onPressOut={() => { navigate(destination, {}) }}>
          <Text
            style={styles.primaryButtonText}>
            {'CONTINUER'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
