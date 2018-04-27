import fetch from 'isomorphic-fetch'
import { appLoading } from 'state/app/actions'

export const SAVE_RECIPES = 'SAVE_RECIPES'

export const saveRecipes = ({ recipes }) => (
  {
    type: SAVE_RECIPES,
    payload: recipes
  }
)

export const loadRecipes = () => (dispatch) => {
  dispatch(appLoading(true))
  return fetch('http://localhost:3000/recipes')
    .then(res => res.json())
    .then(recipes => dispatch(saveRecipes({recipes})))
    .then(() => dispatch(appLoading(false)))
}

