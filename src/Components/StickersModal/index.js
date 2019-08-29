// @flow
import { connect } from 'react-redux'
import { selectSticker, addSticker } from 'src/redux/modules/stickers/actions'
import Component from './StickersModal'
import type { RootReducerState } from '../../redux/modules'

const mapStateToProps = (state: RootReducerState) => ({
  stickers: state.stickers.list,
  search: state.stickerSearch.searching
})

const mapDispatchToProps = {
  selectSticker,
  addSticker,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
