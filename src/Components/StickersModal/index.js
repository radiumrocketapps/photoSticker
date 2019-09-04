// @flow
import { connect } from 'react-redux'
import { selectSticker, addSticker, getStickers } from 'src/redux/modules/stickers/actions'
import { filterStickers } from 'src/redux/modules/stickers/selectors'
import type { RootReducerState } from 'src/redux/modules'
import Component from './StickersModal'

type StateProps = {
  stickers: $PropertyType<RootReducerState, "stickers">
}

const mapStateToProps = (state: RootReducerState) => ({
  stickers: filterStickers(state),
})

type DispatchProps = {
  selectSticker: typeof selectSticker,
  addSticker: typeof addSticker,
  getStickers: typeof getStickers,
}

const mapDispatchToProps = {
  selectSticker,
  addSticker,
  getStickers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
export type ReduxProps = StateProps & DispatchProps
