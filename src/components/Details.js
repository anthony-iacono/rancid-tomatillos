import React from 'react'

const Details = ({selectedMovie: { id, title, poster_path, release_date, overview, genres, runtime, tagline, average_rating }, backToGallery}) => {
  console.log(title)
  return (
    <section style={{backgroundImage: `url(${poster_path})`}}>
      <h1>Details</h1>
      <p>{title}</p>
      <p>{release_date}</p>
      <p>{overview}</p>
      <p>{genres}</p>
      <p>{runtime}</p>
      <p>{tagline}</p>
      <p>{average_rating}</p>
      <button onClick={backToGallery}>Back</button>
    </section>
  )
}

export default Details
