import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import BeerIcon from '../BeerIcon'
import { Link } from 'redux-json-router'

import './AppNavigation.scss'

class AppNavigation extends PureComponent {
  render () {
    const { authUser, logout } = this.props
    console.log(authUser)
    return (
      <nav role='navigation' className='App-Header'>
        <figure className='App-Logo'>
          <BeerIcon />
          <h1>Brewing Tracker</h1>
        </figure>
        <ul className='App-Navigation'>
          { !authUser
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
  authUser: PropTypes.bool,
  logout: PropTypes.func
}

export default AppNavigation
