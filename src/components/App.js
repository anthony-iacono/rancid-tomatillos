import React, { Component } from 'react'
import '../styles/App.css'

import LoginForm from './LoginForm'
import movieData from '../data/movieData.js'


class App extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = () => {

  }

  render() {
    return (
      <main>
        <LoginForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          email={this.state.email}
          password={this.state.password}
         />
      </main>
    )
  }
}

export default App;
