import React from 'react';
import {View, Text, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Logout from './Logout';
import Profile from './Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export default function Welcome() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {backgroundColor: 'grey'},
        activeTintColor: '#e1e',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Logout"
        component={Logout}
        options={{
          tabBarLabel: 'Profile',

          tabBarIcon: () => (
            <MaterialCommunityIcons name="logout" color="#000" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="face-profile"
              color="#000"
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
