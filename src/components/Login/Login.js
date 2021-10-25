import React, { Component } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = ({ email, password, error, handleChange, handleSubmit }) => {
  return (
    <form>
      {error && <p className="message">{error}</p>}
      <input
        type='email'
        placeholder='email'
        name='email'
        value={email}
        onChange={handleChange}
        required
        className='text-field'
      />
      <input
        type='password'
        placeholder='password'
        name='password'
        value={password}
        onChange={handleChange}
        required
        className='text-field'
      />
      <Link to='/' onClick={handleSubmit}>
        <button className='login-btn'>Log In</button>
      </Link>
    </form>
  )
}

export default Login
