import React, { useReducer } from 'react';

const initialState = { count: 0, count1: 0, name: "No String" };
let n = "";
function reducer(state, action) {
    switch (action.type) {
        case "increase":
            return { ...state, count: state.count + 1 };
        case "decrease":
            return { ...state, count: state.count - 1 };
        case "two":
            return { ...state, count: state.count + 2 };
        case "inc10":
            return { ...state, count1: state.count1 + 10 };
        case "strUpdate":
            return { ...state, name: state.name = n };
        default:
            return state;
    }
}



const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Use Reducer Hook</h1>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: "increase" })}>+</button>
            <button onClick={() => dispatch({ type: "decrease" })}>-</button>
            <button onClick={() => dispatch({ type: "two" })}>+2</button>

            <h1>Update by 10</h1>
            <h2>{state.count1}</h2>
            <button onClick={() => dispatch({ type: "inc10" })}>Update 10</button>

            <br /> <br />
            <h1>{state.name}</h1>
            <input type="text" name="" id="" onChange={(e) => { n = e.target.value }} />
            <button onClick={() => { dispatch({ type: "strUpdate" }) }}>Update</button>

        </div>
    );
}

export default UseReducer;
