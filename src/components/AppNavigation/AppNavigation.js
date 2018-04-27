import React, { PureComponent } from 'react'
import BeerIcon from '../BeerIcon'
import { Link } from 'redux-json-router'

import './AppNavigation.scss'

class AppNavigation extends PureComponent {

  render () {
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
        </div>
      </nav>
    )
  }

}

export default AppNavigation
