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

import Util from './../util';


class Category extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>分类</Text>

        <View style={styles.row}>
          <View style={styles.row_item}>
            <View style={styles.item}>
              <Text style={styles.title}>互联网</Text>
            </View>
          </View>
          <View style={styles.row_item}>
            <View style={styles.item}>
              <Text style={styles.title}>散文</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.row_item}>
            <View style={styles.item}>
              <Text style={styles.title}>笑话</Text>
            </View>
          </View>
          <View style={styles.row_item}>
            <View style={styles.item}>
              <Text style={styles.title}>管理</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10
  },
  text1: {
    color: '#5E5E5E',
    marginBottom: 8,
    fontSize: 16
  },
  row: {
    flexDirection: 'row',
    marginTop:5
  },
  row_item:{
    flex:1
  },
  item: {
    height: 81,
    width: (Util.size.width - 30) / 2,
    borderColor: '#F1F1F1',
    borderWidth: Util.pixel,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  title:{
    color:'#707070',
    fontSize:17,
    fontWeight:'400'
  }
});


module.exports = Category;
