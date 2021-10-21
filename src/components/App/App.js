import React, { Component } from 'react'
import './App.css'
import Gallery from '../Gallery/Gallery'
import MovieDetails from '../MovieDetails/MovieDetails'
import { Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <>
        <header>
          <h1>CinemaCentral</h1>
        </header>
        <main>
          <Switch>
            <Route exact path='/' render={ () => <Gallery /> } />
            <Route path='/movies/:id' render={ ({ match }) => {
              return <MovieDetails id={ match.params.id } />
            }} />
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
