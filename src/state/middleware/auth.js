import firebase from 'state/firebase'
import { push } from 'redux-json-router'
import { authUserSave } from 'state/auth/actions'

const authMiddleware = (store) => (next) => (action) => {
  const state = store.getState()
  const user = firebase.auth().getCurrentUser

  if (!user && !state.auth.user.uid) {
    store.dispatch(push('/login'))
    return next(action)
  } else if (user && !state.auth.user.uid) {
    store.dispatch(authUserSave(user))
    store.dispath(push('/'))
    return next(action)
  } else {
    return next(action)
  }
}

export default authMiddleware
