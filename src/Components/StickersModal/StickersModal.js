// @flow
import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import {
  Image,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import type { Sticker as StickerType } from 'src/redux/modules/stickers'
import colors from 'src/res/colors'
import { HEADER_HIGHT } from 'src/navigation'
import styles from './styles'

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)

type Props = NavigationScreenProps

class StickersModal extends Component<Props> {
  setSelectSticker = (sticker: StickerType) => () => {
    const { addSticker, navigation } = this.props
    const x = (screenWidth) / 2 - 75
    const y = (screenHeight - HEADER_HIGHT) / 2 - 75
    addSticker({
      ...sticker,
      position: { x, y },
      transform: [{ translateX: x }, { translateY: y }],
    })
    navigation.goBack()
  }

  renderStickers = () => {
    const { stickers } = this.props
    return stickers.map((item) => (
      <TouchableOpacity
        key={item.id}
        onPress={this.setSelectSticker(item)}
        style={styles.stickerButton}
      >
        <Image resizeMode="contain" source={item.source} style={styles.sticker} />
      </TouchableOpacity>
    ))
  }

  render = () => (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.gray} barStyle="light-content" />
      {this.renderStickers()}
    </SafeAreaView>
  )
}

export default StickersModal