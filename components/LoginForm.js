import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class LoginForm extends React.Component {
  *titleGenerator() {
    // Setup
    let Indexes = [1,1,1,0,0,0,0,-1,-1];

    // Helper Functions
    let RandomPiece = function(isWhite) {
      return pathPrefix + (isWhite ? 'w' : 'b') + 
        Pieces[Math.floor(6 * Math.random() - 1)] + 
        pathPostfix;
    }
    let RandomComparer = function(a,b) {
      return 2 * Math.random() - 1;
    }

    // Permute Randomly
    Indexes.sort(RandomComparer);
    PieceArray.sort(RandomComparer);

    // Yield a result
    while(Indexes.length){
      index = Indexes.pop();
      if(index > 0){
        yield PieceArray.pop();
      } else if(index == 0){

      } else {
        yield TitleArray.pop();
      }
    }
  }
  render() {
    var titles = this.titleGenerator();
    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          <View style={[styles.cell, styles.cellBorderB, styles.cellBorderR]}>
            {titles.next().value}
          </View>
          <View style={[styles.cell, styles.cellBorderB, styles.cellBorderR]}>
            {titles.next().value}
          </View>
          <View style={[styles.cell, styles.cellBorderB]}>
            {titles.next().value}
          </View>
          <View style={[styles.cell, styles.cellBorderB, styles.cellBorderR]}>
            {titles.next().value}
          </View>
          <View style={[styles.cell, styles.cellBorderB, styles.cellBorderR]}>
            {titles.next().value}
          </View>
          <View style={[styles.cell, styles.cellBorderB]}>
            {titles.next().value}
          </View>
          <View style={[styles.cell, styles.cellBorderR]}>
            {titles.next().value}
          </View>
          <View style={[styles.cell, styles.cellBorderR]}>
            {titles.next().value}
          </View>
          <View style={[styles.cell]}>
            {titles.next().value}
          </View>
        </View>
        <Button
          onPress={Auth.anonymousLogin}
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
    Auth.loginFinished("Anonymous", "", "anon");
  }
}

const styles = StyleSheet.create({
  logo:{
    fontSize: 40,
    letterSpacing: 5,
    color: '#555555'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    overflow: 'hidden',
    opacity: 0.7
  },
  grid: {
    width: 400,
    aspectRatio: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  cell: {
    padding: 8,
    width: '32%',
    height: '32%',
    borderColor: '#555555',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  cellBorderR: {
    borderRightWidth: 5
  },
  cellBorderB: {
    borderBottomWidth: 5
  },
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

let PieceArray = [
  <Image style={styles.image} source={require('../assets/pieces/wr.png')} />,
  <Image style={styles.image} source={require('../assets/pieces/bb.png')} />,
  <Image style={styles.image} source={require('../assets/pieces/wp.png')} />,
];
let TitleArray = [
  <Text style={styles.logo}>CHESS</Text>,
  <Text style={styles.logo}>TIC TAC</Text>,
];