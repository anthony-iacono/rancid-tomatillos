import React from 'react'
import '../styles/LoginForm.css'

const LoginForm = ({ handleChange, handleSubmit, email, password, error }) => {
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
