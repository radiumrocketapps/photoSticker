// @flow
import { combineReducers } from 'redux'
import type { CameraState } from 'src/redux/modules/camera'
import type { StickersState } from 'src/redux/modules/stickers'
import type { StickerSearchState } from 'src/redux/modules/stickerSearch'

import camera from './camera'
import stickers from './stickers'
import stickerSearch from './stickerSearch'


export type RootReducerState = {
  camera: CameraState,
  stickers: StickersState,
  StickerSearch: StickerSearchState,

}

const rootReducer = combineReducers({
  camera,
  stickers,
  stickerSearch,
})

export default rootReducer
