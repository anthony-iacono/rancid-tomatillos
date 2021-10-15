import React, { Component } from 'react'
import '../styles/App.css'

import LoginForm from './LoginForm'
import Gallery from './Gallery'
import Details from './Details'
import movieData from '../data/movieData'

class App extends Component {
  state = {
    email: '',
    password: '',
    userID: '1',
    userName: '',
    movies: [],
    selectedMovieID: 1
  }

  componentDidMount = () => {
    // fetch('')
    this.setState({ movies: movieData.movies })
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
      <>
        <header>
          <h1>RaNcId ToMaTiLlOs</h1>
        </header>
        <main>
          { !this.state.userID
            ? <LoginForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              email={this.state.email}
              password={this.state.password}
            />
            : (
              this.state.selectedMovieID
              ? <Details />
              : <Gallery movies={ this.state.movies }/>
            )
          }
        </main>
        <footer>
          <h5>© 2021</h5>
        </footer>
      </>
    )
  }
}

export default App;
