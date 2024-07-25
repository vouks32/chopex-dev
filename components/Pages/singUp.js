import React from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles, screenWidth, screenHeight } from '../Style';

export default function SignUp({ navigation: { navigate } }) {
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
            marginBottom: 14,
            marginLeft: 21,
          }}>
          {"Inscrivez-vous"}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder='Adresse Mail'
          >

        </TextInput>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 14,
          }}>
          <TextInput
            style={{...styles.textInput, width: "20%", marginHorizontal: "0", marginVertical: 0}}
            placeholder='237'
            >
          </TextInput>
          <TextInput
            style={{...styles.textInput, width: "75%", marginHorizontal: "0", marginVertical: 0}}
            placeholder='Numéro de Téléphone'
            >
          </TextInput>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder='Mot de passe'>
        </TextInput>
        <TouchableOpacity
          style={styles.primaryButton}
          onPressOut={()=>{navigate('LogIn')}}>
          <Text
            style={styles.primaryButtonText}
            >
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
          style={styles.secondaryButton}>
          <Text
            style={styles.secondaryButtonText}>
            {"Continnuer avec Google"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}>
          <Text
            style={styles.secondaryButtonText}>
            {"Continnuer avec Apple"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tertiaryButton}
          onPressOut={()=>{navigate('LogIn')}}>
          <Text
            style={styles.tertiaryButtonText}>
            {"J’ai déjà un compte"}
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
