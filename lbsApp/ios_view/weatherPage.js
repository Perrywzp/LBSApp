/**
 * Created by perry on 16/11/12.
 */
import React, {Component} from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import TWebView from './tWebView';

class WeatherPage extends Component{
  render() {
    return (
      <View style={styles.container}>
        <TWebView url="http://localhost:3000/weather.html"/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1
  }
});


module.exports = WeatherPage;
