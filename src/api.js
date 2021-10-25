const api = {
  getUser(email, password) {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: email,
        password: password
      })
  })
    .then(response => {
      this.checkResponse(response)
      return response.json()
    })
  },

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
      console.log(response)
      if (response.status === 422 || response.status === 403) {
        throw new Error('Sorry, we can\'t find an account with these credentials. Please try again.')
      } else if (response.status === 404) {
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
