import React from 'react'
/**
 * Represents the Home Page of our webpage.
 * @returns the Home Page.
 */
const Home = () => {
  const user = true;
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