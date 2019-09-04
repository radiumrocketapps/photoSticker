// @flow
import { connect } from 'react-redux'
import {
  selectSticker,
  unselectSticker,
} from 'src/redux/modules/stickers/actions'
import { saveToGallery, cleanCamera } from 'src/redux/modules/camera/actions'
import type { CameraState } from 'src/redux/modules/camera'
import Component from './CustomizePhoto'

type StateProps = {
  picture: $PropertyType<CameraState, "picture">,
  used: $PropertyType<CameraState, "used">,
  selectedSticker: $PropertyType<CameraState, "selectedSticker">,
  finalSaved: $PropertyType<CameraState, "finalSaved">,
  mirrorView: $PropertyType<CameraState, "mirrorView">,
  finalImage: $PropertyType<CameraState, "finalImage">,
}

const mapStateToProps = (state: any) => ({
  picture: state.camera.picture,
  used: state.stickers.used,
  selectedSticker: state.stickers.selectedSticker,
  finalSaved: state.camera.finalSaved,
  mirrorView: state.camera.mirrorView,
  finalImage: state.camera.finalImage,
})

type DispatchProps = {
  selectSticker: typeof selectSticker,
  unselectSticker: typeof unselectSticker,
  saveToGallery: typeof saveToGallery,
  cleanCamera: typeof cleanCamera,
}

const mapDispatchToProps = {
  selectSticker,
  unselectSticker,
  saveToGallery,
  cleanCamera,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
export type ReduxProps = DispatchProps & StateProps
