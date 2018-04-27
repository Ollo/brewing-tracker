import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AppNavigation from 'components/AppNavigation'

import './Layout.scss'

class Layout extends Component {

  render () {
    return (
      <div>
        <AppNavigation />
        <main className='container'>
          { this.props.children }
        </main>
      </div>
    )
  }

}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
