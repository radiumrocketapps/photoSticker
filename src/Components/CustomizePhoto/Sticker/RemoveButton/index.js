// @flow
import { connect } from 'react-redux'
import { removeSticker } from 'src/redux/modules/stickers/actions'
import RemoveButton from './RemoveButton'

type OwnProps = {
  id: number,
  style: Object | Array<Object>,
  instanceNumber: number,
};

type DispatchProps = {
  removeSticker: typeof removeSticker,
}

const mapDispatchToProps = {
  removeSticker,
}

export default connect(null, mapDispatchToProps)(RemoveButton)
export type ReduxProps = OwnProps & DispatchProps
