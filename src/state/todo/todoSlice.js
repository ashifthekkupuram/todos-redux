import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    change: (state, action) => {
      return action.payload;
    },
  },
});

export const { change } = todoSlice.actions;

export default todoSlice.reducer;
