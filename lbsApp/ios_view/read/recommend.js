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

class Recommend extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={[styles.title_top,styles.text1]}>热门推荐</Text>
        </View>
        <View style={styles.img_view}>
          <View style={styles.img_item}>
            <Image resetMode="cover" style={[styles.img, styles.shadow]}
                   source={{uri: 'http://img.hb.aicdn.com/940ca537ecc2228e674c5dd02378af5224704ea463299-atCXfK_fw658'}}></Image>
            <Text style={styles.title} numberOfLines={2}>标题xxxxxxxxxxxxxxxxxxx</Text>
          </View>
          <View style={styles.img_item}>
            <Image resetMode="cover" style={[styles.img, styles.shadow]}
                   source={{uri: 'http://img.hb.aicdn.com/2a86e2a66c86dc36df24d76138ed5aaaf50b81ac4151f-Vug9Y4_fw658'}}></Image>
            <Text style={styles.title} numberOfLines={2}>标题</Text>
          </View>
          <View style={styles.img_item}>
            <Image resetMode="cover" style={[styles.img, styles.shadow]}
                   source={{uri: 'http://img.hb.aicdn.com/dba21a9d031cb050a41aac5073178f08c88de598f08c1-t6ziEX_fw658'}}></Image>
            <Text style={styles.title} numberOfLines={2}>标题</Text>
          </View>
          <View style={styles.img_item}>
            <Image resetMode="cover" style={[styles.img, styles.shadow]}
                   source={{uri: 'http://img.hb.aicdn.com/65132b0bb3dafdda5b5d2887dd98023491b41fd779150-IqRYfl_fw658'}}></Image>
            <Text style={styles.title} numberOfLines={2}>标题</Text>
          </View>
        </View>
        <View style={styles.img_view}>
          <View style={styles.img_item}>
            <Image resetMode="cover" style={[styles.img, styles.shadow]}
                   source={{uri: 'http://img.hb.aicdn.com/940ca537ecc2228e674c5dd02378af5224704ea463299-atCXfK_fw658'}}></Image>
            <Text style={styles.title} numberOfLines={2}>标题</Text>
          </View>
          <View style={styles.img_item}>
            <Image resetMode="cover" style={[styles.img, styles.shadow]}
                   source={{uri: 'http://img.hb.aicdn.com/2a86e2a66c86dc36df24d76138ed5aaaf50b81ac4151f-Vug9Y4_fw658'}}></Image>
            <Text style={styles.title} numberOfLines={2}>标题</Text>
          </View>
          <View style={styles.img_item}>
            <Image resetMode="cover" style={[styles.img, styles.shadow]}
                   source={{uri: 'http://img.hb.aicdn.com/dba21a9d031cb050a41aac5073178f08c88de598f08c1-t6ziEX_fw658'}}></Image>
            <Text style={styles.title} numberOfLines={2}>标题</Text>
          </View>
          <View style={styles.img_item}>
            <Image resetMode="cover" style={[styles.img, styles.shadow]}
                   source={{uri: 'http://img.hb.aicdn.com/65132b0bb3dafdda5b5d2887dd98023491b41fd779150-IqRYfl_fw658'}}></Image>
            <Text style={styles.title} numberOfLines={2}>标题</Text>
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
  img: {
    width: (Util.size.width - 40 ) / 4,
    height: 120
  },

  img_item: {
    flex: 1,
    height: 157
  },

  img_view: {
    flexDirection: 'row'
  },
  shadow: {
    shadowOpacity: 1,
    shadowColor: '#ccc',
    shadowOffset: {width: 1 * Util.pixel, height: Util.pixel}
  },
  text1:{
      color:'#5E5E5E',
      marginBottom:8,
      fontSize:16
  },
  title_top:{
    marginTop:10
  },
  title:{
    marginTop:4,
    fontSize:14,
    color:'#818181'
  }

});


module.exports = Recommend;
