import React from 'react'

const LoginForm = (props) => {
  return (
    <form>
      <input type='text' placeholder='username' required />
      <input type='text' placeholder='password' required />
      <button>Log in</button>
    </form>
  )
}

export default LoginForm
