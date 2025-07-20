/* eslint-disable react-native/no-inline-styles */
 
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useEffect } from 'react'
import { navigate } from '../utils/NavigationUtils'
import { Colors, lightColors } from '../utils/Constants'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { screenHeight, screenWidth } from '../utils/Scaling'
import LinearGradient from 'react-native-linear-gradient'
import CustomText from '../components/global/CustomText'
import LottieView from 'lottie-react-native'

const bottomColors=[...lightColors].reverse();
const SplashScreen:FC = () => {
   

const baymaxAnimation =useSharedValue(screenHeight*0.8);
const messageContainerAnimation = useSharedValue(screenHeight * 0.8);


const launchAnimation=async()=>{
    messageContainerAnimation.value=screenHeight*0.001;

    setTimeout(()=>{
        baymaxAnimation.value=-screenHeight*0.01
    },600)

}

useEffect(()=>{
    launchAnimation();
},[])

const animationImageStyle = useAnimatedStyle(() => {
  return {
    transform: [
      {
        translateY: withTiming(baymaxAnimation.value, { duration: 1500 })
      }
    ]
  };
});

const messageContainerStyle = useAnimatedStyle(() => {
  return {
    transform: [
      {
        translateY: withTiming(messageContainerAnimation.value, { duration: 1200 })
      }
    ]
  };
});
    
  return (
    <View style={styles.container}>
        <Animated.View style={[styles.imageContainer,animationImageStyle]}>
            <Image 
            style={styles.img}
            source={require("../assets/images/launch.jpg")}/>
        </Animated.View>

        <Animated.View
        style={[styles.gradientCotainer,messageContainerStyle]}
        >
            <LinearGradient 
            style={styles.gradient}
            colors={bottomColors} >
                <View style={styles.textContainer}>
                    <CustomText
                    fontSize={24}
                    > Baymax!</CustomText>

                    <LottieView
                        source={require('../assets/animations/sync.json')}
                        style={{width:280,height:100}}
                        autoPlay={true}
                        loop
                    />

                    <CustomText>
                        Synchronizing best configuration for you..
                    </CustomText>
                        
                    
                </View>
            </LinearGradient>
        </Animated.View>
    </View>
  )
}

const styles=StyleSheet.create({
    textContainer:{
        backgroundColor:'#ffffff',
        flex:1,
        borderRadius:20,
        padding:20,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowOpacity:1,
        shadowRadius:2,
        alignItems:'center',
        shadowColor:Colors.border,
    },
    gradientCotainer:{
        position:'absolute',
        height:'35%',
        bottom:0,
        width:'100%'
    },
    gradient:{
        width:'100%',
        height:'100%',
        paddingTop:30,
    },

    container:{
        flex:1,
        backgroundColor:Colors.primary,
        justifyContent:'center',
        alignItems:'flex-end',

    },
    imageContainer:{
        width:screenWidth-20,
        height:screenHeight*0.5,

    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    }
})

export default SplashScreen
