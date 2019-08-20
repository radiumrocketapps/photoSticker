// @flow
import * as ACTIONS from './const'

export const toggleFlash = () => ({
  type: ACTIONS.TOGGLE_FLASH,
})

export const changeCamera = () => ({
  type: ACTIONS.CHANGE_CAMERA,
})

export const savePicture = (source: string) => ({
  type: ACTIONS.SAVE_PICTURE,
  payload: source,
})
