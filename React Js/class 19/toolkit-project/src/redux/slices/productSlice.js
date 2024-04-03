import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    products: [],
    error: false
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            state.error = false
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false
            state.products = []
            state.error = true
        })
    }
})

// Action creators are generated for each case reducer function
export const { } = productSlice.actions



export const fetchProduct = createAsyncThunk("fetch/products", async (obj, { rejectWithValue }) => {
    try {
        const data = await axios.get("https://fakestoreapi.com/products")
        return data.data
    } catch (error) {
        return rejectWithValue(error)
    }
})


export default productSlice.reducer