import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { replace } from 'redux-json-router'
import AppNavigation from 'components/AppNavigation'
import { loggedInSelector } from 'state/auth/selectors'

class Layout extends Component {
  componentWillReceiveProps () {
    if (!this.props.loggedIn) {
      replace('/login')
    }
  }
  render () {
    return (
      <div className='container'>
        <AppNavigation loggedIn={ this.props.loggedIn } />
        { this.props.children }
      </div>
    )
  }
}

Layout.propTypes = {
  loggedIn: PropTypes.bool,
  replace: PropTypes.func,
  children: PropTypes.node.isRequired
}

const mapDispatchToProps = {
  replace
}

const mapStateToProps = (state) => ({
  loggedIn: loggedInSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
