import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import AppNavigation from 'components/AppNavigation'

class Layout extends Component {

  render () {
    const { loggedIn, firebase } = this.props
    return (
      <div>
        <AppNavigation loggedIn={ loggedIn } logout={ firebase.logout } />
        <main className='container'>
          { this.props.children }
        </main>
      </div>
    )
  }

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  firebase: PropTypes.shape({
    logout: PropTypes.func.isRequired
  }),
  loggedIn: PropTypes.bool
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
})

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(Layout)
