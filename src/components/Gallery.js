import React from 'react'
import Card from './Card'

const Gallery = ({ movies, displayDetails }) => {

  const movieCards = movies.map(movie => <Card
    key={movie.id}
    id={movie.id}
    poster={movie.poster_path}
    rating={`${Math.round(movie.average_rating * 10)}%`}
    release={movie.release_date}
    displayDetails={ displayDetails }
  />)

  return (
    <section>
      {movieCards}
    </section>
  )
}

export default Gallery
