import React, {useState} from 'react'
import axios from 'axios'
import { useUser } from '../context/UserContext'
/**
 * Represents the login page
 * @returns the Login Page.
 */
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {user, setUser} = useUser();

  const handleClick = async(e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/api/register', {
      username,
      password
    }).then(response => setUser(response.data));
  }

  return (
    <div>
      <form>
        <h2>Login</h2>
        <input className='' type='text' value={username} onChange={e => setUsername(e.target.value)}/>
        <input className='' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={handleClick} type='submit'>Register</button>
      </form>
      {user}
      </div>
  )
}

export default Login