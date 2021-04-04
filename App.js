import React, {Component} from 'react'
import {View,Text, Button} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Firebase from './components/Routes'


export default class App extends Component{
  render(){
    return(
      <SafeAreaProvider><Firebase/></SafeAreaProvider>
    )
  }
}