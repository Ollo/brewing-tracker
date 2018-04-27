import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppNavigation from 'components/AppNavigation'

class Layout extends Component {

  render () {
    const { loggedIn } = this.props
    return (
      <div>
        <AppNavigation loggedIn={ loggedIn } logout={ () => console.log('Logout') } />
        <main className='container'>
          { this.props.children }
        </main>
      </div>
    )
  }

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  loggedIn: PropTypes.bool
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
