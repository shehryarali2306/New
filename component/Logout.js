import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Logout() {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        }}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logout: {
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    width: 170,
    height: 20,
    fontWeight: 'bold',
    fontSize: 15,
  },
  container: {
    textAlign: 'center',
    justifyContent: 'center',
    paddingHorizontal: 60,
    paddingVertical: 40,
    backgroundColor: 'red',
    marginHorizontal: 80,
    marginVertical: 100,
    borderRadius: 50,
    width: 300,
    height: 50,
  },
});
