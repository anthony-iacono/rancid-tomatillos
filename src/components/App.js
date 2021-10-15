import movieData from './movieData.js'
import './App.css'
import LoginForm from './LoginForm'
import React, { Component } from 'react'

class App extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = () => {

  }

  handleSubmit = () => {

  }

  return (
    <main>
      <LoginForm />
    </main>
  )
}

export default App;
