import React, { Component } from 'react';
import { TextInput, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'
import colors from 'src/res/colors'
import styles from './style'

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