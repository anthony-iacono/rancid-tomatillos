import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.css'

const MovieCard = ({ id, poster_path, average_rating, release_date }) => {
  return (
    <Link to={`/movies/${id}`}>
      <article className='movie-card'>
        <img src={ poster_path || 'https://bit.ly/3E1K2gk'} alt=''/>
        <p>{average_rating}</p>
        <p>{release_date}</p>
      </article>
    </Link>
  )
}

export default MovieCard
