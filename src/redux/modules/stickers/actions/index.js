// @flow
import * as ACTIONS from './const'
import type { Sticker } from '..'

export const addSticker = (sticker: Sticker) => ({
  type: ACTIONS.ADD_STICKER,
  payload: sticker,
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
