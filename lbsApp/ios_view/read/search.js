/**
 * Created by perry on 16/11/20.
 */
import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import Util from './../util';

class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="搜索"
          style={styles.search_input}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20
  },
  search_input: {
    borderWidth: 1,
    // borderWidth: Util.pixel,
    height: 35,
    borderColor: '#eee',
    paddingLeft: 5,
    fontSize: 14
  }
});


module.exports = Search;
