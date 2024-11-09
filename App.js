// App.js
import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import HomeScreen from './screens/HomeScreen';
import StartGameScreen from './screens/StartGameScreen';
import CardTypes from './screens/CardTypes';
import SpreadTypes from './screens/SpreadTypes';
import HowToPlay from './screens/HowToPlay';
import About from './screens/About';
import CardList from './screens/CardList'
import CardDetails from './screens/CardDetails';
import SpreadDetails from './screens/SpreadDetails';
import { SourceSerifPro_400Regular } from '@expo-google-fonts/source-serif-pro';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = useCallback(async () => {
    await Font.loadAsync({
      SourceSerifPro: SourceSerifPro_400Regular,
    });
    setFontsLoaded(true);
  }, []);

  useEffect(() => {
    loadFonts();
  }, [loadFonts]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#523F5A' }, // Set background color for the transition
          animationEnabled: false, // Disable animations to prevent flashing
          detachPreviousScreen: true,
          /*animationEnabled: true,
          animationTypeForReplace: 'push', // or 'pop' depending on your needs
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 250, // Adjust duration for opening
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 250, // Adjust duration for closing
              },
            },
          },*/
        }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="StartGame" component={StartGameScreen}/>
        <Stack.Screen name="CardTypes" component={CardTypes}/>
        <Stack.Screen name="SpreadTypes" component={SpreadTypes}/>
        <Stack.Screen name="HowToPlay" component={HowToPlay}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="CardList" component={CardList}/>
        <Stack.Screen name="CardDetails" component={CardDetails}/>
        <Stack.Screen name="SpreadDetails" component={SpreadDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
