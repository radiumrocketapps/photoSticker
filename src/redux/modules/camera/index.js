// @flow
import get from 'lodash/get'
import * as ACTIONS from './actions/const'

export type CameraState = {
  flashEnabled: boolean,
  isBackCamera: boolean,
  picture: ?string,
  finalSaved: ?string,
  isSaving: boolean,
  finalImage: ?string,
  error: ?Object,
  mirrorView: boolean,
}

type Action = {
  type: string,
  payload: any,
  meta: any,
}

const initialState = {
  flashEnabled: false,
  isBackCamera: false,
  picture: undefined,
  isSaving: false,
  finalSaved: undefined,
  finalImage: undefined,
  mirrorView: true,
  error: undefined,
}

const reducer = (state: CameraState = initialState, action: Action) => {
  switch (action.type) {
    case ACTIONS.SAVE_PICTURE:
      return {
        ...state,
        picture: action.payload.source,
        mirrorView: action.payload.options.mirrorView,
      }

    case `${ACTIONS.SAVE_TO_GALLERY}_PENDING`:
      return {
        ...state,
        isSaving: true,
      }

    case `${ACTIONS.SAVE_TO_GALLERY}_FULFILLED`:
      return {
        ...state,
        isSaving: false,
        finalImage: action.payload,
        finalSaved: get(action, 'meta.finalImage', false),
      }

    case `${ACTIONS.SAVE_TO_GALLERY}_FAILED`:
      return {
        ...state,
        isSaving: false,
        error: action.payload,
      }

    case ACTIONS.TOGGLE_FLASH:
      return {
        ...state,
        flashEnabled: !state.flashEnabled,
      }
    case ACTIONS.CHANGE_CAMERA:
      return {
        ...state,
        isBackCamera: !state.isBackCamera,
      }
    default: {
      return state
    }
  }
}

export default reducer
