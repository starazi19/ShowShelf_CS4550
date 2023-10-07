import React from 'react'
import {useUser} from '../context/UserContext'
/**
 * Represents the Home Page of our webpage.
 * @returns the Home Page.
 */
const Home = () => {
  const {user} = useUser();
  if(user) {
  return (
    <div>Logged In</div>
  )
} else {
  return (
    <div>No User</div>
  )
}
}

export default Home