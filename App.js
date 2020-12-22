import React from 'react';
import ScannerScreen from './screens/scannerScreen'
import HomeScreen from './screens/homeScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import{Image, View} from 'react-native'
export default class App extends React.Component{
  render(){
        <Image
          style={{width: 150,
            height: 150,
            marginLeft: 95,}}
          source={{
            uri:'D:\cheshta(WhiteHat jr)\Apps\Projects\Barcode Scanner\assets\barcodeScanner.jpg'
          }}
        />
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
