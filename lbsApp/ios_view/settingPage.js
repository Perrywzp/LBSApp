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


class SettingPage extends Component{
  render() {
    return (
      <View>
        <Text style={styles.text}>设置</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  text:{
    fontSize:60
  }
});


module.exports = SettingPage;
