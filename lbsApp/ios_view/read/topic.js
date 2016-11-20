/**
 * Created by perry on 16/11/20.
 */
import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


import Util from './../util';

class Topic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text1}>推荐专题</Text>
        </View>
        <View style={styles.img_view}>
          <View style={styles.img_item}>
            <Image resetMode="cover" style={styles.img}
                   source={{uri: 'http://img.hb.aicdn.com/d205c8f508831b6af989c3bef948dd8a33b0305b17c92f-zj9z3q_fw658'}}></Image>
          </View>
          <View style={styles.img_item}>
            <Image resetMode="cover" style={styles.img}
                   source={{uri: 'http://mt-share.weddingcloud.me/2014/08/12/b4c9033f074822ebf1fc5aa4f255dc66.jpg?imageView2/2/w/760/q/95'}}></Image>
          </View>
        </View>
        <View>
          <Text style={styles.text2}>查看更多同期主题&gt;&gt;</Text>
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
  img: {
    width: (Util.size.width - 30) / 2,
    height: 75,
    borderRadius: 5
  },

  img_item: {
    flex: 1
  },

  img_view: {
    flexDirection: 'row'
  },
  text1: {
    color: '#5E5E5E',
    marginBottom: 8,
    fontSize: 16
  },
  text2: {
    color: '#ccc',
    marginTop: 10,
    fontSize: 13,
    fontWeight: '300',
    marginBottom:10
  }
});


module.exports = Topic;
