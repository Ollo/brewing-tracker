import { combineReducers } from 'redux'
import { routerReducer } from 'redux-json-router'

import appReducer from 'state/app/reducer'
import recipeReducer from 'state/recipes/reducer'

export const buildRootReducer = (asyncReducers) => combineReducers({
  ...asyncReducers,
  'router': routerReducer,
  'app': appReducer,
  'recipes': recipeReducer
})

export default buildRootReducer
