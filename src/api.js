const api = {
  getAllMovies() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        this.checkResponse(response, 'Please check your network connection')
        return response.json()
      })
      .then(data => data.movies)
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
