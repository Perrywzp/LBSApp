/**
 * Created by perry on 16/11/20.
 */
import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Util from './../util';
import TWebView from './../tWebView';

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      data: props.data
    }
  }

  render() {
    var data = this.state.data;
    var view1 = [];
    var view2 = [];
    for (var i in data) {
      let item = (
        <TouchableOpacity style={styles.img_item} key={i} onPress={this._showWebPage.bind(this, data[i].url, data[i].title)}>
          <Image resetMode="cover" style={[styles.img, styles.shadow]}
                 source={{uri: data[i].img}}/>
          <Text style={styles.title} numberOfLines={2}>{data[i].title}</Text>
        </TouchableOpacity>
      );
      if (i < 4) {
        view1.push(item
        )
      } else {
        view2.push(item)
      }
    }
    return (
      <View style={styles.container}>
        <View>
          <Text style={[styles.title_top, styles.text1]}>热门推荐</Text>
        </View>
        <View style={styles.img_view}>
          {view1}
        </View>
        <View style={styles.img_view}>
          {view2}
        </View>
      </View>
    );
  }

  _showWebPage(url, title){
    this.props.navigator.push({
      component:TWebView,
      title:title,
      passProps:{
        url:url
      }
    })
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
  text1: {
    color: '#5E5E5E',
    marginBottom: 8,
    fontSize: 16
  },
  title_top: {
    marginTop: 10
  },
  title: {
    marginTop: 4,
    fontSize: 14,
    color: '#818181'
  }

});


module.exports = Recommend;
