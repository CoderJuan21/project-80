import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequestScreen from '../screens/BookRequestScreen';
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'



export const AppTabNavigator = createBottomTabNavigator({
  ExchangeScreen: {
    screen: ExchangeScreen,
    navigationOptions :{
      tabBarLabel : "ExchangeScreen"
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions :{
      tabBarLabel : "HomeScreen",
    }
  },
  SettingsScreen:{
screen:SettingsScreen,
navigationOptions:{
    tabBarLabel:"SettingsScreen"
}
  },
});