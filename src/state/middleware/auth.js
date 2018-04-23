import firebase from 'state/firebase'
import { push } from 'redux-json-router'
import { authUserSave } from 'state/auth/actions'

const authMiddleware = (store) => (next) => (action) => {

  const state = store.getState()
  const user = firebase.auth().getCurrentUser

  if (!user && !state.auth.user) {

    store.dispatch(push('/login'))
    next(action)

  } else if (user && !state.auth.user) {

    store.dispatch(authUserSave(user))
    store.dispatch(push('/'))
    next(action)

  } else {

    store.dispatch(push('/'))
    next(action)

  }
  next(action)

}

export default authMiddleware
