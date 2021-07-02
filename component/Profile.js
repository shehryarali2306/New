import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Icon,
  TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function Profile() {
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Change Setting</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.email}
          placeholder="Enter name"
          value={Name}
          onChangeText={value => {
            setName(value);
          }}
        />

        <TextInput
          style={styles.email}
          type="text"
          name="email"
          placeholder="Enter email"
          value={Email}
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <TextInput
          style={styles.email}
          type="password"
          placeholder="Enter password"
          value={Password}
          onChangeText={value => {
            setPassword(value);
          }}
        />
      </View>
      <TouchableOpacity style={styles.butt}>
        <Text style={styles.Button}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  text: {
    paddingTop: 90,
    paddingHorizontal: 75,
    fontSize: 30,
    color: '#ea676a',
    fontWeight: 'bold',
  },
  input: {},
  password: {
    marginTop: 70,
    backgroundColor: '#e1e1e1',
    paddingHorizontal: 10,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  email: {
    marginTop: 75,
    backgroundColor: '#e1e1e1',
    paddingHorizontal: 20,
    marginHorizontal: 30,
    borderRadius: 15,
    marginBottom: -60,
  },
  Button: {
    backgroundColor: '#ea676a',
    paddingHorizontal: 100,
    paddingVertical: 6,
    height: 45,
    borderRadius: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  butt: {
    marginTop: 165,
    paddingHorizontal: 15,
  },
  signup: {
    color: '#ffcf4a',
    fontSize: 20,
    paddingHorizontal: 205,
    paddingVertical: 25,
    fontFamily: 'sans-serif',
  },
});
