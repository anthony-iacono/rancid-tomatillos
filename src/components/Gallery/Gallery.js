import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import api from '../../api'
import './Gallery.css'

class Gallery extends Component {
  state = {
    movies: [],
    error: '',
    status: ''
  }

  componentDidMount() {
    api.getAllMovies()
      .then(movies => this.setState({
        movies: movies.map(movie => <MovieCard key={ movie.id } { ...movie } />)
      }))
      .catch(error => {
        this.setState({ error: error, status: 'error'})
      })
  }

  render() {
    return (
      <section className='gallery'>
        { this.state.movies }
      </section>
    )
  }
}

export default Gallery
