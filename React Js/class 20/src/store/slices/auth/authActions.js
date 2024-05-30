import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../config";

export const loginAction = createAsyncThunk(
    "auth/login",
    async (obj, { rejectWithValue }) => {
      try {
        console.log("loginAction", obj);
        const response = await axios.post(`${BASE_URL}/login`, obj);
        return response;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  