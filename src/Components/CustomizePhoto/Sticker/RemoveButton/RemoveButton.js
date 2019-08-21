// @flow

import React, { PureComponent } from 'react'
import { PanResponder, View } from 'react-native'
import colors from 'src/res/colors'
import MCicon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './style'
import type { ReduxProps } from '.'

type Props = ReduxProps & {}
type State = {}

export default class RemoveButton extends PureComponent<Props, State> {
  panResponder: any

  componentWillMount = () => {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => this.onRemovePress(),
    })
  };

  onRemovePress = () => {
    const { removeSticker, id, instanceNumber } = this.props
    removeSticker(id, instanceNumber)
  }

  render() {
    const { style } = this.props
    return (
      <View
        {...this.panResponder.panHandlers}
        style={[styles.icnCloseTouchable, style]}
      >
        <MCicon
          name="close-circle"
          size={20}
          color={colors.red}
        />
      </View>
    )
  }
}
