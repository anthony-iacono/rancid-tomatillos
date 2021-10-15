import React, { Component } from 'react'
import '../styles/App.css'

import LoginForm from './LoginForm'
import movieData from '../data/movieData.js'


class App extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = () => {

  }

  handleSubmit = () => {

  }

  render() {
    return (
      <main>
        <LoginForm />
      </main>
    )
  }
}

export default App;
