import React, { PureComponent } from 'react'
import PageHeader from 'components/PageHeader'

class PageAdd extends PureComponent {

  render () {
    return (
      <section className='page'>
        <PageHeader title='Add Recipe' />
        <form className='pure-form pure-form-stacked'>
          <label>Title</label>
          <input type='text' id='recipeTitle' name='recipeTitle' />

          <label>Description</label>
          <textarea id='recipeDescription' name='recipeDescription' />

          <button type='submit' className='pure-button'>Save</button>
        </form>
      </section>
    )
  }

}

export default PageAdd
