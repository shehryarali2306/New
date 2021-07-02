import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './component/Login';
import Welcome from './component/Welcome';
import Logout from './component/Logout';
import Sign from './component/Sign';
const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

export default function Main() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Sign" component={Sign} />
      </AuthStack.Navigator>
    );
  } else {
    return (
      <AppStack.Navigator>
        <AppStack.Screen name="Welcome" component={Welcome} />
      </AppStack.Navigator>
    );
  }
}
