//
//   componentDidMount = () => {
//     api.getAllMovies()
//       .then(({movies}) => this.setState({ movies: movies }))
//       .catch(error => {
//         this.setState({error: error.message})
//       })
//   }
//
//   displayDetails = (id) => {
//     console.log("Display details for " + id)
//     let selectedMovie;
//     Promise.all([
//       api.getSingleMovie(id),
//       api.getSingleMovieVideos(id)
//     ])
//       .then(([{ movie }, { videos }]) => {
//         selectedMovie = movie
//         selectedMovie.videos = videos[0]
//         this.setState(this.setState({ selectedMovie: selectedMovie }))
//       })
//   }
//
//   backToGallery = () => {
//     // this.setState({ selectedMovie: null })
//   }
//
//   handleChange = (event) => {
//     const { name, value } = event.target
//     this.setState({ [name]: value, error: '' })
//   }
//
//   handleSubmit = (event) => {
//     event.preventDefault()
//     api.getUser(this.state.email, this.state.password)
//       .then(({user: {id, name}}) => {
//         this.setState({ userID: id, userName: name })
//       })
//       .catch(error => {
//         this.setState({error: error.message})
//       })
//   }
//
//   render() {
//     return (
//       <>
//         <header>
//           <h1>RaNcId ToMaTiLlOs</h1>
//         </header>
//         <main>
//           {this.state.error && <p>{this.state.error}</p>}
//           {!this.state.userID
//             ? <>
//             <Redirect to='/login'/>
//             <Route
//               exact path='/login'
//               render={() =>
//                 <LoginForm
//                   handleChange={this.handleChange}
//                   handleSubmit={this.handleSubmit}
//                   email={this.state.email}
//                   password={this.state.password}
//                   userID={this.state.userID}
//                   error={this.state.error}
//                 />
//               }
//             />
//             </>
//             : <>
//             <Redirect to='/gallery'/>
//             <Switch>
//               <Route
//                 exact path='/gallery'
//                 render={() =>
//                   <Gallery
//                     movies={ this.state.movies }
//                     /*displayDetails={ this.displayDetails }*/
//                     />
//                 }
//               />
//
//               <Route
//                 exact path='/:id'
//                 render={ ({match}) => {
//                   const id = match.params.id
//                   Promise.all([
//                     api.getSingleMovie(id),
//                     api.getSingleMovieVideos(id)
//                   ])
//                   .then(([{ movie }, { videos }]) => {
//                     const selectedMovie = movie
//                     selectedMovie.videos = videos[0]
//                     return <Details
//                     /*selectedMovie={this.state.selectedMovie}*/
//                       selectedMovie={selectedMovie}
//                       backToGallery={this.backToGallery}
//                     />
//                     /*this.setState(this.setState({ selectedMovie: selectedMovie }))*/
//                   })
//                   .catch(error => console.log(error))
//                   /*(this.state.selectedMovie &&*/
//                   }
//                 }
//               />
//             </Switch>
//             </>
//           }
//
//         </main>
//         <footer>
//           <h5>© 2021</h5>
//         </footer>
//       </>
//     )
//   }
// }
//
//
// // || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
//  const movieCards = movies.map(movie => <Card
//    key={movie.id}
//    id={movie.id}
//    poster={movie.poster_path}
//    rating={`${Math.round(movie.average_rating * 10)}%`}
//    release={movie.release_date}
//    /*displayDetails={ displayDetails }*/
//  />)
//
//  return (
//    <section id='gallery'>
//      {movieCards}
//    </section>
//  )
//
//
//  return (
//    <Link to={`/${id}`}
//    /*onClick={ () => displayDetails(id) }*/
//    >
//      <article
//        className='movie-card'
//      >
//        <img src={poster || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} alt=''/>
//        <p>{rating}</p>
//        <p>{release}</p>
//      </article>
//    </Link>
//  )
//
//
//  getUser(email, password) {
//    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
//      method: 'POST',
//      headers: {
//        'Content-Type': 'application/json'
//      },
//      body: JSON.stringify({
//          email: email,
//          password: password
//        })
//    })
//      .then(response => {
//        this.checkResponse(response, 'Sorry, we can\'t find an account with these credentials. Please try again.')
//        return response.json()
//      })
//  },
//
//
//  getSingleMovie(movieID) {
//    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
//      .then(response => {
//        this.checkResponse(response, 'Please check your network connection')
//        return response.json()
//      })
//  },
//
//  getSingleMovieVideos(movieID) {
//    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`)
//      .then(response => {
//        this.checkResponse(response, 'Please check your network connection')
//        return response.json()
//      })
//  },
//
//
// import React from 'react'
// import '../styles/LoginForm.css'
// import { Link } from 'react-router-dom'
//
// const LoginForm = ({ handleChange, handleSubmit, email, password, userID, error }) => {
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type='email'
//         placeholder='email'
//         name='email'
//         value={email}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type='password'
//         placeholder='password'
//         name='password'
//         value={password}
//         onChange={handleChange}
//         required
//       />
//       <button>Log in</button>
//     </form>
//   )
// }
//
// export default LoginForm
//
// selectedMovie: {
//   id,
//   title,
//   backdrop_path,
//   release_date,
//   overview,
//   genres,
//   runtime,
//   tagline,
//   average_rating,
//   videos: {key}
// },
// backToGallery
// }) => {
// return (
//   <section
//     className="details"
//     style={{backgroundImage: `url(${backdrop_path})`}}
//   >
//     <h1>Details</h1>
//     <p>{title}</p>
//     <p>{release_date}</p>
//     <p>{overview}</p>
//     <p>{genres}</p>
//     <p>{runtime}</p>
//     <p>{tagline}</p>
//     <p>{`${Math.round(average_rating * 10)}%`}</p>
//     <iframe
//       width="853"
//       height="480"
//       src={`https://www.youtube.com/embed/${key}`}
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//       title="Embedded youtube"
//     />
//     <Link to='/gallery' onClick={backToGallery}>
//       <button>Back</button>
//     </Link>
//   </section>
// )
