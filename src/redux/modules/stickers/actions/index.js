// @flow
import * as ACTIONS from './const'
import type { Sticker } from '..'

export const addSticker = (sticker: Sticker) => ({
  type: ACTIONS.ADD_STICKER,
  payload: sticker,
})

export const cleanUsedStickers = () => ({
  type: ACTIONS.CLEAN_USED_STICKERS,
})

export const unselectSticker = () => ({
  type: ACTIONS.UNSELECT_STICKER,
})

export const updateStickerPosition = (params: Object) => ({
  type: ACTIONS.UPDATE_STICKER_POSITION,
  payload: params,
})

export const selectSticker = (
  id: number,
  instanceNumber: number,
) => ({
  type: ACTIONS.SELECT_STICKER,
  payload: {
    id,
    instanceNumber,
  },
})

export const removeSticker = (id: number, instanceNumber: number) => ({
  type: ACTIONS.REMOVE_STICKER,
  payload: {
    id,
    instanceNumber,
  },
})

export const filterSticker = (text: string) => ({
  type: ACTIONS.FILTER_STICKER,
  payload: text,
})
