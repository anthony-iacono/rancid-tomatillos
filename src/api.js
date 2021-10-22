const api = {
  getAllMovies() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
      .then(data => data.movies)
  },

  getSingleMovie(movieID) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
      .then(data => data.movie)
  },

  getSingleMovieVideos(movieID) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`)
      .then(response => {
       this.checkResponse(response)
       return response.json()
     })
     .then(data => data.videos)
  },

  checkResponse(response) {
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('The page you are looking for doesn\'t exist')
      } else if (response.status >= 500) {
        throw new Error('We\'re having issues on our end. Please try again later.')
      } else {
        throw new Error('Please check your network connection')
      }
    }
  }
}

export default api
