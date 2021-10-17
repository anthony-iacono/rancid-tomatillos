import React, { Component } from 'react'
import '../styles/App.css'

import LoginForm from './LoginForm'
import Gallery from './Gallery'
import Details from './Details'
import api from '../api'
import movieData from '../data/movieData'

class App extends Component {
  state = {
    email: 'sam@turing.io',
    password: '123456',
    userID: '',
    userName: '',
    movies: [],
    selectedMovie: null,
    error: ''
  }

  componentDidMount = () => {
    api.getAllMovies()
      .then(({movies}) => this.setState({ movies: movies }))
      .catch(error => {
        this.setState({error: error.message})
      })
  }

  displayDetails = (id) => {
    let selectedMovie;
    Promise.all([
      api.getSingleMovie(id),
      api.getSingleMovieVideos(id)
    ])
      .then(([{ movie }, { videos }]) => {
        selectedMovie = movie
        selectedMovie.videos = videos[0]
        this.setState(this.setState({ selectedMovie: selectedMovie }))
      })
  }

  backToGallery = () => {
    this.setState({ selectedMovie: null })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value, error: '' })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    api.getUser(this.state.email, this.state.password)
      .then(({user: {id, name}}) => {
        this.setState({ userID: id, userName: name })
      })
      .catch(error => {
        this.setState({error: error.message})
      })
  }

  render() {
    let view;
    if (!this.state.userID) {
      view = <LoginForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        email={this.state.email}
        password={this.state.password}
        error={this.state.error}
      />
    } else if (this.state.selectedMovie) {
      view = <Details
        selectedMovie={this.state.selectedMovie}
        backToGallery={this.backToGallery}
      />
    } else {
      view = <Gallery
        movies={ this.state.movies }
        displayDetails={ this.displayDetails }
      />
    }

    return (
      <>
        <header>
          <h1>RaNcId ToMaTiLlOs</h1>
        </header>
        <main>
          {this.state.error && <p>{this.state.error}</p>}
          {view}
        </main>
        <footer>
          <h5>© 2021</h5>
        </footer>
      </>
    )
  }
}

export default App;
