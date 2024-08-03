import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles, screenWidth, screenHeight } from '../Style';
import { SignInProfil } from '../firestore/profil';
import { SmallModal } from '../Sections/modal';

export default function SignUp({ navigation: { navigate } }) {

  // if the user already have a profil saved locally no need to signin
  AsyncStorage.getItem('Profil').then((profiltext) => {
    let profil = JSON.parse(profiltext)
    if (profil) {
      navigate('Home')
    }
  })

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phoneNumber, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modal, setModal] = useState({ enable: false, text: "", yes: "yes", no: "no", yesAction: () => { }, noAction: () => { } });
  const defaultModal = {
    enable: false, text: "", yes: "yes", no: "no", yesAction: () => { router.navigate('./signin'); }, noAction: () => { }
  }

  const SignIn = () => {
    if (name.length < 4) {
      setIsError('Le nom doit être d\'au moin 4 caractères');
      return
    }
    if (!validateEmail(mail)) {
      setIsError('addresse e-mail invalide')
      return
    }
    if (phoneNumber.length < 9 || phoneNumber.startsWith('6') == false) {
      setIsError('Numéro de téléphone invalide')
      return
    }
    if (password.length < 6) {
      setIsError('Mot de passe trop court, 8 caractères minimum')
      return
    }
    setIsLoading(true)
    SignInProfil(name, mail, phoneNumber, password, () => {
      setIsLoading(false)
      navigate('Home')
    }, (exist, number) => {
      if (exist) {
        setModal({
          enable: true,
          text: (number ? "Le numéro est déjà associé à un compte," : "Le mail est déjà associé à un compte,") + " Voulez-vous plutôt vous connecter?",
          yes: "Oui",
          no: "Non",
          yesAction: () => { setModal(defaultModal); navigate('LogIn'); setIsLoading(false) },  // //////////////////
          noAction: () => { setModal(defaultModal); setIsLoading(false) }
        })
        console.log("Account already exist, do you want to Log in")
        return
      }
      setIsLoading(false)
    })
    setIsError(false)
  }

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

        <TextInput style={styles.textInput} placeholder='Nom' onChangeText={newText => setName(newText)}></TextInput>
        <TextInput style={styles.textInput} placeholder='Adresse Mail' onChangeText={newText => setMail(newText)}></TextInput>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 14,
          }}>
          <TextInput editable={false} style={{ ...styles.textInput, width: "20%", marginHorizontal: "0", marginVertical: 0 }} placeholder='237' ></TextInput>
          <TextInput onChangeText={newText => setNumber(newText)} style={{ ...styles.textInput, width: "75%", marginHorizontal: "0", marginVertical: 0 }} placeholder='Numéro de Téléphone'></TextInput>
        </View>

        <TextInput onChangeText={newText => setPassword(newText)} style={styles.textInput} placeholder='Mot de passe' />

        <TouchableOpacity
          style={styles.primaryButton}
          onPressOut={() => { if (!isLoading) SignIn() }}>
          {!isLoading ?
            <Text style={styles.primaryButtonText}>CONTINUER</Text>
            :
            <ActivityIndicator size={"small"} />
          }
        </TouchableOpacity>
        {isError ?
          <View style={styles.errorBox}><Text style={{ color: 'red' }}>{isError}</Text></View>
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
          onPressOut={() => { navigate('LogIn') }}>
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