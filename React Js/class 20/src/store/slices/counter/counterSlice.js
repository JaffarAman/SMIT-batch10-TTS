import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 100,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state, action) => {
      console.log("state", state.value, action);
      // state.value = 1
    },
  },
});
const { actions } = counterSlice;

export const { addCounter } = actions;
export default counterSlice.reducer;
