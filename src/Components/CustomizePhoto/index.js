// @flow
import { connect } from 'react-redux'
import {
  selectSticker,
  unselectSticker,
  cleanUsedStickers,
} from 'src/redux/modules/stickers/actions'
import { saveToGallery } from 'src/redux/modules/camera/actions'
import Component from './CustomizePhoto'

const mapStateToProps = (state: any) => ({
  picture: state.camera.picture,
  used: state.stickers.used,
  selectedSticker: state.stickers.selectedSticker,
  finalSaved: state.camera.finalSaved,
  mirrorView: state.camera.mirrorView,
})

const mapDispatchToProps = {
  selectSticker,
  unselectSticker,
  cleanUsedStickers,
  saveToGallery,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
