import { combineReducers } from 'redux'
import { routerReducer } from 'redux-json-router'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import appReducer from 'state/app/reducer'

export const buildRootReducer = (asyncReducers) => combineReducers({
  ...asyncReducers,
  'firebase': firebaseReducer,
  'firestore': firestoreReducer,
  'router': routerReducer,
  'app': appReducer
})

export default buildRootReducer
