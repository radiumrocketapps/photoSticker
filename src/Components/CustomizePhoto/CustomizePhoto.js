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
import colors from 'src/res/colors'
import styles from './styles'

const opTopIconsSize = 30

type Props = NavigationScreenProps

class CustomizePhoto extends Component<Props> {
  static navigationOptions = () => ({
    title: 'Customize your photo',
  })

  render = () => {
    const {
      picture,
    } = this.props

    return (
      <>
        <StatusBar backgroundColor={colors.greenLight} barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <ImageBackground
            source={{ uri: picture }}
            style={styles.photoPreview}
          >
            <View style={styles.topButtons}>
              <TouchableOpacity
                style={styles.optionPhotoButton}
              >
                <AntDesign
                  name="close"
                  size={opTopIconsSize}
                  color={colors.white}
                />
              </TouchableOpacity>
              <TouchableOpacity
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
          </ImageBackground>
        </SafeAreaView>
      </>
    )
  }
}

export default CustomizePhoto
