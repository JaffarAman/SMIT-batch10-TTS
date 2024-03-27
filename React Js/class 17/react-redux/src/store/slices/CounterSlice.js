import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        add: (state, action) => {
            let count = state.count
            state.count = ++count
        },
        minus: () => {
            console.log("minus action")

        }
    }

})


const { actions, } = counterSlice

export const { add, minus } = actions
export default counterSlice.reducer