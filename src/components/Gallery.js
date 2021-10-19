import React from 'react'
import Card from './Card'

const Gallery = ({ movies, displayDetails }) => {
 // || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
  const movieCards = movies.map(movie => <Card
    key={movie.id}
    id={movie.id}
    poster={movie.poster_path}
    rating={`${Math.round(movie.average_rating * 10)}%`}
    release={movie.release_date}
    displayDetails={ displayDetails }
  />)

  return (
    <section id='gallery'>
      {movieCards}
    </section>
  )
}

export default Gallery
