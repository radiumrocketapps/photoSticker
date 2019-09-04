// @flow
import { createSelector } from 'reselect'
import type { RootReducerState } from 'src/redux/modules'

const getText = (state: RootReducerState): string => state.stickers.filterBy.toUpperCase()
const getStickets = (state: RootReducerState) => state.stickers.list

export default createSelector(
  [getText, getStickets],
  (text, stickers) => stickers.filter((sticker) => sticker.tags.toUpperCase().includes(text)),
)
