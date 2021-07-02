import React, {Component, useState} from 'react';
import {Text, View, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
export default class Firestore extends Component {
  state = {
    user: [],
  };
  constructor(props) {
    super(props);
    this.subscriber = firestore()
      .collection('user')

      .onSnapshot(docs => {
        let user = [];
        docs.forEach(doc => {
          user.push(doc.data());
        });
        this.setState({user});
        console.log(user);
      });
  }
  addRandomUser = async () => {
    let name = Math.random().toString(36).substring(7);
    firestore().collection('user').add({
      name,
      age: 20,
    });
  };
  render() {
    return (
      <View style={{alignItems: 'center', margin: 100}}>
        <Button title="Add Random user" onPress={this.addRandomUser} />
        {this.state.user.map((user, index) => (
          <View key={index}>
            <Text>{user.name}</Text>
          </View>
        ))}
      </View>
    );
  }
}
