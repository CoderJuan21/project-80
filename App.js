import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from './screens/SignUpLoginScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import HomeScreen from './screens/HomeScreen';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
import SettingsScreen from './screens/SettingsScreen'
import {AppTabNavigator} from './components/AppTabNavigator'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

export default function App() {
  return (
    
    <SignUpLoginScreen/>
   
  )
}
const switchNavigator=createSwitchNavigator({
  ExchangeScreen:{screen:ExchangeScreen},
  HomeScreen:{screen:HomeScreen},
  SettingsScreen:{screen:SettingsScreen}
})

const AppContainer=createAppContainer(switchNavigator)