import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import YouTubeVideo from '../YouTubeVideo/YouTubeVideo'
import api from '../../api'
import './MovieDetails.css'
import placeholder from '../../assets/placeholder.png'

class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: null,
      videos: null,
      error: '',
      status: 'loading'
    }
  }

  componentDidMount() {
    Promise.all([
      api.getSingleMovie(this.props.id),
      api.getSingleMovieVideos(this.props.id)
    ])
      .then(data => {
        this.setState({ movie: data[0], videos: data[1], status: 'success', error: '' })
      })
      .catch(error => {
        this.setState({ error: error.message, status: 'error'})
      })
  }

  formatReleaseDate() {
    const { movie: {release_date } } = this.state;
    return new Date(release_date).toLocaleString('en-us', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  formatGenres() {
    const { movie } = this.state;
    return movie.genres.join("/");
  }

  render() {
    const status = this.state.status
    const { movie, videos } = this.state;

    return (
      <>
        {status === 'loading' && <h1 className='message'>Loading</h1>}
        {status === 'error' && <h1 className='message'>{this.state.error}</h1>}
        {status === 'success' && this.state.movie &&
          <section className="details-container">
            <YouTubeVideo videoKey={videos[videos.length - 1].key}/>
            <section
              className="details"
              style={{
                backgroundImage: `url(${
                  movie.backdrop_path
                    ? movie.backdrop_path
                    : placeholder
                  })`
                }}
            >
              <article className="details-wrapper">
                <div className="heading">
                  <h2>{movie.title} ({this.formatReleaseDate()})</h2>
                  {movie.tagline && <h3>{`${movie.tagline}`}</h3>}
                </div>
                <p>{movie.overview}</p>
                <h4>{this.formatGenres()} - {movie.runtime} minutes - {movie.average_rating.toFixed(1)} / 10 rating</h4>
                <Link to='/'>
                  <button>Home</button>
                </Link>
              </article>
            </section>
          </section>
        }
      </>
    )
  }
}

export default MovieDetails
