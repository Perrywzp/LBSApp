/**
 * Created by perry on 16/11/20.
 */
import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity
} from 'react-native';

import Util from './../util';
import TWebView from './../tWebView';


class List extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      url: props.url,
      dataSource: ds.cloneWithRows([]),
      navigator: props.navigator
    };
  }

  render() {

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>(
          <TouchableOpacity
            style={styles.item}
            onPress={this._showWebPage.bind(this, rowData.url, rowData.title)}>
            <View>
              <Image style={styles.img}
                     source={{uri: rowData.img}}/>
            </View>
            <View style={styles.text_wrapper}>
              <Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
              <Text style={styles.time}>{rowData.time}</Text>
            </View>
          </TouchableOpacity>
        )}
        enableEmptySections={true}
      />
    );
  }

  componentDidMount() {
    let url = this.state.url;
    let that = this;
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    Util.get(url, function (data) {
      if (data.status === 1) {
        let obj = data.data;
        that.setState({
          dataSource: ds.cloneWithRows(obj)
        });
      } else {
        alert('数据调取失败！');
      }
    }, function (err) {
      console.log(err);
    })
  }

  _showWebPage(url, title) {
    this.state.navigator.push({
      component: TWebView,
      title: title,
      passProps: {
        url: url
      }
    })
  }
}

var styles = StyleSheet.create({
  item: {
    height: 78,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#EDEDED',
    borderBottomWidth: Util.pixel,
    flexDirection: 'row'
  },
  img: {
    width: 72,
    height: 72,
    borderRadius: 3,
    marginTop: 7
  },
  text_wrapper: {
    marginLeft: 10,
    flex: 1
  },
  title: {
    fontSize: 16,
    marginTop: 10
  },
  time: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 5
  }
});


module.exports = List;
