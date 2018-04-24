
export default [
  {
    'path': '/',
    'load': () => Promise.resolve(require('../components/PageHome').default)
  },
  {
    'path': '/login',
    'load': () => Promise.resolve(require('../components/PageLogin').default)
  }
]
