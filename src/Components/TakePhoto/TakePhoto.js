// @flow
import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import {
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { RNCamera } from 'react-native-camera'
import * as screens from 'src/navigation/screens'
import colors from 'src/res/colors'
import styles from './styles'

const opBottomIconsSize = 25
const opTopIconsSize = 20

type Props = NavigationScreenProps

class TakePhoto extends Component<Props> {
  static navigationOptions = () => ({
    title: 'Take a Photo',
  })

  camera: RNCamera

  takePicture = async () => {
    if (this.camera) {
      const { savePicture, navigation } = this.props
      const options = {
        quality: 1,
        base64: false,
        forceUpOrientation: true,
        // fixOrientation: false,
        skipProcessing: true,
      }
      const data = await this.camera.takePictureAsync(options)
      savePicture(data.uri)
      navigation.navigate(screens.CUSTOMIZE_PHOTO_SCREEN)
    }
  }

  render = () => {
    const {
      toggleFlash,
      changeCamera,
      flashEnabled,
      isBackCamera,
    } = this.props

    return (
      <>
        <StatusBar backgroundColor={colors.greenLight} barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          {/* <View style={styles.preview}> */}
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
              <TouchableOpacity style={styles.optionPhotoButton}>
                <FontAwesome name="image" size={opBottomIconsSize} color={colors.white} />
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
                <FontAwesome5 name="sync-alt" size={opBottomIconsSize} color={colors.white} />
              </TouchableOpacity>
            </View>
          </RNCamera>
          {/* </View> */}
        </SafeAreaView>
      </>
    )
  }
}

export default TakePhoto
