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

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
  }

  render() {
    var views = [];
    var data = this.state.data;
    for(var i in data){
      views.push(
        <TouchableOpacity
          style={styles.img_item} key={i}
          onPress={this._showWebPage.bind(this, data[i].url,data[i].title)}>
          <Image resetMode="cover" style={styles.img}
                 source={{uri:data[i].img}}/>
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text1}>推荐专题</Text>
        </View>
        <View style={styles.img_view}>
          {views}
        </View>
        <View>
          <Text style={styles.text2}>查看更多同期主题&gt;&gt;</Text>
        </View>
      </View>
    );
  }

  _showWebPage(url,title){
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
    marginBottom: 10
  }
});


module.exports = Topic;
