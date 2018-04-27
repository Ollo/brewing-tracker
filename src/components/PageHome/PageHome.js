import React, { Component } from 'react'
import PageHeader from 'components/PageHeader'
import fetch from 'isomorphic-fetch'

class PageHome extends Component {

  componentWillMount () {
    fetch('http://localhost:3000/recipes')
      .then(res => res.json())
      .then(recipes => console.log(recipes))
  }
  render () {
    return (
      <section className='page'>
        <PageHeader title='Home' />
      </section>
    )
  }

}

export default PageHome
