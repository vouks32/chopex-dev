import React from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles, screenWidth, screenHeight } from '../Style';

export default function LogIn({ navigation: { navigate } }) {
  // 2. Use at the root of your app
  return (
    <SafeAreaView
      style={styles.viewport}>
      <ScrollView
        style={styles.defaultScollView}>
        <Text
          style={{
            color: "#000000",
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 13,
            marginLeft: 21,
          }}>
          {"Connectez-vous"}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder='Adresse Mail / Numéro de Téléphone'
          >
        </TextInput>
        <TextInput
          style={styles.textInput}
          placeholder='Mot de passe'
          >
        </TextInput>
        <TouchableOpacity
          style={styles.primaryButton}
          onPressOut={()=>{navigate('Home')}}>
          <Text
           style={styles.primaryButtonText}>
            {"CONTINUER"}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            height: 1,
            backgroundColor: "#000000",
            marginVertical: 20,
            marginHorizontal: 14,
          }}>
        </View>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPressOut={()=>{navigate('Home')}}>
          <Text
            style={styles.secondaryButtonText}>
            {"Continnuer avec Google"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPressOut={()=>{navigate('Home')}}>
          <Text
            style={styles.secondaryButtonText}>
            {"Continnuer avec Apple"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tertiaryButton}
          onPressOut={()=>{navigate('SignUp')}}>
          <Text
            style={styles.tertiaryButtonText}>
            {"Je n’ai pas de compte"}
          </Text>
          <View
            style={{
              height: 1,
              backgroundColor: "#07450D",
            }}>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
