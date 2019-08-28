import React, { Component } from 'react';
import { TextInput, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import colors from 'src/res/colors'


const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  SearchContainer: {
    fontWeight: 'bold',
    fontSize: 30,
    flexDirection: 'row',
    width: screenWidth * 0.9,
    display: "flex",
    color: 'white',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  textInput: {
    color: 'white'
  }
});



export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.SearchContainer}>
        <Icon
          color='white'
          name='search'
          type='material'
        />
        <TextInput
          style={styles.textInput}
          placeholder="Search!"
          placeholderTextColor='white'
          onChangeText={(text) => this.props.searchSticker({ text })}
        />
      </View>
    );
  }
}