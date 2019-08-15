// @flow
import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import {
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native'
import colors from 'src/res/colors'

type Props = NavigationScreenProps

class HomeScreen extends Component<Props> {
  static navigationOptions = () => ({
    title: 'PhotoSticker',
  })

  render = () => (
    <>
      <StatusBar backgroundColor={colors.greenLight} barStyle="light-content" />
      <SafeAreaView>
        <Text>
          PhotoSticker App
        </Text>
      </SafeAreaView>
    </>
  )
}

export default HomeScreen
