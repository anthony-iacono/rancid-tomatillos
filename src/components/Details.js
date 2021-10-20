import React from 'react'
import { Link } from 'react-router-dom'

const Details = ({
  selectedMovie: {
    id,
    title,
    backdrop_path,
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
    <section
      className="details"
      style={{backgroundImage: `url(${backdrop_path})`}}
    >
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
      <Link to='/gallery' onClick={backToGallery}>
        <button>Back</button>
      </Link>
    </section>
  )
}

export default Details
