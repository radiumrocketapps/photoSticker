// @flow
import { connect } from 'react-redux'
import {
  updateStickerPosition,
} from 'src/redux/modules/stickers/actions'
import type { StickerUsed } from 'src/redux/modules/stickers'
import Sticker from './Sticker'

type OwnProps = StickerUsed

type DispatchProps = {
  updateStickerPosition: typeof updateStickerPosition,
}

const mapDispatchToProps = {
  updateStickerPosition,
}

export default connect(null, mapDispatchToProps)(Sticker)
export type ReduxProps = OwnProps & DispatchProps
