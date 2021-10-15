import React from 'react'

const Card = ({ poster, rating, release }) => {
  return (
    <article>
      <img src={poster} />
      <p>{rating}</p>
      <p>{release}</p>
    </article>
  )
}

export default Card
