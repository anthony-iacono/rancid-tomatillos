import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import YouTubeVideo from '../YouTubeVideo/YouTubeVideo'
import api from '../../api'
import './MovieDetails.css'

class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: null,
      videos: null
    }
  }

  componentDidMount() {
    Promise.all([
      api.getSingleMovie(this.props.id),
      api.getSingleMovieVideos(this.props.id)
    ])
      .then(data => {
        this.setState({ movie: data[0], videos: data[1] })
      })
  }

  formatReleaseDate() {
    const { movie, videos } = this.state;
    const [ year, month, day ] = movie.release_date.split("-")
    console.log(year);
    return year;
  }

  formatRating() {
    const { movie, videos } = this.state;
    const { averageRating } = movie;
    return Math.round(movie.average_rating * 10) + "%";
  }

  formatGenres() {
    const { movie, videos } = this.state;
    return movie.genres.join("/");
  }

  render() {
    const { movie, videos } = this.state;
    return !this.state.movie ? <h1>Loading</h1> : (
      <section className="details-container">
        <YouTubeVideo videoKey={videos[videos.length - 1].key}/>
        <section
          className="details"
          style={{backgroundImage: `url(${this.state.movie.backdrop_path})`}}
        >
          <h2>{movie.title} ({this.formatReleaseDate()})</h2>
          <h3>"{movie.tagline}"</h3>
          <p>{movie.overview}</p>
          <h4>{this.formatGenres()} - {movie.runtime} minutes - {this.formatRating()} rating</h4>
          <p></p>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </section>
      </section>
    )
  }
}

export default MovieDetails
