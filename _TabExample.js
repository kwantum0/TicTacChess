import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image } from 'react-native';
import { TabNavigator } from "react-navigation";

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/1.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Text>Home</Text>/*<Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />*/
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/2.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Text>Notification</Text>/*<Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />*/
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const MyApp = TabNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#B22222',
    activeBackgroundColor: '#F0F0F0',
    inactiveTintColor: '#A9A9A9',
    inactiveBackgroundColor: '#F0F0F0',
    showIcon: true,
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#F0F0F0'
    },
    indicatorStyle: {
      backgroundColor: '#B22222'
    }
  }
});

export default class App extends React.Component {
  render() {
    StatusBar.setHidden(true, "slide");
    return (
      <MyApp />
    );
  }
}
