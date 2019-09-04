// @flow
import findIndex from 'lodash/findIndex'
import uniqBy from 'lodash/uniqBy'
import * as ACTIONS from './actions/const'
import stickersMock from './mocks'

type Coords = {
  x: number,
  y: number,
}

export type Sticker = {
  id: number,
  name: string,
  tags: string,
  source: string | number,
  position: Coords,
  ratio: number,
  baseScale: number,
  rotate: string,
  instanceNumber: number,
}

export type StickersState = {
  list: Object[],
  used: Sticker[],
  filterBy: string,
  isFetching: boolean,
  selectedSticker: {
    id: number,
    instanceNumber: number
  }

}

type Action = {
  type: string,
  payload: any,
}

const initialState = {
  list: stickersMock,
  used: [],
  filterBy: '',
  isFetching: false,
  selectedSticker: {
    id: -1,
    instanceNumber: 0,
  },
}

const reducer = (state: StickersState = initialState, action: Action) => {
  switch (action.type) {
    case ACTIONS.FILTER_STICKER:
      return {
        ...state,
        filterBy: action.payload,
      }
    case `${ACTIONS.GET_STICKERS}_PENDING`:
      return {
        ...state,
        isFetching: true,
      }
    case `${ACTIONS.GET_STICKERS}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        list: uniqBy([...state.list, ...action.payload.data], 'name'),
      }
    case `${ACTIONS.GET_STICKERS}_REJECTED`:
      return {
        ...state,
        isFetching: false,
      }
    case ACTIONS.CLEAN_USED_STICKERS:
      return {
        ...state,
        used: initialState.used,
      }
    case ACTIONS.REMOVE_STICKER: {
      const { id, instanceNumber } = action.payload
      return {
        ...state,
        // $FlowFixMe
        used: state.used.filter(
          (s) => s.id !== id || s.instanceNumber !== instanceNumber,
        ),
        selectedSticker: initialState.selectedSticker,
      }
    }
    case ACTIONS.SELECT_STICKER: {
      return {
        ...state,
        selectedSticker: {
          ...action.payload,
        },
      }
    }
    case ACTIONS.UNSELECT_STICKER: {
      return {
        ...state,
        selectedSticker: initialState.selectedSticker,
      }
    }
    case ACTIONS.ADD_STICKER: {
      const existingSticker = state.used.filter((s) => s.id === action.payload.id)
      const newSticker = {
        ratio: 1,
        baseScale: 1,
        rotate: '0deg',
        ...action.payload,
        instanceNumber: existingSticker.length,
      }
      const used = [...state.used]
      used[used.length] = newSticker

      return {
        ...state,
        used,
      }
    }
    case ACTIONS.UPDATE_STICKER_POSITION: {
      const {
        id,
        position,
        baseScale,
        rotate,
        instanceNumber,
      } = action.payload

      const stickerIndex = findIndex(state.used, { id, instanceNumber })
      const newSticker = {
        ...state.used[stickerIndex],
        position,
        baseScale,
        rotate,
      }
      const used = [...state.used]
      used[stickerIndex] = newSticker
      return {
        ...state,
        used,
        selectedSticker: {
          id,
          instanceNumber,
        },
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
