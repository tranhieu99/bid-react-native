import * as React from 'react';
import { View, Text, Button } from 'react-native';
import RootScreen from './screens/RootStackScreen'
import { NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <RootScreen />
    </NavigationContainer>
  );
}
