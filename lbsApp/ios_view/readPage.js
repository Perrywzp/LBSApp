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
import Recommend from './read/recommend';
import Search from './read/search';
import Topic from './read/topic';


class Hr extends Component {
  render() {
    return (
      <View>
        <View style={styles.hr}></View>
      </View>
    );
  }
}


class Read extends Component {
  render() {
    return (
      <NavigatorIOS

        initialRoute={{
          component: ReadPage,
          title: '阅读',
          navigationBarHidden: true
        }}
        style={{flex: 1}}
      />
    )
  }
}


class ReadPage extends Component {
  constructor(props) {
    super(props);
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
            <ScrollView style={[styles.container, {paddingTop: 10}]}>
              <Topic data={this.state.recommendTopic} navigator={this.props.navigator}/>
              <Hr/>
              <Recommend
                name="热门推荐"
                data={this.state.hotTopic}
                navigator={this.props.navigator}/>
              <Category
                data={this.state.category}
                navigator={this.props.navigator}/>
              <Recommend
                name="清新一刻"
                data={this.state.other}
                navigator={this.props.navigator}/>
              <View style={{height: 50}}></View>
            </ScrollView>
            : null
        }

      </View>
    );
  }

  // TODO : fetch data
  componentDidMount() {
    var that = this;
    Util.get('http://localhost:3000/data/read?type=config', function (data) {
      if (data) {
        let obj = data.data;
        let hotTopic = obj.hotTopic;
        let recommendTopic = obj.recommendTopic;
        let category = obj.category;
        let other = obj.other;
        that.setState({
          isShow: true,
          hotTopic: hotTopic,
          recommendTopic: recommendTopic,
          category: category,
          other: other,
        });
      }
    }, function (err) {

    })
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hr: {
    borderColor: '#F0F0F0',
    borderWidth: Util.pixel,
    marginTop: 10
  }
});


module.exports = Read;
