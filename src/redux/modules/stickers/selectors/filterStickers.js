// @flow
import { createSelector } from 'reselect'

const getText = (state) => state.stickers.filterBy.toUpperCase()
const getStickets = (state) => state.stickers.list

export default createSelector(
  [getText, getStickets],
  (text, stickers) => stickers.filter((sticker) => sticker.tags.toUpperCase().includes(text)),
)
