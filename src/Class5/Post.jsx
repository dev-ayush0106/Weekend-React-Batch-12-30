import React, { useContext } from 'react'
import { DataContext } from '../App';

const Post = () => {
    let data=useContext(DataContext);
    console.log(data)
  return (
    <div>
      <h1>Post of : {data.name}  </h1>
      <h1>Age is {data.age}</h1>
      <h1>Lives is {data.city}</h1>
      <h1>Currently pursuing {data.course}</h1>
    </div>
  )
}

export default Post
