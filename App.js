
import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';


export default class App extends Component{
  render() {
   // alert('Holla')
    return(
      <View style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
          <StatusBar hidden/>
          <Text>Holla Diva</Text>
      </View>
    )
  }
}
