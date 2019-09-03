// @flow
import { connect } from 'react-redux'
import {
  toggleFlash,
  changeCamera,
  savePicture,
} from 'src/redux/modules/camera/actions'
import { cleanUsedStickers } from 'src/redux/modules/stickers/actions'
import Component from './TakePhoto'
import type { RootReducerState } from '../../redux/modules'


const mapStateToProps = (state: RootReducerState) => ({
  isBackCamera: state.camera.isBackCamera,
  flashEnabled: state.camera.flashEnabled,
})

const mapDispatchToProps = {
  toggleFlash,
  changeCamera,
  savePicture,
  cleanUsedStickers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
