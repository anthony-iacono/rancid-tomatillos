import React from 'react'

const Details = ({
  selectedMovie: {
    id,
    title,
    poster_path,
    release_date,
    overview,
    genres,
    runtime,
    tagline,
    average_rating,
    videos: {key}
  },
  backToGallery
}) => {
  return (
    <section style={{backgroundImage: `url(${poster_path})`}}>
      <h1>Details</h1>
      <p>{title}</p>
      <p>{release_date}</p>
      <p>{overview}</p>
      <p>{genres}</p>
      <p>{runtime}</p>
      <p>{tagline}</p>
      <p>{`${Math.round(average_rating * 10)}%`}</p>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${key}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <button onClick={backToGallery}>Back</button>
    </section>
  )
}

export default Details
