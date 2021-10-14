import React from 'react'

const LoginForm = (props) => {
  return (
    <form>
      <input
        type='text'
        placeholder='email'
        name='email'
        value={}
        required
      />
      <input
        type='text'
        placeholder='password'
        name='password'
        value={}
        required
      />
      <button>Log in</button>
    </form>
  )
}

export default LoginForm
