// import { createSlice } from '@reduxjs/toolkit'

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    addtoCartData: [],
    error: false
}

export const addToCart = createSlice({
    name: 'addToCart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            console.log(action, "Action addToCart")
            // state.addtoCart.push("hello")
            state.addtoCartData.push(action.payload)
        }
    },

})

export const { addCart } = addToCart.actions
export default addToCart.reducer

