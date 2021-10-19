import React from 'react'

const Card = ({ id, poster, rating, release, displayDetails }) => {
  return (
    <article onClick={ () => displayDetails(id) }>
      <img src={poster || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} alt=''/>
      <p>{rating}</p>
      <p>{release}</p>
    </article>
  )
}

export default Card
