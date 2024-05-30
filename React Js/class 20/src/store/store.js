import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter/counterSlice";
import authSlice from "./slices/auth/autSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});
