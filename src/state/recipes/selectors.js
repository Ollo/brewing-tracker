import _values from 'lodash/values'

export const selectRecipes = (state) => _values(state.recipes.recipes)