// @flow
export type CameraState = {}

type Action = {
  type: string,
  payload: any,
}

const initialState = {
  test: true,
}

const reducer = (state: CameraState = initialState, action: Action) => {
  switch (action) {
    default: {
      return state
    }
  }
}

export default reducer
