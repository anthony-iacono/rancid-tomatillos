import React from 'react'
import Card from './Card'

const Gallery = ({ movies }) => {

  const movieCards = movies.map(movie => <Card
    key={movie.id}
    poster={movie.poster_path}
    rating={`${Math.round(movie.average_rating * 10)}%`}
    release={movie.release_date}
  />)

  return (
    <section>
      {movieCards}
    </section>
  )
}

export default Gallery
