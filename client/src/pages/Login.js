import React from 'react'
/**
 * Represents the login page
 * @returns the Login Page.
 */
const Login = () => {
  return (
    <div>
      <form method="POST" action='http://localhost:3001/api/register'>
        <h2>Login</h2>
        <input type='text'/>
        <input type='password'/>
        <button type='submit'>Register</button>
      </form>
      </div>
  )
}

export default Login