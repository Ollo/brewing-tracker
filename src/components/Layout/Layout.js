import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppNavigation from 'components/AppNavigation'
import { loggedInSelector } from 'state/auth/selectors'

class Layout extends Component {
	render () {
		return (
			<div className='container'>
				<AppNavigation loggedIn={ this.props.loggedIn } />
				{ this.props.children }
			</div>
		) 
	}
}

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
	loggedIn: loggedInSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)