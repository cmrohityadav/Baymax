import React, { FC } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen';
import BaymaxScreen from '../screens/BaymaxScreen';
import { navigationRef } from '../utils/NavigationUtils';
const Stack=createNativeStackNavigator();
const Navigation:FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
         initialRouteName='SplashScreen'
         screenOptions={
            {
                headerShown:false
            }
         }
        >

            <Stack.Screen  name='BaymaxScreen' component={BaymaxScreen} /> 
            <Stack.Screen  name='SplashScreen' component={SplashScreen} /> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}
``
export default Navigation