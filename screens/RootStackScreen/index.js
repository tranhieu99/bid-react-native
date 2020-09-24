import React from 'react'
  import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../SplashScreen'
import SignInScreen from '../SignInScreen'
const Stack = createStackNavigator();
export default function RootStackScreen() {
    return (
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="Home" component={SplashScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
        </Stack.Navigator>
  
    )
}
