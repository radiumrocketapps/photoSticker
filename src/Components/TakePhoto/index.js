// @flow
import { connect } from 'react-redux'
import {
  toggleFlash,
  changeCamera,
  savePicture,
} from 'src/redux/modules/camera/actions'
import Component from './TakePhoto'

const mapStateToProps = (state: any) => ({
  isBackCamera: state.camera.isBackCamera,
  flashEnabled: state.camera.flashEnabled,
})

const mapDispatchToProps = {
  toggleFlash,
  changeCamera,
  savePicture,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
