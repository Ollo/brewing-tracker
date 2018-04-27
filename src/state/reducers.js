import { combineReducers } from 'redux'
import { routerReducer } from 'redux-json-router'

import appReducer from 'state/app/reducer'

export const buildRootReducer = (asyncReducers) => combineReducers({
  ...asyncReducers,
  'router': routerReducer,
  'app': appReducer
})

export default buildRootReducer
