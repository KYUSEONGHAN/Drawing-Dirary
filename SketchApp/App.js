import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import DrawingScreen from './Screens/DrawingScreen';
import TextScreen from './Screens/TextScreen';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Drawing" component={DrawingScreen} />
        <Stack.Screen name="Text" component={TextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
