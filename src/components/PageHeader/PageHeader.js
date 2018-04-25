import React from 'react'
import PropTypes from 'prop-types'

const PageHeader = ({ title }) => (
  <header>
    <h2>{ title }</h2>
  </header>
)

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageHeader
