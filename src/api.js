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
        if (!response.ok) {
          throw new Error('Holy mackerel! Are your creds correct?')
        } else if (response.status >= 500) {
          throw new Error('TeChNiCaL dIfFiCuLtIeS')
        }
        return response.json()
      })
  },

  getAllMovies() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        if (!response.ok) {
          throw new Error('Are you connected to the interwebz?')
        } else if (response.status >= 500) {
          throw new Error('TeChNiCaL dIfFiCuLtIeS')
        }
        return response.json()
      })
  },

  getSingleMovie(movieID) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Are you connected to the interwebz?')
        } else if (response.status >= 500) {
          throw new Error('TeChNiCaL dIfFiCuLtIeS')
        }
        return response.json()
      })
  }
}

export default api
