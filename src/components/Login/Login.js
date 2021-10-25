import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = ({ email, password, error, handleLoginChange, handleLoginSubmit }) => {
  return (
    <form>
      {error && <p className="message">{error}</p>}
      <input
        type='email'
        placeholder='email'
        name='email'
        value={email}
        onChange={handleLoginChange}
        required
        className='text-field'
      />
      <input
        type='password'
        placeholder='password'
        name='password'
        value={password}
        onChange={handleLoginChange}
        required
        className='text-field'
      />
      <Link to='/' onClick={handleLoginSubmit}>
        <button className='login-btn'>Log In</button>
      </Link>
    </form>
  )
}

export default Login
