import { configureStore } from "@reduxjs/toolkit";
import { cartSlicer } from "./CartSlicer";

export const store = configureStore({
    reducer:{
        cart:cartSlicer
    }
})