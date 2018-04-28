import api from 'utils/api'
import { generateId } from 'utils'
import { appLoading } from 'state/app/actions'

export const LOAD_RECIPES = 'SAVE_RECIPES'
export const SAVE_RECIPE = 'SAVE_RECIPE'

export const loadRecipes = ({ recipes }) => (
  {
    type: LOAD_RECIPES,
    payload: recipes
  }
)

export const saveRecipe = ({ recipe }) => (
  {
    type: SAVE_RECIPE,
    payload: recipe
  }
)
export const loadAllRecipes = () => (dispatch) => {
  dispatch(appLoading(true))
  return api.get('recipes', null)
    .then(recipes => dispatch(loadRecipes({recipes})))
    .then(() => dispatch(appLoading(false)))
}

export const createRecipe = ({ name, description }) => (dispatch) => {
  dispatch(appLoading(true))
  return api.post('recipes', { name, description, id: generateId() })
    .then(res => {
      dispatch(saveRecipe(res))
      dispatch(appLoading(false))
      return Promise.resolve(res)
    })
}

export const deleteRecipe = (id) => () => {
  return api.delete(`recipe/${id}`)
    .then(resp => Promise.resolve(resp))
}
