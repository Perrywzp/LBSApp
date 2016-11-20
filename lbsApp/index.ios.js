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
  View,
  TabBarIOS,
} from 'react-native';

import ToiletPage from './ios_view/toiletPage';
import ReadPage from './ios_view/readPage';
import WeatherPage from './ios_view/weatherPage';
import SettingPage from './ios_view/settingPage';

let toiletIcon = 'data:image/png;base64,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';
let weatherIcon = 'data:image/png;base64,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';
let readIcon = 'data:image/png;base64,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';
let setIcon = 'data:image/png;base64,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';


class lbsApp extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab:'toilet'
    }
  }


  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="卫生间"
          icon={{uri: toiletIcon, scale: 7}}
          selected={this.state.selectedTab === 'toilet'}
          onPress={() => {
            this.setState({
              selectedTab: 'toilet',
            });
          }}>
          {this._renderView('toilet')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="阅读"
          icon = {{uri:readIcon,scale:8}}
          selected={this.state.selectedTab === 'read'}
          onPress={() => {
            this.setState({
              selectedTab: 'read'
            });
          }}>
          {this._renderView('read')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="天气"
          icon={{uri:weatherIcon,scale:7}}
          selected={this.state.selectedTab === 'weather'}
          onPress={() => {
            this.setState({
              selectedTab: 'weather'
            });
          }}>
          {this._renderView('weather')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="设置"
          icon={{uri:setIcon,scale:7}}
          selected={this.state.selectedTab === 'setting'}
          onPress={() => {
            this.setState({
              selectedTab: 'setting'
            });
          }}>
          {this._renderView('setting')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
  _renderView(moduleName) {
    var view = <ToiletPage/>;
    switch (moduleName){
      case 'toilet':
        view = <ToiletPage/>;
            break;
      case 'read':
        view = <ReadPage/>;
            break;
      case 'weather':
        view = <WeatherPage/>;
            break;
      default:
        view = <SettingPage/>;
            break;
    }

    return view;
  }
}

// 注册应用入口
AppRegistry.registerComponent('lbsApp', () => lbsApp);
