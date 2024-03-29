import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        product: productSlice
    }
})

export default store