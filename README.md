# React Native Star Rating Component
A React Native component for generating and displaying interactive star ratings. Compatible with both iOS and Android.

#Installation
```
npm install react-native-rating-star --save
```


#Usage

```js
import StarRating from 'react-native-rating-star';
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
```

<img src="http://ww4.sinaimg.cn/mw690/7746cd07jw1f2fdg8ltxig208o0fodh4.gif"/>