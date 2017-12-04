/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import SearchComponent from './common/SearchComponent';
import ScrollerContent from './common/ScrollerContent';

export default class LinkRJAndNat extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Home' },
      { key: '2', title: 'Search' },
      { key: '3', title: 'My Jet' },
      { key: '4', title: 'Cart' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} indicatorStyle={{backgroundColor:'white',}} style={{backgroundColor:'#8200ff',}}/>;

  _renderScene = SceneMap({
    '1': ScrollerContent,
    '2': SearchComponent,
    '3':ScrollerContent,
    '4':ScrollerContent,
  });

  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

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

AppRegistry.registerComponent('LinkRJAndNat', () => LinkRJAndNat);
