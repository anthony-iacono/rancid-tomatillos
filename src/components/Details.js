import React from 'react'

const Details = ({selectedMovie: { id, title, backdrop_path, release_date, overview, genres, runtime, tagline, average_rating }}) => {
  console.log(title)
  return (
    <section style={{backgroundImage: `url("https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg")`}}>
      <h1>Details</h1>
      <p>{title}</p>
      <p>{release_date}</p>
      <p>{overview}</p>
      <p>{genres}</p>
      <p>{runtime}</p>
      <p>{tagline}</p>
      <p>{average_rating}</p>
    </section>
  )
}

export default Details
