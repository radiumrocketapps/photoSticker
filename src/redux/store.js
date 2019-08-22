// @flow
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './modules'

const middleware = [
  promiseMiddleware,
]
const setMiddleware = composeWithDevTools(applyMiddleware(...middleware))
const store = createStore(rootReducer, setMiddleware)

export default store
