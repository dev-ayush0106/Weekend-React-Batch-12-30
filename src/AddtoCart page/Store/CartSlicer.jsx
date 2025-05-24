import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
export const cartSlicer=createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state,action){
            return state.push(action.payload)
        }
    }
})

export const {add}=cartSlicer.actions;
export default cartSlicer.reducer; 
