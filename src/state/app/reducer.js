import {APP_LOADING} from './actions'

const initialState = {
  'loading': false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case APP_LOADING:
      return {
        ...state,
        'loading': action.payload.loading
      }
    default:
      return state

  }
}

export default appReducer
