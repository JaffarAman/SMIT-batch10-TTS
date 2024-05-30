import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../config";
import { loginAction } from "./authActions";

const initialState = {
  loginData: [],
  loginLoading: false,
  
  isError: false,
  message: "",
  // token :""
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isError = false;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});


export default authSlice.reducer;
