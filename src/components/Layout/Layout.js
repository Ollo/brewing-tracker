import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppNavigation from 'components/AppNavigation'
import { userLogout } from 'state/auth/actions'
import { loggedInSelector } from 'state/auth/selectors'

class Layout extends Component {

  render () {

    const { userLogout, loggedIn } = this.props
    return (
      <div className='container'>
        <AppNavigation loggedIn={ loggedIn } logout={ userLogout }/>
        { this.props.children }
      </div>
    )

  }

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  userLogout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool
}

const mapDispatchToProps = {
  userLogout
}

const mapStateToProps = (state) => ({
  loggedIn: loggedInSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
