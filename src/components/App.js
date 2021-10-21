import React, { Component } from 'react'
import '../styles/App.css'

// import LoginForm from './LoginForm'
import Gallery from './Gallery'
import MovieDetails from './MovieDetails'
import api from '../api'
import { Route, Redirect, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return(
      <>
        <header>
          <h1>CinemaCentral</h1>
        </header>
        <main>
          <Switch>
            <Route path='/gallery' render={ () => <Gallery /> } />
            <Route path='/movies/:id' render={ () => <MovieDetails /> } />
          </Switch>
        </main>
        <footer>
          <h5>© 2021</h5>
        </footer>
      </>
    )
  }
}

export default App;
