/* eslint-disable react-hooks/exhaustive-deps */
import { StyleSheet, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Colors } from '../utils/Constants'
import Background from '../components/baymax/Background'
import { Animated } from 'react-native'

const BaymaxScreen = () => {

  const [showInstructions,setShowInstruction]=useState(false);
  const [showLoader,setShowLoader]=useState(false);
  const [message,setShowMessage]=useState(false);
  const [showPedometer,setShowPedometer]=useState(false);

  const blurOpacity=useRef(new Animated.Value(0)).current;

  const startBlur=()=>{
    Animated.timing(blurOpacity,{
      toValue:1,
      duration:2000,
      useNativeDriver:true,
    }).start()
  }

  const unBlur=()=>{
    Animated.timing(blurOpacity,{
      toValue:0,
      duration:2000,
      useNativeDriver:true
    }).start()
  }

  useEffect(()=>{
    const timer=setTimeout(startBlur,500);
    return ()=>clearTimeout(timer);
  },[])

  return (
    <View style={styles.container}>
      <Background blurOpacity={blurOpacity}/>
    </View>
  )
}

export default BaymaxScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.secondry,
    justifyContent:'center',
    alignItems:'center',
  },
  loaderContainer:{
    position:'absolute'
  }
})