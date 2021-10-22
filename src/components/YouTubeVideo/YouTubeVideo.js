import React from 'react';
import './YouTubeVideo.css';
const YouTubeVideo = ({ videoKey }) => {
  return (
    <iframe
      key={Date.now()}
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${videoKey}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="Embedded youtube"
    />
  )
}

export default YouTubeVideo
