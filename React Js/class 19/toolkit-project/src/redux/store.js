import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'
import addToCartSlice from './slices/addToCartSlice'


export const store = configureStore({
    reducer: {
        product: productSlice,
        addToCart: addToCartSlice
    },
})