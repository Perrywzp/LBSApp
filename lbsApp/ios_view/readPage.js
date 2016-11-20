/**
 * Created by perry on 16/11/12.
 */
import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  NavigatorIOS
} from 'react-native';

import Util from './util';

import Category from './read/category';
import List from './read/list';
import Recommend from './read/recommend';
import Search from './read/search';
import Topic from './read/topic';




class Hr extends Component{
  render(){
    return (
        <View>
          <View style={styles.hr}></View>
        </View>
    );
  }
}


class Read extends Component{
  render(){
    return (
      <NavigatorIOS

        initialRoute={{
          component: ReadPage,
          title: '阅读',
          navigationBarHidden:true
        }}
        style={{flex: 1}}
      />
    )
  }
}


class ReadPage extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Search/>
        <Hr/>
        {
          this.state.isShow ?
            <ScrollView style={styles.container}>
              <Topic/>
              <Hr/>
              <Recommend/>
              <Category/>
              <Recommend/>
            </ScrollView>
            : null
        }

      </View>
    );
  }

  // TODO : fetch data
  componentDidMount() {
    this.setState({isShow:true});
  }

}

var styles = StyleSheet.create({
  container:{
      flex:1
  },
  hr:{
    borderColor:'#F0F0F0',
    borderWidth: Util.pixel,
    marginTop:10
  }
});


module.exports = ReadPage;
