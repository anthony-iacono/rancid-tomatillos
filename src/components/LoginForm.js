import React from 'react'
import '../styles/LoginForm.css'
import { Link } from 'react-router-dom'

const LoginForm = ({ handleChange, handleSubmit, email, password, userID, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        placeholder='email'
        name='email'
        value={email}
        onChange={handleChange}
        required
      />
      <input
        type='password'
        placeholder='password'
        name='password'
        value={password}
        onChange={handleChange}
        required
      />
        <button>Log in</button>
    </form>
  )
}

export default LoginForm
