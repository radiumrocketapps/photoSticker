// @flow
import { combineReducers } from 'redux'
import type { CameraState } from 'src/redux/modules/camera'
import camera from './camera'

export type RootReducerState = {
  camera: CameraState,
}

const rootReducer = combineReducers({
  camera,
})

export default rootReducer
