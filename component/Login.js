import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Sign from './Sign';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';

export default function LoginScreen({navigation}) {
  const onLoginPress = () => {
    if (password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }
    auth()
      .signInWithEmailAndPassword(email, password)

      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert('The given email address is not registered');
        }
        console.log('User Sign in');
      });
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>LoginScreen</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Email"
          style={styles.email}
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <Icon name="email" size={20} color="#000" style={styles.icon} />

        <TextInput
          placeholder="Password"
          style={styles.password}
          value={password}
          placeholder="Password"
          secureTextEntry={hidePass ? true : false}
          textContentType="password"
          onChangeText={value => {
            setPassword(value);
          }}
        />
        <Icon name="lock-outline" size={20} color="#000" style={styles.iconp} />
        <Icon
          name={hidePass ? 'eye-off' : 'eye'}
          size={20}
          color="#000"
          style={styles.iconeye}
          onPress={() => setHidePass(!hidePass)}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('Pressed');
        }}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.butt} onPress={() => onLoginPress()}>
        <Text style={styles.Button}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
        <Text style={styles.signup}>Sign up ➜</Text>
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
    paddingHorizontal: 85,
    fontSize: 30,
    color: '#ea676a',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  input: {},
  password: {
    marginTop: 70,
    backgroundColor: '#e1e1e1',
    paddingHorizontal: 35,
    marginHorizontal: 30,
    borderRadius: 15,
  },
  email: {
    marginTop: 65,
    backgroundColor: '#e1e1e1',
    paddingHorizontal: 35,
    marginHorizontal: 30,
    borderRadius: 15,
    marginBottom: -65,
  },
  forgot: {
    color: '#ffcf4a',
    fontSize: 17,
    marginTop: 10,
    marginHorizontal: 100,
  },
  Button: {
    backgroundColor: '#ea676a',
    paddingHorizontal: 120,
    paddingVertical: 6,
    height: 45,
    borderRadius: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  butt: {
    marginTop: 140,
    paddingHorizontal: 30,
  },
  signup: {
    color: '#ffcf4a',
    fontSize: 20,
    paddingHorizontal: 130,
    paddingVertical: 25,
    fontWeight: 'bold',
  },
  icon: {
    paddingHorizontal: 37,
    top: 30,
  },
  iconp: {
    top: -33,
    paddingHorizontal: 37,
  },
  iconeye: {
    top: -54,
    left: 290,
  },
});
