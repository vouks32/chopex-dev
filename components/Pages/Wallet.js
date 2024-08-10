import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native';
import { wallet, search } from '../defaults/images';
import { styles, screenWidth, screenHeight } from '../Style';
import { WalletModal } from '../Sections/modal';

export default function Wallet({ navigation: { navigate, goBack } }) {
  const [modalVisible, setModalVisible] = useState(false);

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
              {"Porte-feuille"}
            </Text><Text
              style={{
                flex: 1
              }}>
            </Text>
          </View>

          <View style={{ marginHorizontal: 20, borderRadius: 10, padding: 10, backgroundColor: '#7AEC6720' }}>
            <Text style={styles.sectionTitleSubHeading}>SOLDE:</Text>
            <Text style={[styles.sectionTitleHeading, { marginVertical: 10, fontSize: 32 }]}>CFA 10,000</Text>
            <TouchableOpacity style={styles.primaryButton} onPressOut={() => { setModalVisible(true) }}>
              <Text
                style={styles.primaryButtonText}>
                {'Ajouter des fonds'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionTitleContainer}>
            <View style={{ }}>
              <Text style={styles.sectionTitleHeading}>{"Transactions"}</Text>
              <Text style={styles.sectionTitleSubHeading}>{"Historique de vos transactions"}</Text>
            </View>
          </View>

        </View>

        {modalVisible? <WalletModal setVisible={modalVisible} onModalClosed={()=>{setModalVisible(false)}} /> : <></>}
      </ScrollView>
    </SafeAreaView>
  );
}
