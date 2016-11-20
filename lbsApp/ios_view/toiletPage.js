import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TWebView from './tWebView';
import Util from './util';

console.log('------size------',Util.size);
console.log('------pixel-----',Util.pixel);

Util.get('http://localhost:3000/data/read?type=cookies', function(data){
  console.log(data);
},function(err){
  alert(err);
});

class ToiletPage extends Component{
  render() {
    return (
      <View style={styles.container}>
        <TWebView url="http://localhost:3000/nearby.html"/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
    container:{
      flex:1
    }
});


module.exports = ToiletPage;
