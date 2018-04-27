import fetch from 'isomorphic-fetch'
import { appLoading } from 'state/app/actions'

export const SAVE_RECIPE = 'SAVE_RECIPE'

export const saveRecipe = ({ recipe }) => (
  {
    type: SAVE_RECIPE,
    payload: {
      id: recipe.id,
      name: recipe.name
    }
  }
)

export const loadRecipes = () => (dispatch) => {
  dispatch(appLoading(true))
  return fetch('http://localhost:3000/recipes')
    .then(res => res.json())
    .then(recipes => recipes.map(recipe => {
      dispatch(saveRecipe({recipe}))
      dispatch(appLoading(false))
    }))
}
