import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './components/CustomButton.js';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Tic Tac Chess</Text>
        <Button
          style={styles.plainButton}
          onPress={Auth.facebookLogin}
          title="Login with Facebook"
          color="#3b5998"
          accessibilityLabel="login using your facebook account"
        />
        <Button
          style={styles.plainButton}
          onPress={Auth.googleLogin}
          title="Login with Google"
          color="#ea4335"
          accessibilityLabel="login using your google account"
        />
        <Button
          style={styles.textButton}
          onPress={Auth.anonymousLogin}
          title="Play Anonymously"
          accessibilityLabel="play without logging in"
        />
      </View>
    );
  }
}

class Auth {
  static facebookLogin() {
    console.log("user chose facebook auth");
  }
  static googleLogin() {
    console.log("user chose google auth");
  }
  static anonymousLogin() {
    console.log("user chose not to login");
  }
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 30,
    marginBottom: 10
  },
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plainButton: {
    marginBottom: 10
  }
});