'use strict';


import ViewPager from './ViewPager'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {
  count: number;
  selectedIndex: number;
  onSelectedIndexChange?: (index: number) => void;
  renderCard: (index: number) => ReactElement;
  style?: any;
};

class Carousel extends Component {
  props: Props;

  render() {
    let cards = [];
    const {count, selectedIndex, renderCard} = this.props;

    for (let i = 0; i < count; i++) {
      let content = null;
      if (Math.abs(i - selectedIndex) < count) {
        content = renderCard(i);
      }
      cards.push(content);
    }



    return (
      <ViewPager style={styles.carousel} {...this.props} bounces={true}>
        {cards}
      </ViewPager>
    );
  }
}

var styles = StyleSheet.create({
  carousel: {
      margin: 10,
      overflow: 'visible',
      backgroundColor: 'transparent',
  }
});

module.exports = Carousel;
