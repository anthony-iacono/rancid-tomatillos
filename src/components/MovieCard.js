import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Card.css'

const MovieCard = ({ id, poster_path, average_rating, release_date }) => {
  return (
    <article className='movie-card'>
      <img src={ poster_path || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} alt=''/>
      <p>{average_rating}</p>
      <p>{release_date}</p>
    </article>
  )
}

export default MovieCard
