import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import api from '../../api'
import './Gallery.css'

class Gallery extends Component {
  constructor(props) {
    super()
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

  // componentDidUpdate(prevState) {
  //   console.log(prevState)
  //   if (prevState.filteredMovies.length !== this.state.filteredMovies.length) {
  //     const filteredMovies = this.state.allMovies.filter(movie => {
  //       return movie.title.search(new RegExp(this.props.searchTerms, 'i'))
  //     })
  //     this.setState({ filteredMovies: filteredMovies })
  //   }
  // }

  render() {
    const status = this.state.status

    return (
      <>
        {status === 'loading' && <h1 className='message'>Loading</h1>}
        {status === 'error' && <h1 className='message'>{this.state.error}</h1>}
        {status === 'success' && this.state.allMovies.length &&
          <section className='gallery'>
            { !this.state.filteredMovies.length && this.state.allMovies && this.state.allMovies.map(
              movie => <MovieCard key={ movie.id } { ...movie } />
            )}
            { this.state.filteredMovies.length && this.filteredMovies.map(
              movie => <MovieCard key={ movie.id } { ...movie } />
            )}
          </section>
        }
      </>
    )
  }
}

export default Gallery
