import React from 'react'
import BeerIcon from '../BeerIcon'
import { Link } from 'redux-json-router'

import './AppNavigation.scss'

const AppNavigation = ({ authUser, logout }) => {
	return (
		<nav role='navigation' className='App-Header'>
			<figure className='App-Logo'>
				<BeerIcon />
				<h1>Brewing Tracker</h1>
			</figure>
			<ul className='App-Navigation'> 
				{ authUser 
					? <li className='App-Navigation--link'>
						<Link to='/'>Home</Link>
					</li>
					: null
				}
				{ authUser 
					? <li className='App-Navigation--link'>
						<Link onClick={ userLogout }>Logout</Link>
					</li>
					: null
				}
			</ul>
		</nav>
	)
}

export default AppNavigation