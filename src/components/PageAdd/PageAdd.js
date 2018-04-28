import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PageHeader from 'components/PageHeader'
import { connect } from 'react-redux'
import { createRecipe } from 'state/recipes/actions'
import { push } from 'redux-json-router'

class PageAdd extends PureComponent {

  state = {
    name: '',
    description: ''
  }

  handleSubmit = (e) => {
    const { createRecipe, push } = this.props
    const { recipeTitle, recipeDescription } = e.target

    e.preventDefault()

    return createRecipe({ name: recipeTitle.value, description: recipeDescription.value })
      .then(data => push('/'))
  }

  render () {
    return (
      <section className='page'>
        <PageHeader title='Add Recipe' />
        <form className='pure-form pure-form-stacked' onSubmit={ this.handleSubmit }>
          <label>Title</label>
          <input
            type='text'
            id='recipeTitle'
            name='recipeTitle' />

          <label>Description</label>
          <textarea id='recipeDescription' name='recipeDescription' />

          <button type='submit' className='pure-button'>Save</button>
        </form>
      </section>
    )
  }

}

PageAdd.propTypes = {
  createRecipe: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired
}

export default connect(null, { createRecipe, push })(PageAdd)
