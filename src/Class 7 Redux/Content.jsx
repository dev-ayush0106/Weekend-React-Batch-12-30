import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './CreateSlice';

const Content = () => {
    let count=useSelector(state=> state.counter.value);
    console.log(count)

    let dispatch=useDispatch()
    function incCount(){
        dispatch(increment())
    }
    function decCount(){
        dispatch(decrement());
    }

    function resetCount(){
        dispatch(reset())
    }

    function incAmount(){
        dispatch(incrementByAmount(amount))
    }

    let [amount,setAmount]=useState(0);
  return (
    <div>
        <h1>Redux</h1>

        <button onClick={incCount}>+</button>
            {count}
        <button onClick={decCount}>-</button>
        <button onClick={resetCount}>Reset</button>

        <input type="number" onChange={(e)=>{setAmount(e.target.value)}}/>
        <button onClick={incAmount}>Increase</button>
    </div>
  )
}

export default Content
