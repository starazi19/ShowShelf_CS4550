import React, {useState} from 'react'
import axios from 'axios'
/**
 * Represents the login page
 * @returns the Login Page.
 */
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('') 

  const handleClick = async() => {
    await axios.post('http://localhost:3001/api/register', {
      username,
      password
    }).then(response => console.log(response))
  }

  return (
    <div>
      <form>
        <h2>Login</h2>
        <input className='' type='text' value={username} onChange={e => setUsername(e.target.value)}/>
        <input className='' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={handleClick} type='submit'>Register</button>
      </form>
      </div>
  )
}

export default Login