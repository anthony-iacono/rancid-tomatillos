import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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

  render() {
    return !this.state.movie ? <h1>Loading</h1> : (
      <section
        className="details"
        style={{backgroundImage: `url(${this.state.movie.backdrop_path})`}}
      >
        <h1>Details</h1>
        <p>{this.state.movie.title}</p>
        <p>{this.state.movie.release_date}</p>
        <p>{this.state.movie.overview}</p>
        <p>{this.state.movie.genres}</p>
        <p>{this.state.movie.runtime}</p>
        <p>{this.state.movie.tagline}</p>
        <p>{`${Math.round(this.state.movie.average_rating * 10)}%`}</p>
        {this.state.videos.map(video => {
          return (
            <iframe
              key={Date.now()}
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${video.key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          )
        })}
        <Link to='/'>
          <button>Back</button>
        </Link>
      </section>
    )
  }
}

export default MovieDetails
