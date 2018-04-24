import firebase from 'state/firebase'
import { replace } from 'redux-json-router'
import { authUserSave } from 'state/auth/actions'

const authMiddleware = (store) => (next) => (action) => {
  const state = store.getState()
  const user = firebase.auth().getCurrentUser

  if (!user && !state.auth.user.uid) {
    store.dispatch(replace('/login'))
    return next(action)
  } else if (user && !state.auth.user.uid) {
    store.dispatch(authUserSave(user))
    return next(action)
  } else {
    store.dispatch(replace('/'))
    return next(action)
  }
}

export default authMiddleware
