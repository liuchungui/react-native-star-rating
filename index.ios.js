/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import StarRating from './StarRating';

class StarRaingDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        StarRating not set starSize and interitemSpacing.
        </Text>
        <StarRating
          maxStars={5}
          rating={1}
          selectStar={require('./select_star.png')}
          unSelectStar={require('./unselect_star.png')}
          valueChanged={this._valueChanged}
        />
        <Text style={styles.welcome}>
        StarRating set starSize.
        </Text>
        <StarRating
          maxStars={5}
          rating={2}
          selectStar={require('./select_star.png')}
          unSelectStar={require('./unselect_star.png')}
          valueChanged={this._valueChanged}
          starSize={25}
        />
        <Text style={styles.welcome}>
        StarRating set starSize and interitemSpacing
        </Text>
        <StarRating
          maxStars={5}
          rating={3}
          selectStar={require('./select_star.png')}
          unSelectStar={require('./unselect_star.png')}
          valueChanged={this._valueChanged}
          starSize={50}
          interitemSpacing={20}
        />
      </View>
    );
  }

  _valueChanged(rating) {
    console.log(rating);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('StarRaingDemo', () => StarRaingDemo);
