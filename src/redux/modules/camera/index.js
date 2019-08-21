// @flow
import * as ACTIONS from './actions/const'

export type CameraState = {
  flashEnabled: boolean,
  isBackCamera: boolean,
  picture: ?string,
  customizedPicture: ?string,
}

type Action = {
  type: string,
  payload: any,
}

const initialState = {
  flashEnabled: false,
  isBackCamera: false,
  picture: undefined,
  customizedPicture: undefined,
}

const reducer = (state: CameraState = initialState, action: Action) => {
  switch (action.type) {
    case ACTIONS.SAVE_CUSTOMIZED_PICTURE:
      return {
        ...state,
        customizedPicture: action.payload,
      }
    case ACTIONS.SAVE_PICTURE:
      return {
        ...state,
        picture: action.payload,
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
