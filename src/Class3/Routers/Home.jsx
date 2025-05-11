import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  let navigate=useNavigate();
  function handleClick(){
    navigate("/courses")
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Move to Courses Page</button>
    </div>
  )
}

export default Home
