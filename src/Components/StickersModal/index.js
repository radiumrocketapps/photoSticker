// @flow
import { connect } from 'react-redux'
import { selectSticker, addSticker } from 'src/redux/modules/stickers/actions'
import Component from './StickersModal'

const mapStateToProps = (state: any) => ({
  stickers: state.stickers.list,
})

const mapDispatchToProps = {
  selectSticker,
  addSticker,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
