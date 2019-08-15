// @flow
import React, { Component } from 'react'
import AppContainer from 'src/navigation'
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component<{}> {
  componentDidMount = () => {
    SplashScreen.hide()
  }

  render = () => (
    <AppContainer />
  )
}
