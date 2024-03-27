import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";


const store = configureStore({
    reducer: {
        counter: CounterSlice
    }
})

export default store