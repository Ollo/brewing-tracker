import { LOAD_RECIPES, SAVE_RECIPE } from './actions'

const initialState = {
  recipes: []
}

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECIPES:
      return {
        ...state,
        recipes: { ...action.payload }
      }
    case SAVE_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, { ...action.payload }]
      }
    default:
      return state
  }
}

export default recipeReducer
