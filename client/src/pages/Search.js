import React from 'react'
import { useParams } from 'react-router-dom'

const Search = () => {
  const {name} = useParams();
  return (
    <div>Search</div>
  )
}

export default Search