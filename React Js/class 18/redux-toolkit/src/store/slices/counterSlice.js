import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addCounter: (state, action) => {

            console.log("action", action.payload)
            let count = state.count
            state.count = count + 5
        },
        minusCounter: (state, action) => {
            let count = state.count
            state.count = count && --count
        }
    }
})


export const { addCounter, minusCounter } = counterSlice.actions
export default counterSlice.reducer