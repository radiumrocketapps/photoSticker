// @flow
import React, { Component } from 'react'
import AppContainer from 'src/navigation'
import GlobalFont from 'react-native-global-font'
import { Provider } from 'react-redux'
import store from 'src/redux/store'
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component<{}> {
  componentDidMount = () => {
    const fontName = 'Rubik-Medium'
    GlobalFont.applyGlobal(fontName)
    SplashScreen.hide()
  }

  render = () => (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
