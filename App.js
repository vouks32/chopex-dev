// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';

import Welcome from './components/Pages/Welcome.js';
import SignUp from './components/Pages/singUp.js';
import LogIn from './components/Pages/LogIn.js';

import Home from './components/Pages/Home.js';
import Search from './components/Pages/Search.js';
import CategoryDetail from './components/Pages/CategoryDetail.js';
import FoodDetail from './components/Pages/FoodDetail.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown : false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown : false}}/>
        <Stack.Screen name="LogIn" component={LogIn} options={{headerShown : false}}/>

        <Stack.Screen name="Home" component={Home} options={{headerShown : false}}/>
        <Stack.Screen name="Search" component={Search} options={{headerShown : false}}/>
        <Stack.Screen name="CategoryDetail" component={CategoryDetail} options={{headerShown : false}}/>
        <Stack.Screen name="FoodDetail" component={FoodDetail} options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;