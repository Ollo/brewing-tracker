import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadRecipes } from 'state/recipes/actions'
import { selectRecipes } from 'state/recipes/selectors'
import { selectLoadingApp } from 'state/app/selectors'
import PageHeader from 'components/PageHeader'

class PageHome extends Component {

  componentDidMount () {
    this.props.loadRecipes()
  }

  renderRecipes = (recipes) => recipes.map((recipe, i) => (
    <div key={ `${recipe.id}` }>
      <h3>{ recipe.name }</h3>
      <p>{ recipe.id }</p>
    </div>
  ))

  componentWillReceiveProps (nextProps) {
    if (nextProps.recipes !== this.props.recipes) {
      this.renderRecipes(nextProps.recipes)
    }
  }

  render () {
    const { isLoading, recipes } = this.props
    return (
      <section className='page'>
        { isLoading
          ? <p>Loading...</p>
          : <div>
            <PageHeader title='Home' />
            { this.renderRecipes(recipes) }
          </div>
        }
      </section>
    )
  }

}

PageHome.propTypes = {
  loadRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.array,
  isLoading: PropTypes.bool.isRequired
}

const mapDispatch = {
  loadRecipes
}

const mapState = (state) => ({
  isLoading: selectLoadingApp(state),
  recipes: selectRecipes(state)
})

export default connect(mapState, mapDispatch)(PageHome)
