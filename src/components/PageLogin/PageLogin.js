import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { authUser } from 'state/auth/actions'
import { push } from 'redux-json-router'

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
    const { authUser } = this.propess
    e.preventDefault()
    authUser(this.state.userName, this.state.password)
      .then(() => this.props.push('/'))
      .catch(e => console.error(e))
  }

  componentWillReceiveProps (nextProps) {
    // if logged in user object changes push to /home
  }

  render () {
    return (
      <section>
        <header>
          <h2>Login</h2>
        </header>
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
  push: PropTypes.func
}

export default connect(null, { authUser, push })(PageLogin)
