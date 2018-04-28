import fetch from 'isomorphic-fetch'
import config from '../../../project.config.js'

const headers = {
  'Content-Type': 'application/json'
}

const api = {
  get (url) {
    return fetch(config.api + url, {
      headers,
      method: 'GET'
    })
      .then(res => res.json())
  },
  post (url, params) {
    return fetch(config.api + url, {
      body: JSON.stringify(params),
      headers,
      method: 'POST'
    })
      .then(res => res.json())
  },
  put (url, params) {
    return fetch(config.api + url, {
      body: JSON.stringify(params),
      headers,
      method: 'PUT'
    })
      .then(res => res.json())
  },
  patch (url, params) {
    return fetch(config.api + url, {
      body: JSON.stringify(params),
      headers,
      method: 'PATCH'
    })
      .then(res => res.json())
  },
  delete (url, params) {
    return fetch(config.api + url, {
      body: JSON.stringify(params),
      headers,
      method: 'DELETE'
    })
      .then(res => res.json())
  }
}

export default api
