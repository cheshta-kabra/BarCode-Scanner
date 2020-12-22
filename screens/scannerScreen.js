import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity , Image} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner'
import * as Permissions from 'expo-permissions'

export default class BookTransctionScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            scaned:false,
            scannedData:'',
            buttonState:'normal'
        }
    }
    getCameraPermissions = async (id) =>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        
        this.setState({
          /*status === "granted" is true when user has granted permission
            status === "granted" is false when user has not granted the permission
          */
          hasCameraPermissions: status === "granted",
          scanned:false,
          buttonState:'clicked'
        });
      }
      handleBarCodeScanned = async({type, data})=>{
       this.setState({
        scanned:true,
        buttonState:'normal',
        scannedData:data
       })
      }
      
    render(){
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
      const buttonState = this.state.buttonState;

      if (buttonState !== "clicked" && hasCameraPermissions){
        return(
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        );
      }
      else if(buttonState==='normal'){
        return(
            <View style={styles.container}>
                <Text style={styles.displayText}>{hasCameraPermissions===true? this.scannedData:"Request Camera Permisions"}</Text>
               
                <TouchableOpacity style={styles.scanButton}
                onPress={this.getCameraPermissions}>
                    <Text style={styles.buttonText}> Scann QR Code </Text>
                </TouchableOpacity>
            </View>
        )
      }
        
    }   
}        
const styles = StyleSheet.create({ 
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
     displayText:{ fontSize: 15, textDecorationLine: 'underline' }, 
     scanButton:{ backgroundColor: '#2196F3', padding: 10, margin: 10 }, 
     buttonText:{ fontSize: 20, },
     inputView:{ flexDirection: 'row', margin: 20 }, 
     inputBox:{ width: 200, height: 40, borderWidth: 1.5, borderRightWidth: 0, fontSize: 20 },
     });