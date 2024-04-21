import React from "react";
import { useDispatch } from "react-redux";

import { toggleComplete, deleting } from "../state/todos/todosSlice";
import { change } from "../state/todo/todoSlice";

const Task = ({ data, setUpdateID, setUpdating }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row justify-between m-2 w-96 xsm:w-80">
      <div className="flex flex-row">
        <input
          type="checkbox"
          checked={data.completed}
          onChange={(e) =>
            dispatch(
              toggleComplete({
                id: data.id,
                tick: e.target.checked,
              })
            )
          }
          className="appearance-none rounded h-6 w-6 bg-slate-400 checked:bg-green-500"
        />
        <div
          className={`ms-2 ${
            data.completed && "transition duration-200 line-through"
          }`}
        >
          {data.title}
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(change(data.title));
            setUpdateID(data.id);
            setUpdating(true);
          }}
          className="bg-gray-500 rounded text-sm p-1 me-2"
        >
          Edit
        </button>
        <button
          onClick={() => {
            dispatch(deleting(data.id));
          }}
          className="bg-red-500 rounded text-sm p-1"
        >
          Del
        </button>
      </div>
    </div>
  );
};

export default Task;
