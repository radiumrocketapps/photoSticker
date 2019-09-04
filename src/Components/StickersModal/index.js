// @flow
import { connect } from 'react-redux'
import { selectSticker, addSticker, getStickers } from 'src/redux/modules/stickers/actions'
import { filterStickers } from 'src/redux/modules/stickers/selectors'
import Component from './StickersModal'
import type { RootReducerState } from '../../redux/modules'

const mapStateToProps = (state: RootReducerState) => ({
  stickers: filterStickers(state),
})

const mapDispatchToProps = {
  selectSticker,
  addSticker,
  getStickers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
