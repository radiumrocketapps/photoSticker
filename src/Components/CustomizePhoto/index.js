// @flow
import { connect } from 'react-redux'
import { selectSticker } from 'src/redux/modules/stickers/actions'
import Component from './CustomizePhoto'

const mapStateToProps = (state: any) => ({
  picture: state.camera.picture,
  isBackCamera: state.camera.isBackCamera,
  used: state.stickers.used,
  selectedSticker: state.stickers.selectedSticker,

})

const mapDispatchToProps = {
  selectSticker,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
