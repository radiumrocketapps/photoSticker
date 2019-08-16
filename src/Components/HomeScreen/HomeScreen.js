// @flow
import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import {
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
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
          >
            <Icon name="rocket" size={30} color="#900" />
          </TouchableOpacity>
        </RNCamera>
      </SafeAreaView>
    </>
  )
}

export default HomeScreen
