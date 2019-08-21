// @flow
import { connect } from 'react-redux'
import {
  selectSticker,
  unselectSticker,
  cleanUsedStickers,
} from 'src/redux/modules/stickers/actions'
import { saveCustomizedPicture } from 'src/redux/modules/camera/actions'
import Component from './CustomizePhoto'

const mapStateToProps = (state: any) => ({
  picture: state.camera.picture,
  isBackCamera: state.camera.isBackCamera,
  used: state.stickers.used,
  selectedSticker: state.stickers.selectedSticker,

})

const mapDispatchToProps = {
  selectSticker,
  unselectSticker,
  cleanUsedStickers,
  saveCustomizedPicture,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
