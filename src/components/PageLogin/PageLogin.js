import React, { Component } from 'react'
import { connect } from 'react-redux'

import PageHeader from 'components/PageHeader'

class PageLogin extends Component {

  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  render () {
    return (
      <section className='page'>
        <PageHeader title='Login' />
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor='userName'>User Name</label>
          <input name='userName' id='userName' type='text' value={ this.state.username } onChange={ this.handleChange } />
          <label htmlFor='password'>Password</label>
          <input name='password' id='password' type='password' value={ this.state.pasword } onChange={ this.handleChange } />
          <button type='submit'>Login</button>
        </form>
      </section>
    )
  }

}

PageLogin.propTypes = {
}

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(PageLogin)
