import React, { Component } from 'react'
import MovieCard from './MovieCard'
import api from '../api'

import '../styles/Gallery.css'

class Gallery extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    api.getAllMovies()
      .then(movies => this.setState({
        movies: movies.map(movie => <MovieCard key={ movie.id } { ...movie } />) 
      }))
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
