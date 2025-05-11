import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    let [count,setCount]=useState(15);
    let [count1,setCount1]=useState(0);
    // i case
    // useEffect(()=>{
    //     document.title=count;
    // })

    function inc(){
        setCount(count+1)
    }

    function dec(){
        setCount(count-1)
    }
    function inc1(){
        setCount1(count1+1)
    }

    function dec1(){
        setCount1(count1-1)
    }

    // ii case
    // useEffect(()=>{
    //     document.title=count;
    // },[])

    // iii case
    useEffect(()=>{
        document.title=count
    },[count])
  return (
    <div>
    {/* 
        uses of useEffect
        their are three type of useEffect
        1. run without dependency. : it will on every render
        2. run with an empty array. : it will only on the first render (api calling)
        3. run according to an object. : it will re-render according to an object
    */}
    <h1>{count}</h1>
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>

    <h1>{count1}</h1>
    <button onClick={inc1}>+</button>
    <button onClick={dec1}>-</button>
    </div>
  )
}

export default UseEffect
