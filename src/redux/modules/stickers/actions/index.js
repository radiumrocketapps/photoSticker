// @flow
import * as ACTIONS from './const'

// eslint-disable-next-line import/prefer-default-export
export const savePicture = (index: number) => ({
  type: ACTIONS.SELECT_STICKER,
  payload: index,
})
