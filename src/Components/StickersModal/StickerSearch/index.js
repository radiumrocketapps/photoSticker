// @flow
import { connect } from 'react-redux'
import { filterSticker, getStickers } from 'src/redux/modules/stickers/actions'
import SearchSticker from './SearchSticker'

type OwnProps = {
  id: number,
  style: Object | Array<Object>,
  instanceNumber: number,
};

type DispatchProps = {
  filterSticker: typeof filterSticker,
  getStickers: typeof getStickers,
}

const mapDispatchToProps = {
  filterSticker,
  getStickers,
}

export default connect(null, mapDispatchToProps)(SearchSticker)
export type ReduxProps = OwnProps & DispatchProps
