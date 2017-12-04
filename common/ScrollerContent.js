import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,TextInput,
  Image,ListView, Dimensions,Platform,
} from 'react-native';

let ITEMS = {'Shop with free shipping over $35' :
  [{name:'Computers & Accessories',url:'https://jetimages.azureedge.net/md5/e0e39d5e0f7ece42e8de92af09315afa.300'},{name:'Backpacks',url:'https://jetimages.azureedge.net/md5/c822d5aa2df459e581667fa2e5e8df2f.300'},{name:'Living Room Furniture',url:'https://jetimages.azureedge.net/md5/6a27e4adb46bbcce016b89986813d347.300'},{name:'Golf',url:'https://jetimages.azureedge.net/md5/9cba3b8b68af7f6299c3ce403bbc60f4.300'},{name:'Home Accents',url:'https://jetimages.azureedge.net/md5/69825e766bbe35613a27b91eb5595fe4.300'}],
  'Get the basics delivered in 2 days':[{name:'Crayola',url:'https://jetimages.azureedge.net/md5/4ef9a58e3d868e8a58dc0fd2d33253de.300'},{name:'Grocery',url:'https://jetimages.azureedge.net/md5/ca870b4bd849a98f1d2b8c02c0d0582a.300'},{name:'Fresh Food',url:'https://jetimages.azureedge.net/md5/3a6acef852782d6577f743af164cc21f.300'},{name:'Household',url:'https://jetimages.azureedge.net/md5/b25bdb26daca07ad8128b9f44f12ad08.300'},{name:'Health & Beauty',url:'https://jetimages.azureedge.net/md5/c94aab4d2d18b30f4bfa65d68c54d6fc.300'},{name:'Pet Supplies', url:'https://jetimages.azureedge.net/md5/b8de3ec008c69ba37b1fff7a97ac38ce.300'}],
};

export default class ScrollerContent extends Component{
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
      dataSource:ds.cloneWithRowsAndSections(ITEMS),
    };
  }

  render(){
    return (
      <ListView contentContainerStyle={styles.list}
      stickySectionHeadersEnabled = {Platform.OS === 'ios' ? true : false}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View style={[{flexDirection:'column'},styles.item]} marginTop={10}>
            <Image source={{uri: rowData.url}}
            style={{flex:1, height: 80}} resizeMode='contain'>
            </Image>
              <Text marginTop={10} style={{backgroundColor:'white', textAlign:'center',}}>{rowData.name}</Text>
            </View>

          }
          renderSectionHeader={(sectionData, sectionID) => <View style={styles.sectionItem}><Text style={{marginLeft:10,}}>{sectionData}</Text></View>}
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


module.exports = ScrollerContent;
