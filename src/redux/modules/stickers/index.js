// @flow
import * as ACTIONS from './actions/const'
import stickersMock from './mocks'

export type Sticker = {
  id: string,
  name: string,
  image: string,
  tags: string,
  image: string,
}

export type StickersState = {
  stickers: Sticker[],
  selectedIndex: ?number
}

type Action = {
  type: string,
  payload: any,
}

const initialState = {
  stickers: stickersMock,
  selectedIndex: undefined,
}

const reducer = (state: StickersState = initialState, action: Action) => {
  switch (action.type) {
    case ACTIONS.SELECT_STICKER:
      return {
        ...state,
        selectedIndex: action.payload,
      }
    default: {
      return state
    }
  }
}

export default reducer
