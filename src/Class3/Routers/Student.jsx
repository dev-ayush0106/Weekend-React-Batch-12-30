import React from 'react'
import { useParams } from 'react-router'

const Student = () => {
    const{ id }=useParams();
  return (
    <div>
     <h1> Student Details : {id} </h1>
    </div>
  )
}

export default Student
