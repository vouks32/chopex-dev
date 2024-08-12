import React, { useState } from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles, screenWidth, screenHeight } from '../Style';
import { MiniMap } from '../Sections/maps';

export default function TestPage({ navigation: { navigate } }) {

  
  return (
    <SafeAreaView style={styles.viewport}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF"
        }}>
       <MiniMap/>
      </ScrollView>
    </SafeAreaView>
  );
}
