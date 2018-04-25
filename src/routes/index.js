import { connectedReduxRedirect } from 'redux-auth-wrapper/history3/redirect'
import { replace } from 'redux-json-router'

// Route Page Components
import PageHome from 'components/PageHome'
import PageLogin from 'components/PageLogin'
import PageAdd from 'components/PageAdd'

const userIsAuthenticated = connectedReduxRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state.firebase.auth.uid !== null,
  wrapperDisplayName: 'UserIsAuthenticated',
  redirectAction: replace
})

export default [
  {
    'path': '/',
    'load': () => {
      return Promise.resolve(userIsAuthenticated(PageHome))
    }
  },
  {
    'path': '/login',
    'load': () => Promise.resolve(PageLogin)
  },
  {
    'path': '/add',
    'load': () => Promise.resolve(userIsAuthenticated(PageAdd))
  }
]
