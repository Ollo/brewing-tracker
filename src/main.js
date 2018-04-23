import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import { createBrowserHistory, startListener, Router } from 'redux-json-router'
import configureStore from 'state/configureStore'
import Layout from 'components/Layout'
import routes from 'routes'

const history = createBrowserHistory();
const store = configureStore(window.__INITIAL_STATE__, history)

startListener(history, store);

window.__app_root = document.getElementById('app')

let render = () => {  
  ReactDom.render(
    <Provider store={ store } >
      <Layout>
        <Router routes={ routes } />
      </Layout>
    </Provider>,
    window.__app_root
  )
}

// set up hotmodule replacement 
if (module.hot) {
  module.hot.accept()
}

// Boom
render()