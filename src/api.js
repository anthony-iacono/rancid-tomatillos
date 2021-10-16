const api = {
  getUser() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email: 'sam@turing.io',
          password: '123456'
        })
    })
      .then(json => json.json())
      .then(data => data.user)
      .then(val => console.log(val))
      .catch(error => console.warn(error.error))
  }
}

export default api
