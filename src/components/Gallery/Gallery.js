import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import api from '../../api'
import './Gallery.css'

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allMovies: [],
      filteredMovies: [],
      error: '',
      status: 'loading'
    }
  }

  componentDidMount() {
    api.getAllMovies()
      .then(movies => this.setState({ allMovies: movies, error: '', status: 'success'}))
      .catch(error => {
        this.setState({ error: error.message, status: 'error'})
      })
  }

  filterMovies() {
    return this.state.allMovies.filter(movie => {
      return movie.title.search(new RegExp(this.props.searchTerms, 'i')) !== -1
    })
  }

  componentDidUpdate() {
    console.log('updated')
    const filteredMovies = this.filterMovies()
    if (this.state.filteredMovies.length !== filteredMovies.length) {
      this.setState({ filteredMovies: filteredMovies })
    }
  }

  render() {
    const status = this.state.status
    const filteredMovies = this.state.filteredMovies.map(
      movie => <MovieCard key={ movie.id } { ...movie } />
    )
    return (
      <>
        {status === 'loading' && <h1 className='message'>Loading</h1>}
        {status === 'error' && <h1 className='message'>{this.state.error}</h1>}
        {status === 'success' &&
          <section className='gallery'>
            { filteredMovies }
          </section>
        }
      </>
    )
  }
}

export default Gallery
