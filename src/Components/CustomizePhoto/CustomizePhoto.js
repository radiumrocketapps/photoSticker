// @flow
import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import {
  View,
  Text,
  Share,
  Platform,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
  PermissionsAndroid,
  // TouchableWithoutFeedback,
} from 'react-native'
import Blob from 'rn-fetch-blob'
import RNShare from 'react-native-share'
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
  sharing: boolean,
}

class CustomizePhoto extends Component<Props, State> {
  static navigationOptions = () => ({
    title: 'Customize your photo',
  })

  state = {
    capturing: false,
    sharing: false,
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
        onDragStart={() => this.selectSticker(parseInt(id, 10), instanceNumber)}
        {...other}
      />
    ))
  }

  setStateAsync = (state: Object) => new Promise<void>((resolve) => {
    this.setState(state, resolve)
  })

  capture = async () => {
    const { unselectSticker } = this.props
    let uri
    try {
      unselectSticker()
      await this.setStateAsync({ capturing: true })
      uri = await this.viewShot.capture()
      this.setState({ capturing: false })
      return uri
    } catch (error) {
      this.setState({ capturing: false })
      return uri
    }
  }

  savePicture = async () => {
    const { finalSaved, saveToGallery } = this.props
    const snapshot = await this.capture()
    if (!finalSaved) {
      await saveToGallery(snapshot, true)
    }
  }

  shareCurrentImage = async () => {
    this.setState({ sharing: true })
    const snapshot = await this.capture()
    if (snapshot) {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          )
          if (!granted) {
            const response = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'Image Sharing Permission',
                message: 'Needs to access your phone storage in order to share the images you\'ve create',
              },
            )
            if (response !== PermissionsAndroid.RESULTS.GRANTED) {
              return
            }
          }
        }

        const base64data = await Blob.fs.readFile(snapshot, 'base64')

        if (typeof base64data === 'string') {
          if (Platform.OS === 'android') {
            await RNShare.open({
              url: `data:image/jpeg;base64,${base64data}`,
              message: 'Made with PhotoSticker',
              type: 'image/jpeg',
            })
          }
          if (Platform.OS === 'ios') {
            await Share.share(
              {
                url: `data:image/jpeg;base64,${base64data}`,
                title: 'Made with PhotoSticker',
              },
            )
          }
        }
        this.setState({ sharing: false })
      } catch (err) {
        this.setState({ sharing: false })
      }
    }
  }

  render = () => {
    const {
      picture,
      mirrorView,
      navigation,
      finalSaved,
      // unselectSticker,
    } = this.props

    const { capturing, sharing } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.blue} barStyle="light-content" />
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
              mirrorView && styles.mirror,
            ]}
          >
            {/* <TouchableWithoutFeedback onPress={unselectSticker}> */}
            <View style={[styles.photoContent, mirrorView && styles.mirror]}>
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
                    <View style={styles.rightTop}>
                      <TouchableOpacity
                        disabled={finalSaved}
                        onPress={this.savePicture}
                        style={styles.optionPhotoButton}
                      >
                        <MCicon
                          name="arrow-collapse-down"
                          size={opTopIconsSize}
                          color={finalSaved
                            ? colors.whiteOpacity(5)
                            : colors.white}
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
                  </View>
                  <View style={styles.bottomButtons}>
                    <TouchableOpacity
                      style={styles.shareButton}
                      onPress={this.shareCurrentImage}
                      disabled={sharing}
                    >
                      {sharing
                        ? (<ActivityIndicator size="small" color={colors.black} />)
                        : (
                          <>
                            <Text style={styles.shareText}>Share</Text>
                            <Entypo name="share" color={colors.black} size={20} />
                          </>
                        )}
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
            {/* </TouchableWithoutFeedback> */}
          </ImageBackground>
        </ViewShot>
      </SafeAreaView>
    )
  }
}

export default CustomizePhoto
