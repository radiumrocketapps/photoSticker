// @flow
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './modules'

const middleware = []
const setMiddleware = composeWithDevTools(applyMiddleware(...middleware))
const store = createStore(rootReducer, setMiddleware)

export default store
