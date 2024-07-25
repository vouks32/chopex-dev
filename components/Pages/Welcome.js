import React from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles, screenWidth, screenHeight } from '../Style';

export default function Welcome({ navigation: { navigate } }) {
  // 2. Use at the root of your app
  return (
    <SafeAreaView style={styles.viewport}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF"
        }}>
        <Image
          source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
          resizeMode={'stretch'}
          style={{
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
            marginBottom: 26,
            height: screenHeight*0.8,
          }}
        />
        <TouchableOpacity style={styles.primaryButton} onPressOut={()=>{navigate('SignUp', { names: ['Brent', 'Satya', 'Michaś'] })}}>
          <Text
            style={styles.primaryButtonText}>
            {'CONTINUER'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
