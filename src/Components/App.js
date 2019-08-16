// @flow
import React, { Component } from 'react'
import AppContainer from 'src/navigation'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
import store from 'src/redux/store'

export default class App extends Component<{}> {
  componentDidMount = () => {
    SplashScreen.hide()
  }

  render = () => (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
