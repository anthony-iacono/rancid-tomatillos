import React from 'react'

const Card = ({ id, poster, rating, release, displayDetails }) => {
  return (
    <article onClick={ () => displayDetails(id) }>
      <img src={poster} />
      <p>{rating}</p>
      <p>{release}</p>
    </article>
  )
}

export default Card
