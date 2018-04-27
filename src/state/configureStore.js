import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'redux-json-router'
import { buildRootReducer } from './reducers'

export default (initialState = {}, history) => {
  const reduxLogger = createLogger({
    'collapsed': true,
    'timestamp': false
  })

  const middleWare = [
    thunk,
    routerMiddleware(history),
    reduxLogger
  ]

  const enhancers = []

  const store = createStore(
    buildRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleWare),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
