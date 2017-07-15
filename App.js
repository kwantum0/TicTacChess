/***
 *  App.js
 *  Launchpoint of the app
 *  
 *  ToDo:
 *    - Finish Registering Screens
 *    - Add a global app state, and state machine
 */
import React from 'react';
import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './components/LoginScreen.js';
import Game from './components/Game.js';

/***************
 *   SCREENS   *
 ***************/

/* LOGIN SCREEN 
 *  displays for unauthorized users. 
 *  user must log in, or choose anonymous.
 */ 

/* OFFLINE GAME
 *  user vs a friend on the same device 
 */ 


/******************************
 *   DECLARE AND RUN ROUTER   *
 ******************************/
const Router = StackNavigator({
  Login: { 
    screen: LoginScreen,
    headerMode: 'none' 
  },
  PlayOffline: { 
    screen: Game,
    headerMode: 'none'  
  }
});

export default class App extends React.Component {
  render() {
    StatusBar.setHidden(true);
    return (
      <Router />
    );
  }
}