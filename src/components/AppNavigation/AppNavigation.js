import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BeerIcon from '../BeerIcon'
import { Link } from 'redux-json-router'

import './AppNavigation.scss'

class AppNavigation extends Component {

  render () {

    const { loggedIn, logout } = this.props
    return (
      <nav role='navigation' className='App-Header'>
        <figure className='App-Logo'>
          <BeerIcon />
          <h1>Brewing Tracker</h1>
        </figure>
        <ul className='App-Navigation'>
          { loggedIn
            ? <li className='App-Navigation--link'>
              <Link to='/login' onClick={ logout }>Logout</Link>
            </li>
            : null
          }
        </ul>
      </nav>
    )

  }

}

AppNavigation.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

export default AppNavigation
