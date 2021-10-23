import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.css'

const MovieCard = ({ id, poster_path, average_rating, release_date }) => {
  return (
    <Link to={`/movies/${id}`}>
      <article className='movie-card' style={{
        backgroundImage: `url(${poster_path})`,
        backgroundSize: 'contain'
      }}>
        <div className='text-overlay'>
          <p>Average Rating:
            <span className="yellow">{average_rating.toFixed(1)} / 10</span>
          </p>
          <p>Released:
            <span className="yellow">{release_date}</span>
          </p>
        </div>
      </article>
    </Link>
  )
}

export default MovieCard
