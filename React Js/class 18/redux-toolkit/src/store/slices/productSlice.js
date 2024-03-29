import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    loading: false,
    error: false
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload.data
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false
            state.products = []
            state.error = true
        })
    }
})


export const fetchData = createAsyncThunk("product/fetch",
    async (obj, { rejectWithValue }) => {
        try {
            const response = await axios.get("https://fakestoreapi.com/productasdasdassdasds")
            console.log("response createAsyncThunk", response)
            return response
        } catch (error) {
            return rejectWithValue(error)
        }
    })

export default productSlice.reducer