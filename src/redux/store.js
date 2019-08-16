// @flow
import { createStore } from 'redux'
import Reactotron from 'reactotron-react-native'
import rootReducer from './modules'

const store = createStore(rootReducer, Reactotron.createEnhancer())

export default store
