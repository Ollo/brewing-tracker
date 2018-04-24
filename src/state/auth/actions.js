
export const AUTHED_USER_FETCHING = 'AUTHED_USER_FETCHING'
export const AUTHED_USER_SAVE = 'AUTHED_USER_SAVE'
export const AUTHED_USER_ERROR = 'AUTHED_USER_ERROR'
export const AUTHED_USER_DELETE = 'AUTHED_USER_DELETE'

export const authUserSave = (user) => (
  {
    'type': AUTHED_USER_SAVE,
    'payload': {
      'user': {
        'id': user.uid,
        'email': user.email
      }
    }
  }
)

export const authUserError = (e) => (
  {
    'type': AUTHED_USER_ERROR,
    'payload': {
      'error': e
    }
  }
)

export const authUserFetching = () => (
  {'type': AUTHED_USER_FETCHING}
)

export const authUserDelete = () => (
  {'type': AUTHED_USER_DELETE}
)

export const authUser = (email, password) => (dispatch) => {
  // // api.auth().signInWithEmailAndPassword(email, password)
  //   .then((user) => dispatch(authUserSave(user)))
  //   .catch((e) => dispatch(authUserError(e)))
}

export const userLogout = () => (dispatch) => {
  // api.auth().signOut()
  //   .then(() => {
  //     dispatch(authUserDelete())
  //     console.warn('User Logged Out Successfully.')
  //   })
  //   .catch((e) => {
  //     dispatch(authUserError(e))
  //     console.error('There was an error logging out', e)
  //   })
}
