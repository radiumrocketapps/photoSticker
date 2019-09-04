
// @flow
import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import { Icon } from 'react-native-elements'
import colors from 'src/res/colors'
import styles from './styles'
import type { ReduxProps } from '.'

type Props = ReduxProps
type State = {
  text: string,
}

export default class SearchInput extends Component<Props, State> {
  state = { text: '' }

  changeText = (value: string) => {
    const { filterSticker, getStickers } = this.props
    filterSticker(value)
    getStickers(value)
    this.setState({ text: value })
  }

  render() {
    const { text } = this.state
    return (
      <View style={styles.SearchContainer}>
        <Icon
          color={colors.white}
          name="search"
          type="material"
        />
        <TextInput
          value={text}
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor={colors.white}
          onChangeText={this.changeText}
        />
      </View>
    )
  }
}
