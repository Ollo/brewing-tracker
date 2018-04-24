import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'redux-json-router'
import AppNavigation from 'components/AppNavigation'
import { userLogout } from 'state/auth/actions'
import { loggedInSelector } from 'state/auth/selectors'

class Layout extends Component {

  // authGaurd = (loggedIn) => {
  //   if (loggedIn) {
  //     return
  //   }
  //   this.props.push
  // }

  componentWillReceiveProps () {
    if (!this.props.loggedIn) {
      this.props.push('/login')
    }
  }
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
  push: PropTypes.func,
  loggedIn: PropTypes.bool
}

const mapDispatchToProps = {
  userLogout,
  push
}

const mapStateToProps = (state) => ({
  loggedIn: loggedInSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
