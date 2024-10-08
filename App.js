// In App.js in a new project

import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';

import Welcome from './components/Pages/Welcome.js';
import SignUp from './components/Pages/singUp.js';
import LogIn from './components/Pages/LogIn.js';

import Home from './components/Pages/Home.js';
import Search from './components/Pages/Search.js';
import Wallet from './components/Pages/Wallet.js';
import Basket from './components/Pages/Basket.js';
import OrderDetails from './components/Pages/OrderDetails.js';
import CategoryDetail from './components/Pages/CategoryDetail.js';
import RestaurantDetail from './components/Pages/RestaurantDetail.js';
import EventDetail from './components/Pages/EventDetails.js';
import FoodDetail from './components/Pages/FoodDetail.js';

import TestPage from './components/Pages/TestPage.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function App() {

  //AsyncStorage.clear()
  //StatusBar.setBackgroundColor('#FFFFFF00')
 // StatusBar.setBarStyle('default')
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#7AEC67"
        barStyle={'dark-content'}
        showHideTransition={'slide'}
        hidden={false}
      />
      <Stack.Navigator initialRouteName='OrderDetails'> 
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown : false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown : false}}/>
        <Stack.Screen name="LogIn" component={LogIn} options={{headerShown : false}}/>
        <Stack.Screen name="Test" component={TestPage} options={{headerShown : false}}/>

        <Stack.Screen name="Home" component={Home} options={{headerShown : false}}/>
        <Stack.Screen name="Search" component={Search} options={{headerShown : false}}/>
        <Stack.Screen name="Basket" component={Basket} options={{headerShown : false}}/>
        <Stack.Screen name="OrderDetails" component={OrderDetails} options={{headerShown : false}}/>
        <Stack.Screen name="Wallet" component={Wallet} options={{headerShown : false}}/>
        <Stack.Screen name="CategoryDetail" component={CategoryDetail} options={{headerShown : false}}/>
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} options={{headerShown : false}}/>
        <Stack.Screen name="EventDetail" component={EventDetail} options={{headerShown : false}}/>

        <Stack.Screen name="FoodDetail" component={FoodDetail} options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;