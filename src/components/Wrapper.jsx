import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Task from "./Task";
import { change } from "../state/todo/todoSlice";
import { create, update } from "../state/todos/todosSlice";

const Wrapper = () => {
  const [updating, setUpdating] = useState(false);
  const [updateID, setUpdateID] = useState(null);
  const todos = useSelector((state) => state.todos);
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="border-2 border-slate-800 rounded px-4 py-4 flex flex-col items-center justify-center">
      <div className="">
        <input
          value={todo}
          onChange={(e) => dispatch(change(e.target.value))}
          placeholder="Enter your task"
          className="w-96 rounded bg-slate-800 border-slate-400 px-2 py-2 m-2 outline-none focus:bg-slate-600 md:w-72 sm:w-64 xsm:w-52"
          type="text"
        />
        {updating ? (
          <button
            onClick={() => {
              dispatch(update({ id: updateID, content: todo }));
              dispatch(change(""));
              setUpdating(false);
            }}
            className="w-20 h-10 rounded bg-slate-800 m-2 text-white px-2 hover:bg-slate-600"
          >
            Update
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(change(""));
              dispatch(create(todo));
            }}
            className="w-12 h-10 rounded bg-slate-800 m-2 text-white px-2 hover:bg-slate-600"
          >
            ADD
          </button>
        )}
      </div>
      <div className="flex flex-col-reverse">
        {todos &&
          todos.map((item) => (
            <Task
              setUpdating={setUpdating}
              setUpdateID={setUpdateID}
              key={item.id}
              data={item}
            />
          ))}
      </div>
    </div>
  );
};

export default Wrapper;
