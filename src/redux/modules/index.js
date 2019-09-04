// @flow
import { combineReducers } from 'redux'
import type { CameraState } from 'src/redux/modules/camera'
import type { StickersState } from 'src/redux/modules/stickers'

import camera from './camera'
import stickers from './stickers'

export type RootReducerState = {
  camera: CameraState,
  stickers: StickersState,
}

const rootReducer = combineReducers({
  camera,
  stickers,
})

export default rootReducer
