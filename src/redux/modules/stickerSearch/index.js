// @flow
import * as ACTIONS from './actions/const'

type Action = {
  type: string,
  payload: any,
}

const initialState = {
  searchText: '',
  searching: false
}
export type StickerSearchState = {
  searchText: string,
  searching: boolean

}

const reducer = (state: StickerSearchState = initialState, action: Action) => {
  switch (action.type) {
    case ACTIONS.TEXT_SEARCH_PENDING:
      return {
        ...state,
        searchText: action.payload,
        searching: true,
      }

    default: {
      return state
    }
  }
}

export default reducer
