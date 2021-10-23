import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import api from '../../api'
import './Gallery.css'

class Gallery extends Component {
  state = {
    movies: [],
    error: '',
    status: 'loading'
  }

  componentDidMount() {
    api.getAllMovies()
      .then(movies => this.setState({ movies: movies, error: '', status: 'success'}))
      .catch(error => {
        this.setState({ error: error.message, status: 'error'})
      })
  }

  render() {
    const status = this.state.status
    return (
      <>
        {status === 'loading' && <h1 className='message'>Loading</h1>}
        {status === 'error' && <h1 className='message'>{this.state.error}</h1>}
        {status === 'success' && this.state.movies.length &&
          <section className='gallery'>
            { this.state.movies.map(movie =>
              <MovieCard key={ movie.id } { ...movie } />
            )}
          </section>
        }
      </>
    )
  }
}

export default Gallery
