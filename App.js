import React from 'react';
import {View, Text} from 'react-native';
import Sign from './component/Sign';
import Login from './component/Login';
import Main from './Main';
import Logout from './component/Logout';
import Welcome from './component/Welcome';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Firestore from './component/User';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
