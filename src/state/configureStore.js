import { applyMiddleware, compose, createStore } from 'redux'

import firebase from 'firebase'
import 'firebase/firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'

import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'redux-json-router'
import { buildRootReducer } from './reducers'

const firebaseConfig = {
  apiKey: 'AIzaSyB-fZPvOJWLaHlrvqYBY8WomCdM2eWZjLw',
  authDomain: 'brew-tracker-822bf.firebaseapp.com',
  databaseURL: 'https://brew-tracker-822bf.firebaseio.com',
  projectId: 'brew-tracker-822bf',
  storageBucket: 'brew-tracker-822bf.appspot.com',
  messagingSenderId: '612077944225'
}

const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// initialize firebase instance
firebase.initializeApp(firebaseConfig)

// initialize Firestore
const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots: true })

// Add Firebase and Firestore to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, config),
  reduxFirestore(firebase)
)(createStore)

export default (initialState = {}, history) => {
  const reduxLogger = createLogger({
    'collapsed': true,
    'timestamp': false
  })

  const middleWare = [
    reduxLogger,
    thunk.withExtraArgument(getFirebase),
    routerMiddleware(history)
  ]

  const enhancers = []

  const store = createStoreWithFirebase(
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
