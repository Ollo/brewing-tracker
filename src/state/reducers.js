import {combineReducers} from 'redux'
import {routerReducer} from 'redux-json-router'
import appReducer from 'state/app/reducer'
import authReducer from 'state/auth/reducer'

export const buildRootReducer = (asyncReducers) => combineReducers({
  ...asyncReducers,
  'router': routerReducer,
  'app': appReducer,
  'auth': authReducer
})

export default buildRootReducer
