import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../Header/Header'
import Gallery from '../Gallery/Gallery'
import MovieDetails from '../MovieDetails/MovieDetails'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchTerms: ''
    }
  }

  handleChange = event => {
    this.setState({ searchTerms: event.target.value })
  }

  render() {
    return (
      <>
        <Header handleChange={this.handleChange} searchTerms={ this.state.searchTerms }/>
        <main>
          <Switch>
            <Route exact path='/' render={
              () => <Gallery searchTerms={this.state.searchTerms}/>
            } />
            <Route path='/movies/:id' render={ ({ match }) => {
              return <MovieDetails id={ match.params.id } />
            }} />
            <Route path='*'>
              <p>The page you are looking for doesn't exist</p>
            </Route>
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
