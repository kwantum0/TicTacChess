/***
 *  LoginScreen.js
 *  Contains top level element for the LoginScreen
 *  
 *  ToDo:
 *    - Make logo size change with viewport size
 *    - Redesign finishBuildingArrangment() so worst case is more efficient
 *    - Refactor chooseRandomElement() into Globally Available Utility Class
 *    - Place render elements into a loop. Use array for styles
 *    - Add drag and drog piece feature for menu item selection
*/
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Logo from './Logo.js'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null,
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Logo ref="logo"/>
        <Button
          onPress={() => this.refs.logo.refresh()}
          title="Randomize Logo"
          accessibilityLabel="for fun"
        />
        <Button
          onPress={() => navigate('PlayOffline')}
          title="Play Local Game"
          accessibilityLabel="play 1v1 with your friend"
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