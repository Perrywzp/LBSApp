/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class lbsApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          欢迎 to React Native!
        </Text>
        <Text style={styles.instructions}>
          开始学习React native
        </Text>
        <Text style={styles.instructions}>
          按 Cmd+R to 刷新,{'\n'}
          Cmd+D or shake 调出菜单
        </Text>
        <Text style={{color:'red',fontSize:50}} >OK</Text>
      </View>
    );
  }
}

// stylesheet样式类
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// 注册应用入口
AppRegistry.registerComponent('lbsApp', () => lbsApp);
