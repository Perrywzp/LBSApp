/**
 * Created by perry on 16/11/12.
 */
import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Util from './util';

class SettingPage extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.img_view}>
          <Image style={styles.icon} source={require('image!logo')} resizeMode="contain"/>
        </TouchableOpacity>
        <ScrollView style={{paddingBottom: 10}}>
          <TouchableOpacity style={styles.text_view}>
            <Text style={styles.text}>功能介绍</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text_view}>
            <Text style={styles.text}>帮助中心</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text_view}>
            <Text style={styles.text}>服务条款</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.text_view, styles.add_bottom]}>
            <Text style={styles.text}>关于</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

class Setting extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: SettingPage,
          title: '设置',
          navigationBarHidden: true
        }}
        style={{flex: 1}}
      />
    )
  }
}

var styles = StyleSheet.create({

  img_view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  icon: {
    width: 88,
    height: 100
  },
  text_view: {
    borderTopWidth: Util.pixel,
    borderTopColor: '#ececec',
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#ececec',
    height: 40,
    paddingLeft: 10,
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    color: '#868887',
    fontWeight: '400'
  },
  add_bottom: {
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#ECECEC'
  }
});


module.exports = Setting;
