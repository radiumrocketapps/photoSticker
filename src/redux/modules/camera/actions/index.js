// @flow
import { saveToCameraRoll } from 'src/helpers/storage'
import * as ACTIONS from './const'

export const cleanCamera = () => ({
  type: ACTIONS.CLEAN_CAMERA,
})

export const toggleFlash = () => ({
  type: ACTIONS.TOGGLE_FLASH,
})

export const changeCamera = () => ({
  type: ACTIONS.CHANGE_CAMERA,
})

export const savePicture = (source: string, options: { mirrorView: boolean } = {}) => ({
  type: ACTIONS.SAVE_PICTURE,
  payload: { source, options },
})

export const saveCustomizedPicture = (source: string) => ({
  type: ACTIONS.SAVE_CUSTOMIZED_PICTURE,
  payload: source,
})

export const saveToGallery = (image: string, finalImage: boolean = false) => ({
  type: ACTIONS.SAVE_TO_GALLERY,
  payload: saveToCameraRoll(image),
  meta: {
    finalImage,
  },
})
