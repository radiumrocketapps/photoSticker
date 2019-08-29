// @flow
import { connect } from 'react-redux'
import { searchSticker } from 'src/redux/modules/stickerSearch/actions'
import type { StickerSearchState } from '../../../../redux/modules/stickerSearch/'
import SearchSticker from './SearchSticker'

type OwnProps = {
  id: number,
  style: Object | Array<Object>,
  instanceNumber: number,
};

type DispatchProps = {
  searchSticker: typeof searchSticker,
}

const mapStateToProps = (state: StickerSearchState) => {
  return {
    stickerSearch: state.searchText,
  }
}

const mapDispatchToProps = {
  searchSticker,
}

export default connect(null, mapDispatchToProps)(SearchSticker)
export type ReduxProps = OwnProps & DispatchProps
