import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

    // let [count,setCount]=useState(0);

    // let val=useRef(1);
    // useEffect(()=>{
    //     val.current+=1;
    //     console.log(val.current)
    // })

    // console.log(val);

    let inpRef=useRef();
  return (
    <div>
      <h1>UseRef Hook</h1>

      {/* use ref hook has two works:
       -- secondary work : to create mutable re-renders
       -- primary work : to update dom elements
      */}

      {/* <button onClick={()=>{
        setCount(count+1)
      }}>+</button>
        {count}
      <button onClick={()=>{
        setCount(count-1)
      }}>-</button> */}

      <input type="text" ref={inpRef} /> <br />
      <button onClick={()=>{
        // inpRef.current.style.border="2px solid red"
        inpRef.current.focus();
        inpRef.current.style.width="800px"
      }}>Edit</button>
    </div>
  )
}

export default UseRef
