import React from 'react';
import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm.js';

/***************
 *   SCREENS   *
 ***************/

/* LOGIN SCREEN 
 *  displays for unauthorized users. 
 *  user must log in, or choose anonymous.
 */ 
class LoginScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Login',
    title: 'Login',
    header: null
  };

  render() {
    return (
      <LoginForm />
    );
  }
}

/******************************
 *   DECLARE AND RUN ROUTER   *
 ******************************/
const Router = StackNavigator({
  Login: { screen: LoginScreen },
});

export default class App extends React.Component {
  render() {
    StatusBar.setHidden(true);
    return (
      <Router />
    );
  }
}