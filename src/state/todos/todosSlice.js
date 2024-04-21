import { createSlice } from "@reduxjs/toolkit";

let initialState = [];
const storedTodos = localStorage.getItem("todos");
if (storedTodos !== null) {
  initialState = JSON.parse(storedTodos);
}

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    create: (state, action) => {
      const content = action.payload;
      if (!(content.match(/[a-z]/g).length < 6)) {
        state.push({
          id: Date.now(),
          title: action.payload,
          completed: false,
        });
        localStorage.setItem("todos", JSON.stringify(state));
      } else {
        alert("Title must be 6 character or long!");
      }
    },
    toggleComplete: (state, action) => {
      state.forEach((item) => {
        if (item.id == action.payload.id) {
          item.completed = action.payload.tick;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    },
    deleting: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    update: (state, action) => {
      state.forEach((item) => {
        if (item.id == action.payload.id) {
          item.title = action.payload.content;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const { create, toggleComplete, deleting, update } = todosSlice.actions;

export default todosSlice.reducer;
