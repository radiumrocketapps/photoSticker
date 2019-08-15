// @flow
import React from 'react'
import {
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native'

const HomeScreen = () => (
  <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <Text>
        PhotoSticker App
      </Text>
    </SafeAreaView>
  </>
)

export default HomeScreen
