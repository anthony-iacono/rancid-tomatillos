import React from 'react'

const LoginForm = ({ handleChange, handleSubmit, email, password }) => {
  return (
    <form>
      <input
        type='text'
        placeholder='email'
        name='email'
        value={email}
        required
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='password'
        name='password'
        value={password}
        required
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Log in</button>
    </form>
  )
}

export default LoginForm
