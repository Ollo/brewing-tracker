import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BeerIcon from '../BeerIcon'
import { Link } from 'redux-json-router'

import './AppNavigation.scss'

class AppNavigation extends Component {

  render () {
    const { logout, loggedIn } = this.props
    return (
      <nav role='navigation' className='App-Header'>
        <div className='container'>
          <figure className='App-Logo'>
            <BeerIcon className='App-Logo--icon' />
            <h1 className='App-Logo--title'>Brewing Tracker</h1>
          </figure>

          <ul className='App-Navigation'>
            <li className='App-Navigation--link'>
              <Link to='/'>Home</Link>
            </li>
            <li className='App-Navigation--link'>
              <Link to='/add'>Add Recipe</Link>
            </li>
          </ul>

          { loggedIn
            ? <button className='App-Logout float-right' onClick={ logout }>Logout</button>
            : null
          }

        </div>
      </nav>
    )
  }

}

AppNavigation.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

export default AppNavigation
