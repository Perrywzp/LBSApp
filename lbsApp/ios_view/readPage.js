/**
 * Created by perry on 16/11/12.
 */
import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class ReadPage extends Component{
  render() {
    return (
      <View>
        <Text style={styles.text}>阅读</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  text:{
    fontSize:60
  }
});


module.exports = ReadPage;