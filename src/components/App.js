import React, { Component } from 'react'
import '../styles/App.css'

import LoginForm from './LoginForm'
import Gallery from './Gallery'
import movieData from '../data/movieData'

class App extends Component {
  state = {
    email: '',
    password: '',
    userID: '',
    userName: '',
    movies: []
  }

  componentDidMount = () => {
    // fetch('')
    this.setState({ movies: movieData })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    // fetch("https://rancid-tomatillos.herokuapp.com/api/v2/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: {
    //     "email": "fake@email.com",
    //     "password": "password"
    //   }
    // })
    // .then(response => response.json())
    // .then({user: {id, name}} => {
    //   this.setState({ userID: id, userName: name })
    // })
    // .catch({error} => console.warn(error))
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
