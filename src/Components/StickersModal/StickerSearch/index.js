// @flow
import { connect } from 'react-redux'
import { filterSticker, getStickers } from 'src/redux/modules/stickers/actions'
import SearchSticker from './SearchSticker'

type DispatchProps = {
  filterSticker: typeof filterSticker,
  getStickers: typeof getStickers,
}

const mapDispatchToProps = {
  filterSticker,
  getStickers,
}

export default connect(null, mapDispatchToProps)(SearchSticker)
export type ReduxProps = DispatchProps
