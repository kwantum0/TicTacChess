/***
 *  Game.js
 *  Contains methods and data to display and run the game
 *  
 *  ToDo:
 *    -
 */
import React from 'react';
import { StyleSheet, Animated, Text, View, ScrollView, Image, Dimensions } from 'react-native';

export default class Game extends React.Component {
  constructor(props){
    super(props);
    Dimensions.addEventListener('change', function(obj){
      this.state.GLOBAL_HEIGHT = obj.window.height;
      this.state.GLOBAL_WIDTH  =  obj.window.width;
      this.forceUpdate();
    }.bind(this))
  }

  static navigationOptions = {
    title: 'Local Game',
    header: null,
  };
  // initial state
  state = {
    GLOBAL_HEIGHT: Dimensions.get('window').height,
    GLOBAL_WIDTH: Dimensions.get('window').width
  };
  // Returns a iterator for board tiles 
  *tileGenerator() {

  }
  // Draw the components
  render(){
    let horizontal = this.state.GLOBAL_WIDTH > this.state.GLOBAL_HEIGHT;
    let orientationStyle = horizontal ? landscapeStyles : portraitStyles;
    return(
      <View horizontal={horizontal} style={orientationStyle.container}>

        <View style={orientationStyle.header}>
        </View>

        <View style={orientationStyle.board}>
        </View>

        <View style={orientationStyle.trayOpponent}>
          <Text style={styles.header}>Opponent Pieces:</Text>
          <Image style={styles.imageTrayMini} source={require('../assets/pieces/bp.png')} />
          <Image style={styles.imageTrayMini} source={require('../assets/pieces/bn.png')} />
          <Image style={styles.imageTrayMini} source={require('../assets/pieces/bb.png')} />
          <Image style={styles.imageTrayMini} source={require('../assets/pieces/br.png')} />
          <Image style={styles.imageTrayMini} source={require('../assets/pieces/bq.png')} />
          <Image style={styles.imageTrayMini} source={require('../assets/pieces/bk.png')} />
        </View>
        
        <ScrollView contentContainerStyle={orientationStyle.trayUser} horizontal={true}>
          <Text style={styles.header}>Remaining Pieces:</Text>
          <Image style={styles.imageTray} source={require('../assets/pieces/wp.png')} />
          <Image style={styles.imageTray} source={require('../assets/pieces/wn.png')} />
          <Image style={styles.imageTray} source={require('../assets/pieces/wb.png')} />
          <Image style={styles.imageTray} source={require('../assets/pieces/wr.png')} />
          <Image style={styles.imageTray} source={require('../assets/pieces/wq.png')} />
          <Image style={styles.imageTray} source={require('../assets/pieces/wk.png')} />
        </ScrollView>

      </View>
    );
  }
}


/****************
 *    STYLES    *
 ****************/
const landscapeStyles = StyleSheet.create({
 container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start', // MAIN AXIS
    alignItems: 'center',         // CROS AXIS
    alignContent: 'flex-start',   // WRAP
    flexWrap: 'wrap',
  },
  header: {
    backgroundColor: 'steelblue',
    width: '100%',
    height: 100, // Wide Bar
  },
  board: {
    backgroundColor: 'skyblue',
    marginTop: '5%',
    marginBottom: '5%',
    width: '50%',
    aspectRatio: 1, // Be a square
  },
  trayOpponent: {
    backgroundColor: 'plum',
    width: '50%',
    flex: 1 // Skinny Bar
  },
  trayUser: {
    backgroundColor: 'lightseagreen',
    width: '50%',
    flex: 1, // Wide Bar
  }
});
const portraitStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start', // MAIN AXIS
    alignItems: 'center',         // CROS AXIS
    alignContent: 'center',       // WRAP
  },
  header: {
    backgroundColor: 'steelblue',
    width: '100%',
    flex: 3, // Wide Bar
  },
  board: {
    backgroundColor: 'skyblue',
    marginTop: '5%',
    marginBottom: '5%',
    width: '90%',
    aspectRatio: 1, // Be a square
  },
  trayOpponent: {
    backgroundColor: 'plum',
    width: '100%',

    // PARENT PROPERTIES
    justifyContent: 'flex-start',  // MAIN AXIS
    alignItems: 'flex-start',         // CROS AXIS
    alignContent: 'flex-start',       // WRAP
    flexWrap: 'wrap',
    flexDirection: 'row',

    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
  },
  trayUser: {
    backgroundColor: 'lightseagreen',
    flex: 1,
    //width: '100%',

    // PARENT PROPERTIES
    justifyContent: 'flex-start',  // MAIN AXIS
    alignItems: 'flex-start',         // CROS AXIS
    alignContent: 'flex-start',       // WRAP
    flexWrap: 'wrap',
    flexDirection: 'row',

    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
  }
});
const styles = StyleSheet.create({
  // Orientation independant styles
  header: {
    width: '100%',
  },
  imageTrayMini: {
    borderWidth: 1,
    borderColor: 'black',
    width: '10%',
    marginRight: 8,
    aspectRatio: 1,
    resizeMode: 'stretch',
    overflow: 'hidden',
    opacity: 0.7
  },
  imageTray: {
    borderWidth: 1,
    borderColor: 'black',
    height: '100%',
    marginRight: 16,
    aspectRatio: 1,
    resizeMode: 'stretch',
    overflow: 'hidden',
    opacity: 0.7
  },
  grid: {
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