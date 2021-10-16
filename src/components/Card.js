import React from 'react'

const Card = ({ poster, rating, release, displayDetails }) => {
  return (
    <article onClick={ displayDetails }>
      <img src={poster} />
      <p>{rating}</p>
      <p>{release}</p>
    </article>
  )
}

export default Card
