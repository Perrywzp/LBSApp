import React, {Component} from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import TWebView from './tWebView';

class ToiletPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TWebView url="http://localhost:3000/nearby.html"/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


module.exports = ToiletPage;
