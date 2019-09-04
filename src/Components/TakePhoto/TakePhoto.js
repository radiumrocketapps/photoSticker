// @flow
import React, { Component } from 'react'
import { NavigationScreenProps, NavigationEvents } from 'react-navigation'
import {
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { RNCamera } from 'react-native-camera'
import * as screens from 'src/navigation/screens'
import colors from 'src/res/colors'
import styles from './styles'
import type { ReduxProps } from '.'

const opBottomIconsSize = 25
const opTopIconsSize = 20

type Props = ReduxProps & NavigationScreenProps

class TakePhoto extends Component<Props> {
  static navigationOptions = () => ({
    title: 'Take a Photo',
  })

  camera: RNCamera

  takePicture = async () => {
    if (this.camera) {
      const { savePicture, navigation, isBackCamera } = this.props
      const options = {
        quality: 1,
        base64: false,
        forceUpOrientation: true,
        skipProcessing: true,
      }
      const data = await this.camera.takePictureAsync(options)
      savePicture(data.uri, { mirrorView: !isBackCamera })
      navigation.navigate(screens.CUSTOMIZE_PHOTO_SCREEN)
    }
  }

  cleanPreview = () => {
    const { cleanUsedStickers } = this.props
    cleanUsedStickers()
  }

  openGallery = async () => {
    const { navigation, savePicture } = this.props
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      )
      if (!granted) {
        const response = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Image Library Access Permission',
            message: 'PhotoSticker needs to access your phone storage in order to select from your existing images',
          },
        )
        if (response !== PermissionsAndroid.RESULTS.GRANTED) {
          return
        }
      }
    }
    ImagePicker.launchImageLibrary({}, (data) => {
      if (data.uri) {
        savePicture(data.uri, { mirrorView: false })
        navigation.navigate(screens.CUSTOMIZE_PHOTO_SCREEN)
      }
    })
  };

  render = () => {
    const {
      toggleFlash,
      changeCamera,
      flashEnabled,
      isBackCamera,
    } = this.props

    return (
      <>
        <StatusBar backgroundColor={colors.blue} barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <NavigationEvents
            onWillBlur={this.cleanPreview}
          />
          <RNCamera
            ref={(ref) => {
              this.camera = ref
            }}
            style={styles.preview}
            type={
              isBackCamera
                ? RNCamera.Constants.Type.back
                : RNCamera.Constants.Type.front
            }
            flashMode={
              flashEnabled
                ? RNCamera.Constants.FlashMode.on
                : RNCamera.Constants.FlashMode.off
            }
          >
            <View style={styles.topButtons}>
              <TouchableOpacity onPress={toggleFlash} style={styles.optionPhotoButton}>
                <Ionicons
                  name={flashEnabled ? 'ios-flash' : 'ios-flash-off'}
                  size={opTopIconsSize}
                  color={colors.white}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.bottomButtons}>
              <TouchableOpacity
                onPress={this.openGallery}
                style={styles.optionPhotoButton}
              >
                <FontAwesome
                  name="image"
                  size={opBottomIconsSize}
                  color={colors.white}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.takePicture}
                style={styles.takePhotoButton}
              >
                <View style={styles.centerTakePhotoButton} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={changeCamera}
                style={styles.optionPhotoButton}
              >
                <FontAwesome5
                  name="sync-alt"
                  size={opBottomIconsSize}
                  color={colors.white}
                />
              </TouchableOpacity>
            </View>
          </RNCamera>
        </SafeAreaView>
      </>
    )
  }
}

export default TakePhoto
