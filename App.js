import React from 'react';
import ScannerScreen from './screens/scannerScreen'
import HomeScreen from './screens/homeScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
export default class App extends React.Component{
  render(){
    return (
      <AppContainer />
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  ScannerScreen:{screen:ScannerScreen},
  HomeScreen : {screen:HomeScreen}
  })
const AppContainer = createAppContainer(TabNavigator)
