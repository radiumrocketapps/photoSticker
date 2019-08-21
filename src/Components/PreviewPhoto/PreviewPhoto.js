// @flow
import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import {
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native'
import colors from 'src/res/colors'
import styles from './styles'

type Props = NavigationScreenProps
type State = {
  preview: ?string,
  capturing: boolean,
}

class PreviewPhoto extends Component<Props, State> {
  static navigationOptions = () => ({
    title: 'Share your photo',
  })

  render = () => {
    const {
      customizedPicture,
    } = this.props

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.greenLight} barStyle="light-content" />
        <Image source={{ uri: customizedPicture }} style={styles.imagePreview} />
      </SafeAreaView>
    )
  }
}

export default PreviewPhoto
