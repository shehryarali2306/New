import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// import {firebase} from '../../firebase/config';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export default function Sign({navigation}) {
  const userDocument = firestore().collection('Users').doc('ABC');

  const on_SignIn = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    if (password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, password)

      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign up</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.email}
          placeholder="Enter name"
          value={name}
          onChangeText={value => {
            setName(value);
          }}
        />
        <Icon name="person" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.email}
          type="text"
          name="email"
          placeholder="Enter email"
          value={email}
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <Icon name="email" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.email}
          type="password"
          secureTextEntry={hidePass ? true : false}
          textContentType="password"
          placeholder="Enter password"
          value={password}
          onChangeText={value => {
            setPassword(value);
          }}
        />
        <Icon name="lock" size={20} color="#000" style={styles.icon} />
        <MaterialCommunityIcons
          name={hidePass ? 'eye-off' : 'eye'}
          size={20}
          color="#000"
          style={styles.iconeye}
          onPress={() => setHidePass(!hidePass)}
        />

        <TextInput
          style={styles.emaill}
          type="password"
          placeholder="Confirm  password"
          value={confirmPassword}
          secureTextEntry={hidePass ? true : false}
          textContentType="password"
          onChangeText={value => {
            setConfirmPassword(value);
          }}
        />

        <Icon name="lock" size={20} color="#000" style={styles.icon} />
        <MaterialCommunityIcons
          name={hidePass ? 'eye-off' : 'eye'}
          size={20}
          color="#000"
          style={styles.iconeye}
          onPress={() => setHidePass(!hidePass)}
        />
      </View>
      <TouchableOpacity style={styles.butt} onPress={() => on_SignIn()}>
        <Text style={styles.Button}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.signup}>
        <Text style={styles.signupText}>Login </Text>
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
    paddingHorizontal: 115,
    fontSize: 30,
    color: '#ea676a',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  input: {
    marginBottom: 10,
  },
  password: {
    marginTop: 70,
    backgroundColor: '#e1e1e1',
    paddingHorizontal: 20,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  email: {
    marginTop: 70,
    backgroundColor: '#e1e1e1',
    paddingHorizontal: 35,
    marginHorizontal: 30,
    borderRadius: 15,
    marginBottom: -80,
  },
  emaill: {
    marginTop: 50,
    backgroundColor: '#e1e1e1',
    paddingHorizontal: 35,
    marginHorizontal: 30,
    borderRadius: 15,
    marginBottom: -80,
  },
  Button: {
    backgroundColor: '#ea676a',
    paddingHorizontal: 110,
    paddingVertical: 6,
    height: 45,
    borderRadius: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  butt: {
    marginTop: 100,
    paddingHorizontal: 30,
  },

  signupText: {
    color: '#ffcf4a',
    fontSize: 20,
    paddingHorizontal: 150,
    paddingVertical: 25,
    fontWeight: 'bold',
  },
  icon: {
    top: 45,
    paddingHorizontal: 35,
  },
  iconeye: {
    top: 30,
    left: 290,
  },
});
