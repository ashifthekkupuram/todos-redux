import { configureStore } from "@reduxjs/toolkit";

import TodoReducer from "./todo/todoSlice";
import TodosReducer from "./todos/todosSlice";

export const store = configureStore({
  reducer: {
    todo: TodoReducer,
    todos: TodosReducer,
  },
});
