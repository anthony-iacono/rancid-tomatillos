import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../Login/Login'
import Header from '../Header/Header'
import Gallery from '../Gallery/Gallery'
import MovieDetails from '../MovieDetails/MovieDetails'
import api from '../../api'
import './App.css'

class App extends Component {
  state = {
    credentials: {
      email: 'sam@turing.io',
      password: '123456'
    },
    user: {
      name: '',
      id: 0
    },
    searchTerms: '',
    error: '',
    status: 'loading'
  }

  componentDidMount() {
    localStorage.getItem('user') && this.setState({ user: { name: JSON.parse(localStorage.getItem('user')).name, id: JSON.parse(localStorage.getItem('user')).id}, error: '', status: 'success' })
  }

  handleChangeInSearch = event => {
    this.setState({ searchTerms: event.target.value })
  }

  handleLoginChange = (event) => {
    const { credentials } = this.state
    const { name, value } = event.target
    this.setState({ credentials: { ...credentials, [name]: value } })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    const { credentials: { email, password } } = this.state;
    api.getUser(email, password)
      .then(({ user: { id, name } }) => {
        this.setState({ user: { id, name }, error: '', status: 'success' })
        localStorage.setItem('user', JSON.stringify(this.state.user))
      })
      .catch(error => {
        this.setState({ error: error.message, status: 'error' })
      })
  }

  render() {
    return (
      <>
        {!this.state.user.id ? <Redirect to='/login' /> : <Redirect to='/' />}
        <Header loggedIn={this.state.user.id ? true : false} handleChangeInSearch={this.handleChangeInSearch}
        searchTerms={ this.state.searchTerms } />
        <main>
          <Switch>
            <Route exact path='/login' render={ () => <Login data={this.state.credentials} error={this.state.error} handleLoginChange={this.handleLoginChange} handleLoginSubmit={this.handleLoginSubmit} /> } />
            <Route exact path='/' render={ () => {
              return this.state.user.id ? <Gallery searchTerms={this.state.searchTerms} /> : <Redirect to='/login' />
            } } />
            <Route path='/movies/:id' render={ ({ match }) => {
              return this.state.user.id ? <MovieDetails id={ match.params.id } /> : <Redirect to='/login' />
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
