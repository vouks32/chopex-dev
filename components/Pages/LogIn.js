import React, { useState } from 'react';
import { Link, router, useNavigation } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles, screenWidth, screenHeight } from '../Style';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { SmallModal } from '../Sections/modal';
import { LoginInProfil } from '../firestore/profil';

export default function LogIn({ navigation: { navigate } }) {

  // if the user already have a profil saved locally no need to login
  /* AsyncStorage.getItem('Profil').then((profiltext) => {
     let profil = JSON.parse(profiltext)
     if (profil) {
       router.replace('../home')
     }
   })*/

  const [mail, setMail] = useState('');
  const [phoneNumber, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState({ enable: false, text: "", yes: "yes", no: "no", yesAction: () => { }, noAction: () => { } });
  const defaultModal = {
    enable: false, text: "", yes: "yes", no: "no", yesAction: () => { router.navigate('./signin'); }, noAction: () => { }
  }

  const setidentifier = (identifier) => {
    var regExp = /[a-zA-Z]/g;
    if (regExp.test(identifier)) {
      setNumber('')
      setMail(identifier)
    } else {
      setMail('')
      setNumber(identifier)
    }
  }

  const SignUp = () => {
    if (mail != '' && !validateEmail(mail)) {
      setIsError('Invalid Mail')
      return
    }
    if (phoneNumber != '' && (phoneNumber.length < 9 || phoneNumber.startsWith('6') == false)) {
      setIsError('Invalid Phone Number')
      return
    }
    if (password.length < 6) {
      setIsError('Password must be atleast 6 characters')
      return
    }
    setIsLoading(true)
    LoginInProfil(mail, phoneNumber, password, () => {
      navigate('Home')
    }, (exist, number) => {
      if (exist) {
        setModal({
          enable: true,
          text: "Mot de passe incorrect, l'avez vous oublié?",
          yes: "Oui",
          no: "No",
          yesAction: () => { setModal(defaultModal) },  // //////////////////
          noAction: () => { setModal(defaultModal) }
        })
        console.log("Incorrect password, did you forget your password?")
      } else {
        setModal({
          enable: true,
          text: "Ce compte n'existe pas, voulez-vous créer un compte?",
          yes: "Oui",
          no: "Non",
          yesAction: () => { navigate('SignUp'); setModal(defaultModal) },
          noAction: () => { setModal(defaultModal) }
        })
        console.log("Account doesn't exist, do you want to create one?")
      }
      setIsLoading(false)
    })
    setIsError(false)
  }

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
          onChangeText={newText => setidentifier(newText)}
        >
        </TextInput>
        <TextInput
          style={styles.textInput}
          placeholder='Mot de passe'
          onChangeText={newText => setPassword(newText)}
        >
        </TextInput>
        <TouchableOpacity
          style={styles.primaryButton}
          onPressOut={() => { SignUp() }}>
          {!isLoading ?
            <Text style={styles.primaryButtonText}>CONTINUER</Text>
            :
            <ActivityIndicator size={"small"} />
          }
        </TouchableOpacity>

        {isError ?
          <View style={styles.errorBox}><Text>{isError}</Text></View>
          : <></>
        }

        <View
          style={{
            height: 1,
            backgroundColor: "#000000",
            marginVertical: 20,
            marginHorizontal: 14,
          }}>
        </View>
        {/**
        <TouchableOpacity
          style={styles.secondaryButton}
          onPressOut={() => { navigate('Home') }}>
          <Text
            style={styles.secondaryButtonText}>
            {"Continnuer avec Google"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPressOut={() => { navigate('Home') }}>
          <Text
            style={styles.secondaryButtonText}>
            {"Continnuer avec Apple"}
          </Text>
        </TouchableOpacity>
 */}
        <TouchableOpacity
          style={styles.tertiaryButton}
          onPressOut={() => { navigate('SignUp') }}>
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

        <SmallModal enable={modal.enable} text={modal.text} yesButton={modal.yes} noButton={modal.no} yesAction={modal.yesAction} noAction={modal.noAction} />

      </ScrollView>
    </SafeAreaView>
  );
}


const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};