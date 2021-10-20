import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Card.css'

const Card = ({ id, poster, rating, release, displayDetails }) => {
  return (
    <Link to={`/${id}`}
    /*onClick={ () => displayDetails(id) }*/
    >
      <article
        className='movie-card'
      >
        <img src={poster || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} alt=''/>
        <p>{rating}</p>
        <p>{release}</p>
      </article>
    </Link>
  )
}

export default Card
