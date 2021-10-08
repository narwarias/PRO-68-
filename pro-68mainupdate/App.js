import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import TransactionScreen from './screens/TransactionScreen'
import SearchScreen from './screens/SearchScreen'

export default class App extends Component{
  render(){
    return(
   <AppContainer/>


    )
  }
}

 var tabNavigator =createBottomTabNavigator({
   facebook:{screen:fb},
   instagram:{screen:fb}
 })

 const AppContainer = createAppContainer(tabNavigator);
