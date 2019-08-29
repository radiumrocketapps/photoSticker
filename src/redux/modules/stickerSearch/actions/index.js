// @flow
import * as ACTIONS from './const'
import { ThunkDispatch } from 'redux-thunk';

export const searchSticker = (searchText: string) => ({
  type: ACTIONS.TEXT_SEARCH_PENDING,
  payload: searchText,
})