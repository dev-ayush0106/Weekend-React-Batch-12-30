import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const Course = () => {
  let navigate=useNavigate()
  let navigate1=useNavigate()
  let navigate2=useNavigate()
  let navigate3=useNavigate()

  function handleClick1(){
    navigate("uiux")
  }
  function handleClick2(){
    navigate1("mern")
  }
  function handleClick3(){
    navigate2("pythonfs")
  }
  function handleClick4(){
    navigate3("javafs")
  }
  return (
    <div>
      <h1>Courses Page</h1>
      <Outlet/>
      <button onClick={handleClick1}>Go to UIUX</button>
      <button onClick={handleClick2}>Go to MERN</button>
      <button onClick={handleClick3}>Go to Python Full Stack</button>
      <button onClick={handleClick4}>Go to Java Full Stack</button>
    </div>
  )
}

export default Course
