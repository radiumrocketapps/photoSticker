// @flow
import * as ACTIONS from './actions/const'



type Action = {
  type: string,
  payload: any,
}

const initialState = {
  searchText: '',
}
export type StickerSearchState = {
  searchText: string

}

const reducer = (state: StickerSearchState = initialState, action: Action) => {
  switch (action.type) {
    case ACTIONS.TEXT_SEARCH:
      return {
        ...state,
        searchText: action.payload
      }
    default: {
      return state
    }
  }
}

export default reducer
