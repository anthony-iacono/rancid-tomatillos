import React from 'react'
// import Card from './Card'

const Gallery = ({ movies }) => {

  const movieCards = movies.map(movie => <Card
    poster={movie.poster_path}
  />)

  return (
    <section>
      {movieCards}
    </section>
  )
}

export default Gallery
