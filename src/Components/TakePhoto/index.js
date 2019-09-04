// @flow
import { connect } from 'react-redux'
import {
  savePicture,
  toggleFlash,
  changeCamera,
} from 'src/redux/modules/camera/actions'
import { cleanUsedStickers } from 'src/redux/modules/stickers/actions'
import type { RootReducerState } from 'src/redux/modules'
import Component from './TakePhoto'

type StateProps = {
  isBackCamera: $PropertyType<RootReducerState, "isBackCamera">,
  flashEnabled: $PropertyType<RootReducerState, "flashEnabled">
}

const mapStateToProps = (state: RootReducerState) => ({
  isBackCamera: state.camera.isBackCamera,
  flashEnabled: state.camera.flashEnabled,
})

type DispatchProps = {
  savePicture: typeof savePicture,
  toggleFlash: typeof toggleFlash,
  changeCamera: typeof changeCamera,
  cleanUsedStickers: typeof cleanUsedStickers,
}

const mapDispatchToProps = {
  savePicture,
  toggleFlash,
  changeCamera,
  cleanUsedStickers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
export type ReduxProps = StateProps & DispatchProps
