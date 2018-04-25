import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'

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
    // this.props.firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
  }

  render () {
    return (
      <section>
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

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(PageLogin)
