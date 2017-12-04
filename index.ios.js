/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,TextInput,
  Image,ListView, Dimensions,
  TabBarIOS,NavigatorIOS, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from './Carousel'
import SearchComponent from './common/SearchComponent';
import ScrollerContent from './common/ScrollerContent';

let ITEMS = {'Shop with free shipping over $35' :
  [{name:'Computers & Accessories',url:'https://jetimages.azureedge.net/md5/e0e39d5e0f7ece42e8de92af09315afa.300'},{name:'Backpacks',url:'https://jetimages.azureedge.net/md5/c822d5aa2df459e581667fa2e5e8df2f.300'},{name:'Living Room Furniture',url:'https://jetimages.azureedge.net/md5/6a27e4adb46bbcce016b89986813d347.300'},{name:'Golf',url:'https://jetimages.azureedge.net/md5/9cba3b8b68af7f6299c3ce403bbc60f4.300'},{name:'Home Accents',url:'https://jetimages.azureedge.net/md5/69825e766bbe35613a27b91eb5595fe4.300'}],
  'Get the basics delivered in 2 days':[{name:'Crayola',url:'https://jetimages.azureedge.net/md5/4ef9a58e3d868e8a58dc0fd2d33253de.300'},{name:'Grocery',url:'https://jetimages.azureedge.net/md5/ca870b4bd849a98f1d2b8c02c0d0582a.300'},{name:'Fresh Food',url:'https://jetimages.azureedge.net/md5/3a6acef852782d6577f743af164cc21f.300'},{name:'Household',url:'https://jetimages.azureedge.net/md5/b25bdb26daca07ad8128b9f44f12ad08.300'},{name:'Health & Beauty',url:'https://jetimages.azureedge.net/md5/c94aab4d2d18b30f4bfa65d68c54d6fc.300'},{name:'Pet Supplies', url:'https://jetimages.azureedge.net/md5/b8de3ec008c69ba37b1fff7a97ac38ce.300'}],
};

export default class LinkRJAndNat extends Component {

  constructor(props) {
     super(props);
     this.state = {
       selectedTab: 'home'
     };
   }

  render() {
    return (
      <TabBarIOS tintColor="#8200ff" barTintColor='#ffffff'>
      <Icon.TabBarItemIOS
        selected={this.state.selectedTab === 'home'}
        title="Home"
        iconName="ios-home-outline"
        selectedIconName="ios-home"
        onPress={() => {
            this.setState({
                selectedTab: 'home',
            });
        }}>
        <NavigatorIOS barTintColor='#ffffff' tintColor="#8200ff"
    initialRoute={{
      component: ScrollerContent,
      titleTextColor :"#8200ff",
      title: 'Categories', leftButtonIcon:require('./img/menu.png'),
      leftButtonTitle: "Categories", onLeftButtonPress : () => {
       },
    }}
    style={{flex: 1}}
    />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === 'search'}
          title="Search"
          iconName="ios-search-outline"
          selectedIconName="ios-search"
          onPress={() => {
              this.setState({
                  selectedTab: 'search',
              });
          }}>
          <SearchComponent/>
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            selected={this.state.selectedTab === 'myjet'}
            title="My Jet"
            iconName="ios-people-outline"
            selectedIconName="ios-people"
            onPress={() => {
                this.setState({
                    selectedTab: 'myjet',
                });
            }}>
            <Welcome/>
            </Icon.TabBarItemIOS>
            <Icon.TabBarItemIOS
              selected={this.state.selectedTab === 'cart'}
              title="Cart"
              iconName="ios-cart-outline"
              selectedIconName="ios-cart"
              onPress={() => {
                  this.setState({
                      selectedTab: 'cart',
                  });
              }}>
              <Welcome/>
              </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

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
  list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding:8,
    },
    item: {
        backgroundColor: 'white',
        margin: 3,
        width:Dimensions.get('window').width / 2.2,
        height:100,
      },
      sectionItem: {
          backgroundColor: 'lightgray',
          width:Dimensions.get('window').width,
          height:40,
        justifyContent: 'center',
        alignItems: 'center',
flexDirection:'row',
        }
});



class SliderComp extends Component{

constructor(props){
  super(props);
  }


  render(){
    return(
      <View style={{flex:1, flexDirection:'column',height:200}}>
            <View  style={{flex:1,}} >
              <Carousel selectedIndex={0} count={5} renderCard={this.renderCard}>
              </Carousel>
            </View>
      </View>
    );
  }

  renderCard = (index : number) => {
    var c = 'skyblue';
    switch (index%2) {
      case 0:
      c = 'green';
        break;
        case 1:
        c = 'skyblue';
        break;
      default:
      c = 'red';
break;
    }
    return (
          <Text style={{flex: 1, backgroundColor: c , color:'red'}} key={index}> Hwllo</Text>
        );
  }
}





class Welcome extends Component{
  constructor(props) {
     super(props);
   }
  render(){
        let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

    return (
        <View style={styles.container}>
       <View style={{flex: 1, backgroundColor: 'powderblue'}} />
       <View style={{flex: 1, backgroundColor: 'skyblue', alignItems:'center',justifyContent: 'center',}} >
       <Image source={pic} style={{width: 193, height: 110}}/>
       </View>
       <View style={{flex: 1, backgroundColor: 'steelblue'}} />
        </View>

    );
  }
}

module.export = Welcome;

AppRegistry.registerComponent('LinkRJAndNat', () => LinkRJAndNat);
