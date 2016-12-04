/**
 * Created by perry on 16/11/27.
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


import Util from './../util';

class Detail extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.text}>附近卫生间并导航</Text>
          <View style={styles.items}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={{uri: 'http://localhots:3000/xxxx.png'}}
            />
          </View>
        </View>
        <View style={styles.center}>
          <Text style={styles.text}>实时天气</Text>
          <View style={styles.items}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={{uri: 'http://localhots:3000/xxxx.png'}}
            />
          </View>
        </View>
        <View style={styles.center}>
          <Text style={styles.text}>阅读</Text>
          <View style={styles.items}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={{uri: 'http://localhots:3000/xxxx.png'}}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 300,
    height: 530
  },
  items: {
    width: 300,
    marginBottom: 10,
    shadowOpacity: 1,
    shadowColor: '#ccc',
    shadowOffset: {width: 1 * Util.pixel, height: Util.pixel},
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 15,
    marginLeft: 10,
    marginTop: 15
  }
});
module.exports = Detail;
