// @flow
import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import {
  View,
  Image,
  StatusBar,
  SafeAreaView,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { Icon } from 'react-native-elements'
import type { Sticker as StickerType } from 'src/redux/modules/stickers'
import colors from 'src/res/colors'
import { HEADER_HIGHT } from 'src/navigation'
import SearchSticker from './StickerSearch'
import styles from './styles'
import type { ReduxProps } from '.'

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)

type Props = NavigationScreenProps & ReduxProps

class StickersModal extends Component<Props> {
  componentDidMount = () => {
    const { getStickers } = this.props
    getStickers()
  }

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

  renderStickers = ({ item }: Object) => (
    <TouchableOpacity
      key={item.id}
      onPress={this.setSelectSticker(item)}
      style={styles.stickerButton}
    >
      <Image
        resizeMode="contain"
        source={item.source}
        style={styles.sticker}
      />
    </TouchableOpacity>
  )

  keyExtractor = (item: Object) => item.id

  render = () => {
    const { stickers, navigation } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.gray} barStyle="light-content" />
        <View style={styles.header}>
          <View style={styles.emptyBox} />
          <SearchSticker />
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeIcon}>
            <Icon
              color={colors.white}
              name="close"
              type="material"
              iconStyle={styles.closeIcon}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          keyExtractor={this.keyExtractor}
          style={styles.flatlist}
          contentContainerStyle={styles.content}
          numColumns={4}
          data={stickers}
          renderItem={this.renderStickers}
        />
      </SafeAreaView>
    )
  }
}

export default StickersModal
