/***
 *  Logo.js
 *  Contains the methods and data for laying out the dynamic logo
 *  
 *  ToDo:
 *    - Make logo size change with viewport size
 *    - Redesign finishBuildingArrangment() so worst case is more efficient
 *    - Refactor chooseRandomElement() into Globally Available Utility Class
 *    - Place render elements into a loop. Use array for styles
 *    - Add drag and drog piece feature for menu item selection
 */
import React from 'react';
import { StyleSheet, Animated, Text, View, Image } from 'react-native';

export default class Logo extends React.Component {
  // Initial State
  state = {
    fadeAnim: new Animated.Value(0),
    titles: this.titleGenerator()
  };
  // Start / Restart Animation after Refresh
  componentDidMount(){
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 2000
      }
    ).start();
  }
  componentWillUpdate(){
    // possibly move to refresh() if component needs to update without animating
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 2000
      }
    ).start();
  }
  // Used to generate a new logo permutation
  refresh() {
    this.state.fadeAnim = new Animated.Value(0);
    this.state.titles = this.titleGenerator();
    this.forceUpdate();
  }
  // array (anytype[]): where to pick results
  // bias (decimal[]): how to weight result
  static chooseRandomElement(array, bias){
    let index = -1;
    if(bias && bias.length){
      let segementSize = array.length / bias.length;
      let cutoff = bias.findIndex((e) => e > Math.random());
      index = Math.floor(segementSize * Math.random() + segementSize * cutoff)
    } else {
      index = Math.floor(array.length * Math.random());
    }
    return array[index];
  }
  static finishBuildingArrangment(array, pieceCount){
    let isWhite = true;
    while(pieceCount > 0){
      index = Math.floor(array.length * Math.random());
      if(array[index] != 0){
        continue;
      } else {
        array[index] = (isWhite ? 1 : 2);
        isWhite = !isWhite;
        pieceCount--;
      }
    }
    return array;
  }
  *titleGenerator() {
    // Permute Data
    let numberOfPieces = Logo.chooseRandomElement(PieceCountOptions);
    let {titlesCount, arrangement } = Logo.chooseRandomElement(TitleArrangementOptions);
    let titleData = (titlesCount < 3 ? TwoTitleData.slice() : ThreeTitleData.slice());
    arrangement = Logo.finishBuildingArrangment(arrangement.slice(), numberOfPieces);

    // Yield Results
    for (let x of arrangement) {
      if(x == -1){
          yield titleData.pop();
      } else if(x == 0){
          yield; 
      } else if(x == 1){
          yield Logo.chooseRandomElement(WhitePieceData, PieceDataBias);
      } else if(x == 2){
          yield Logo.chooseRandomElement(BlackPieceData, PieceDataBias);
      } else {
          yield;
      }
    }

    // Yield Done
    return { done: true };
   
  }
  render() {
    let { fadeAnim } = this.state;
    return (
        <Animated.View style={[styles.grid, {opacity: fadeAnim}]}>
          <View style={[styles.cell, styles.cellBorderB, styles.cellBorderR]}>
            {this.state.titles.next().value}
          </View>
          <View style={[styles.cell, styles.cellBorderB, styles.cellBorderR]}>
            {this.state.titles.next().value}
          </View>
          <View style={[styles.cell, styles.cellBorderB]}>
            {this.state.titles.next().value}
          </View>
          <View style={[styles.cell, styles.cellBorderB, styles.cellBorderR]}>
            {this.state.titles.next().value}
          </View>
          <View style={[styles.cell, styles.cellBorderB, styles.cellBorderR]}>
            {this.state.titles.next().value}
          </View>
          <View style={[styles.cell, styles.cellBorderB]}>
            {this.state.titles.next().value}
          </View>
          <View style={[styles.cell, styles.cellBorderR]}>
            {this.state.titles.next().value}
          </View>
          <View style={[styles.cell, styles.cellBorderR]}>
            {this.state.titles.next().value}
          </View>
          <View style={[styles.cell]}>
            {this.state.titles.next().value}
          </View>
        </Animated.View>
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

/****************
 *    STYLES    *
 ****************/
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
    width: 400, // Make dynamic
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
  }
});

/************************
 *    DATA FOR TILES    *
 ************************/
const PieceDataBias = [0.33,0.5,0.66,0.833,0.916,1] // corrosponds to 4 x pawns, 2 x each minor, 1 x queen, 1 x king
const WhitePieceData = [
  <Image style={styles.image} source={require('../assets/pieces/wp.png')} />,
  <Image style={styles.image} source={require('../assets/pieces/wn.png')} />,
  <Image style={styles.image} source={require('../assets/pieces/wb.png')} />,
  <Image style={styles.image} source={require('../assets/pieces/wr.png')} />,
  <Image style={styles.image} source={require('../assets/pieces/wq.png')} />,
  <Image style={styles.image} source={require('../assets/pieces/wk.png')} />
];
const BlackPieceData = [
  <Image style={styles.image} source={require('../assets/pieces/bp.png')} />,
  <Image style={styles.image} source={require('../assets/pieces/bn.png')} />,
  <Image style={styles.image} source={require('../assets/pieces/bb.png')} />,
  <Image style={styles.image} source={require('../assets/pieces/br.png')} />,
  <Image style={styles.image} source={require('../assets/pieces/bq.png')} />,
  <Image style={styles.image} source={require('../assets/pieces/bk.png')} />
];
const TwoTitleData = [
  <Text style={styles.logo}>CHE{"\n"}SS</Text>,
  <Text style={styles.logo}>TIC{"\n"}TAC</Text>
];
const ThreeTitleData = [
  <Text style={styles.logo}>CHE{"\n"}SS</Text>,
  <Text style={styles.logo}>TAC</Text>,
  <Text style={styles.logo}>TIC</Text>
];
const PieceCountOptions = [2,3,4];
const TitleArrangementOptions = [
  // Arrangements of 2
  {titlesCount:2,arrangement:[-1,-1,0,0,0,0,0,0,0]},
  {titlesCount:2,arrangement:[-1,0,-1,0,0,0,0,0,0]},
  {titlesCount:2,arrangement:[-1,0,0,-1,0,0,0,0,0]},
  {titlesCount:2,arrangement:[0,-1,-1,0,0,0,0,0,0]},
  {titlesCount:2,arrangement:[0,-1,0,0,-1,0,0,0,0]},
  {titlesCount:2,arrangement:[0,0,-1,0,0,-1,0,0,0]},
  {titlesCount:2,arrangement:[0,0,0,-1,-1,0,0,0,0]},
  {titlesCount:2,arrangement:[0,0,0,-1,0,-1,0,0,0]},
  {titlesCount:2,arrangement:[0,0,0,-1,0,0,-1,0,0]},
  {titlesCount:2,arrangement:[0,0,0,0,-1,-1,0,0,0]},
  {titlesCount:2,arrangement:[0,0,0,0,-1,0,0,-1,0]},
  {titlesCount:2,arrangement:[0,0,0,0,0,-1,0,0,-1]},
  {titlesCount:2,arrangement:[0,0,0,0,0,0,-1,-1,0]},
  {titlesCount:2,arrangement:[0,0,0,0,0,0,-1,0,-1]},
  // Arrangements of 3
  {titlesCount:3,arrangement:[-1,-1,0,0,0,-1,0,0,0]},
  {titlesCount:3,arrangement:[-1,-1,0,0,0,0,0,0,-1]},
  {titlesCount:3,arrangement:[-1,0,-1,0,-1,0,0,0,0]},
  {titlesCount:3,arrangement:[-1,0,-1,0,0,0,-1,0,0]},
  {titlesCount:3,arrangement:[-1,0,-1,0,0,0,0,-1,0]},
  {titlesCount:3,arrangement:[-1,0,-1,0,0,0,0,0,-1]},
  {titlesCount:3,arrangement:[-1,0,0,-1,0,0,-1,0,0]},
  {titlesCount:3,arrangement:[-1,0,0,-1,0,0,0,-1,0]},
  {titlesCount:3,arrangement:[-1,0,0,-1,0,0,0,0,-1]},
  {titlesCount:3,arrangement:[-1,0,0,0,-1,0,-1,0,0]},
  {titlesCount:3,arrangement:[-1,0,0,0,-1,0,0,0,-1]},
  {titlesCount:3,arrangement:[0,-1,-1,0,0,0,0,0,-1]},
  {titlesCount:3,arrangement:[0,-1,0,-1,0,0,0,-1,0]},
  {titlesCount:3,arrangement:[0,-1,0,-1,0,0,0,0,-1]},
  {titlesCount:3,arrangement:[0,-1,0,0,-1,0,0,-1,0]},
  {titlesCount:3,arrangement:[0,-1,0,0,-1,0,0,0,-1]},
  {titlesCount:3,arrangement:[0,0,-1,0,0,-1,0,0,-1]},
  {titlesCount:3,arrangement:[0,0,0,-1,-1,0,0,0,-1]},
  {titlesCount:3,arrangement:[0,0,0,-1,0,-1,0,-1,0]},
  {titlesCount:3,arrangement:[0,0,0,0,-1,-1,-1,0,0]},
  {titlesCount:3,arrangement:[0,0,0,-1,0,0,-1,0,-1]},
];