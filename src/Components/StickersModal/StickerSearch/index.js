// @flow
import { connect } from 'react-redux'
import { filterSticker } from 'src/redux/modules/stickers/actions'
import SearchSticker from './SearchSticker'

type OwnProps = {
  id: number,
  style: Object | Array<Object>,
  instanceNumber: number,
};

type DispatchProps = {
  filterSticker: typeof filterSticker,
}

const mapDispatchToProps = {
  filterSticker,
}

export default connect(null, mapDispatchToProps)(SearchSticker)
export type ReduxProps = OwnProps & DispatchProps
