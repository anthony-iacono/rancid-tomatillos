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
        this.checkResponse(response, 'Holy mackerel! Are your creds correct?')
        return response.json()
      })
  },

  getAllMovies() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        this.checkResponse(response, 'Are you connected to the interwebz?')
        return response.json()
      })
      // .catch(error => console.log(error))
  },

  getSingleMovie(movieID) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
      .then(response => {
        this.checkResponse(response, 'Are you connected to the interwebz?')
        return response.json()
      })
  },

  getSingleMovieVideos(movieID) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`)
      .then(response => {
        this.checkResponse(response, 'Are you connected to the interwebz?')
        return response.json()
      })
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
