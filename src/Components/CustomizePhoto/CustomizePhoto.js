// @flow
import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import MCicon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import * as screens from 'src/navigation/screens'
import colors from 'src/res/colors'
import Sticker from './Sticker'
import styles from './styles'

const opTopIconsSize = 30

type Props = NavigationScreenProps

class CustomizePhoto extends Component<Props> {
  static navigationOptions = () => ({
    title: 'Customize your photo',
  })

  showStickersModal = () => {
    const { navigation } = this.props
    navigation.push(screens.STICKERS_MODAL)
  }

  selectSticker = (id: number, instanceNumber: number) => {
    const { selectSticker } = this.props
    selectSticker(id, instanceNumber)
  }

  renderStickers = () => {
    const { used, selectedSticker } = this.props
    return used.map(({ id, instanceNumber, ...other }) => (
      <Sticker
        key={`${id}-${instanceNumber}`}
        id={id}
        instanceNumber={instanceNumber}
        selected={
          selectedSticker.id === id
          && selectedSticker.instanceNumber === instanceNumber
        }
        onPress={() => this.selectSticker(parseInt(id, 10), instanceNumber)}
        onDragStart={() => this.selectSticker(parseInt(id, 10), instanceNumber)}
        {...other}
      />
    ))
  }

  render = () => {
    const {
      picture,
      isBackCamera,
      navigation,
    } = this.props

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.greenLight} barStyle="light-content" />
        <ImageBackground
          source={{ uri: picture }}
          style={[
            styles.photoPreview,
            !isBackCamera && styles.mirror,
          ]}
        >
          <View style={[styles.photoContent, !isBackCamera && styles.mirror]}>
            {this.renderStickers()}
            <View style={styles.topButtons}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.optionPhotoButton}
              >
                <AntDesign
                  name="close"
                  size={opTopIconsSize}
                  color={colors.white}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.showStickersModal}
                style={styles.optionPhotoButton}
              >
                <MCicon
                  name="sticker-emoji"
                  size={opTopIconsSize}
                  color={colors.white}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.bottomButtons}>
              <TouchableOpacity
                style={styles.shareButton}
              >
                <Text style={styles.shareText}>Share</Text>
                <Entypo name="share" color={colors.black} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

      </SafeAreaView>
    )
  }
}

export default CustomizePhoto
