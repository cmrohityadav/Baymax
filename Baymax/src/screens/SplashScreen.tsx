/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { navigate } from '../utils/NavigationUtils'

const SplashScreen = () => {
    
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <TouchableOpacity
        onPress={()=>navigate('BaymaxScreen')}
        >
            <Text>SplashScreen</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SplashScreen
