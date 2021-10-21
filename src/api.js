const api = {
  getAllMovies() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        this.checkResponse(response, 'Please check your network connection')
        return response.json()
      })
      .then(data => data.movies)
  },

  getSingleMovie(movieID) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
      .then(response => {
        this.checkResponse(response, 'Please check your network connection')
        return response.json()
      })
      .then(data => data.movie)
  },

  getSingleMovieVideos(movieID) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`)
      .then(response => {
       this.checkResponse(response, 'Please check your network connection')
       return response.json()
     })
     .then(data => data.videos)
  },

  checkResponse(response, message) {
    if (!response.ok) {
      if (response.status >= 500) {
        throw new Error('TeChNiCaL dIfFiCuLtIeS')
      } else {
        throw new Error(message)
      }
    }
  }
}

export default api
