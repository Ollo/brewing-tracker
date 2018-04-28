import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'redux-json-router'

import { loadAllRecipes } from 'state/recipes/actions'
import { selectRecipes } from 'state/recipes/selectors'
import { selectLoadingApp } from 'state/app/selectors'
import PageHeader from 'components/PageHeader'
import Card from 'components/Card'

class PageHome extends Component {

  componentDidMount () {
    this.props.loadAllRecipes()
  }

  renderRecipes = (recipes) => {
    if (recipes.length <= 0) {
      return (
        <Card className='pure-u-5-5'>
          <h3>No Recipes Created Yet.</h3>
          <p>This tracker is for collecting recipe info about your brews.</p>
          <button
            className='pure-button pure-button-primary'
            onClick={ () => this.props.push('/add') }>
            Create one Now
          </button>
        </Card>
      )
    }
    return recipes.map((recipe, i) => (
      <Card className='pure-u-1-5' key={ `${recipe.name}-${recipe.id}` }>
        <h3>{ recipe.name }</h3>
        <small>{ recipe.id }</small>
        <p>{ recipe.description }</p>
      </Card>
    ))
  }

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
          : <div className='pure-g'>
            <PageHeader className='pure-u-5-5' title='Home' />
            { this.renderRecipes(recipes) }
          </div>
        }
      </section>
    )
  }

}

PageHome.propTypes = {
  loadAllRecipes: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  recipes: PropTypes.array
}

const mapDispatchtoProps = {
  loadAllRecipes,
  push
}

const mapStateToProps = (state) => ({
  isLoading: selectLoadingApp(state),
  recipes: selectRecipes(state)
})

export default connect(mapStateToProps, mapDispatchtoProps)(PageHome)
