/**
 * Created by perry on 16/11/20.
 */
import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class List extends Component{
  render() {
    return (
      <View>
        <Text style={styles.text}>列表</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  text:{
    fontSize:60
  }
});


module.exports = List;
