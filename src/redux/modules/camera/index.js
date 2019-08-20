// @flow
import * as ACTIONS from './actions/const'

export type CameraState = {
  flashEnabled: boolean,
  isBackCamera: boolean,
}

type Action = {
  type: string,
  payload: any,
}

const initialState = {
  flashEnabled: false,
  isBackCamera: false,
}

const reducer = (state: CameraState = initialState, action: Action) => {
  switch (action.type) {
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
