// @flow
import { connect } from 'react-redux'
import { updateStickerPosition } from 'src/redux/modules/stickers/actions'
import Sticker from './Sticker'

type DispatchProps = {
  updateStickerPosition: Function,
}

const mapDispatchToProps = {
  updateStickerPosition,
}

export default connect(null, mapDispatchToProps)(Sticker)
export type ReduxProps = DispatchProps
