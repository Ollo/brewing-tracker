import React from 'react'
import PropTypes from 'prop-types'

import './Card.scss'

const Card = ({ children, className }) => (
  <article className={ className }>
    <div className='card'>{ children }</div>
  </article>
)

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Card
