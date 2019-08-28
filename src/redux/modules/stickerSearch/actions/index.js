// @flow
import * as ACTIONS from './const'


export const searchSticker = (searchText: string) => ({
  type: ACTIONS.TEXT_SEARCH,
  payload: searchText,
})