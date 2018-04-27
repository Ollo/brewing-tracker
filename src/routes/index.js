
// Route Page Components
import PageHome from 'components/PageHome'
import PageLogin from 'components/PageLogin'
import PageAdd from 'components/PageAdd'

export default [
  {
    'path': '/',
    'load': () => {
      return Promise.resolve(PageHome)
    }
  },
  {
    'path': '/login',
    'load': () => Promise.resolve(PageLogin)
  },
  {
    'path': '/add',
    'load': () => Promise.resolve(PageAdd)
  }
]
