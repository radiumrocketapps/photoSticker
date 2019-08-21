// @flow
import React, { Component } from 'react'
import { NavigationScreenProps, NavigationEvents } from 'react-navigation'
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import ViewShot from 'react-native-view-shot'
import MCicon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import * as screens from 'src/navigation/screens'
import colors from 'src/res/colors'
import Sticker from './Sticker'
import styles from './styles'

const opTopIconsSize = 30

type Props = NavigationScreenProps
type State = {
  capturing: boolean,
}

class CustomizePhoto extends Component<Props, State> {
  static navigationOptions = () => ({
    title: 'Customize your photo',
  })

  state = {
    capturing: false,
  }

  viewShot: any

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

  capture = async () => {
    const {
      navigation,
      unselectSticker,
      saveCustomizedPicture,
    } = this.props
    try {
      unselectSticker()
      this.setState({ capturing: true }, async () => {
        const uri = await this.viewShot.capture()
        saveCustomizedPicture(uri)
        this.setState({ capturing: false })
        navigation.navigate(screens.PREVIEW_PHOTO_SCREEN)
      })
    } catch (error) {
      this.setState({ capturing: false })
    }
  }

  cleanPreview = () => {
    const { cleanUsedStickers } = this.props
    cleanUsedStickers()
  }

  render = () => {
    const {
      picture,
      isBackCamera,
      navigation,
    } = this.props

    const { capturing } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.greenLight} barStyle="light-content" />
        <NavigationEvents
          onDidBlur={this.cleanPreview}
        />
        <ViewShot
          ref={(ref) => {
            this.viewShot = ref
          }}
          options={{
            format: 'jpg',
            quality: 0.95,
            result: 'tmpfile',
          }}
          style={{ flex: 1 }}
        >
          <ImageBackground
            source={{ uri: picture }}
            style={[
              styles.photoPreview,
              !isBackCamera && styles.mirror,
            ]}
          >
            <View style={[styles.photoContent, !isBackCamera && styles.mirror]}>
              {this.renderStickers()}
              {!capturing && (
                <>
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
                      onPress={this.capture}
                    >
                      <Text style={styles.shareText}>Share</Text>
                      <Entypo name="share" color={colors.black} size={20} />
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          </ImageBackground>
        </ViewShot>
      </SafeAreaView>
    )
  }
}

export default CustomizePhoto
