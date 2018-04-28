import React from 'react'
import PropTypes from 'prop-types'

const PageHeader = ({ title, className }) => (
  <header className={ className }>
    <h2>{ title }</h2>
  </header>
)

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default PageHeader
