import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Logo from './Logo.js'

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo ref="logo"/>
        <Button
          onPress={() => this.refs.logo.refresh()}
          title="Play Anonymously"
          accessibilityLabel="play without an account to save your progress"
        />
      </View>
    );
  }
}

class Auth {
  FacebookPermissions = [
    "public_profile"
  ];
  static loginFinished(provider, error, result) {
    console.log(provider);
    console.log(error);
    console.log(result);
  }
  static anonymousLogin(){

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plainButton: {
    marginBottom: 10
  }
});