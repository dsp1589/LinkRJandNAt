import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,TextInput,
  Image,ListView, Dimensions,
  TabBarIOS,NavigatorIOS, Alert,TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollerContent from './ScrollerContent';

let ITEMS_TRENDING = {'Trending Searches':['Grocery','Household Products','Health & Beauty','Baby','Pet Supplies']};

class SearchComponent extends Component{
  constructor(props) {
     super(props);
     this.state = {
       searchFieldActive : false,
     };
     this._cameraClicked = this._cameraClicked.bind(this);
     this._onBlur = this._onBlur.bind(this);
   }

   render(){
     var c = this.state.searchFieldActive ? <JustList/>:<ScrollerContent/>;
     return(
       <View style={{flex:1,flexDirection:'column',paddingTop:30,}}>
            <View style={{flexDirection:'column', paddingBottom:30,}}>
                <Text style={{fontSize:35,fontWeight:'900', paddingLeft:20}}>Search</Text>
                <View style={{flexDirection:'row', height:40,alignSelf:'stretch',marginLeft:20,marginRight:20,}}>
                      <Image source={require('../image_assets_rn/search_rn.png')} style={{alignSelf:'center',}}/>
                      <TextInput placeholder="Search Jet"
                            style={{backgroundColor:'white',marginLeft:20,alignSelf:'stretch',flexGrow:1}}
                            onFocus={this._onFocus}
                            onBlur={this._onBlur}/>
                      <TouchableHighlight onPress={this._cameraClicked} underlayColor='transparent'>
                        <Image source={require('../image_assets_rn/camera_rn.png')} style={{alignSelf:'center',}}/>
                        </TouchableHighlight>
                </View>
            </View>
            {c}
       </View>
     );
   }

   _onBlur = () =>{
    console.log("on focus");
    this.setState({searchFieldActive:!this.state.searchFieldActive});
   }
   _onFocus = () =>{
     console.log("on focus");
     this.setState({searchFieldActive:!this.state.searchFieldActive});
   }
   _cameraClicked = () => {
     console.log(!this.state.searchFieldActive);
   }
}

export default class JustList extends Component{
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    getSectionHeaderData : (d,sectionID) => {
        return sectionID;
    },
  });
    this.state = {
      items : null,
      dataSource:ds.cloneWithRowsAndSections(ITEMS_TRENDING),
    };
  }

  render(){
    return (
      <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View style={{height:30,alignSelf:'stretch',}}>
              <Text style={{marginLeft:30,fontWeight:'300', fontSize:20, height:30}}>{rowData}</Text>
              </View>
          }
          renderSectionHeader={(sectionData, sectionID) => <View style={{height:50,alignSelf:'stretch',}}>
          <Text style={{marginLeft:10,fontWeight:'900', fontSize:26, height:50}}>{sectionData}</Text>
          </View>
        }
        />
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



module.exports = SearchComponent;
