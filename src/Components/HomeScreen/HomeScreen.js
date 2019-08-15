// @flow
import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import {
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import { RNCamera } from 'react-native-camera'
import colors from 'src/res/colors'
import styles from './styles'

type Props = NavigationScreenProps

class HomeScreen extends Component<Props> {
  static navigationOptions = () => ({
    title: 'PhotoSticker',
  })

  render = () => (
    <>
      <StatusBar backgroundColor={colors.greenLight} barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <RNCamera
          style={styles.preview}
        >
          <TouchableOpacity
            style={styles.galleryButton}
          />
        </RNCamera>
      </SafeAreaView>
    </>
  )
}

export default HomeScreen
