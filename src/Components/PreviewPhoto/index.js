// @flow
import { connect } from 'react-redux'
import {
  selectSticker,
  unselectSticker,
  cleanUsedStickers,
} from 'src/redux/modules/stickers/actions'
import Component from './PreviewPhoto'

const mapStateToProps = (state: any) => ({
  customizedPicture: state.camera.customizedPicture,
})

const mapDispatchToProps = {
  selectSticker,
  unselectSticker,
  cleanUsedStickers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
