import React, { FC } from "react";

type props = {
  label: String;
  done: any;
  onDelete: any;
  onDone: any;
};

const TodoItem: FC<props> = ({ label, onDelete, onDone }) => {
  return (
    <div className="w-full flex justify-center ">
      <div className="flex w-1/3 h-12 border-2 border-stone-600  justify-between  items-center px-4">
        <p
          className="text-2xl"
          style={{ textDecoration: onDone ? "line-through" : " " }}
        >
          {label}
        </p>
        <div className="flex space-x-2">
          <button
            onClick={onDone}
            className=" w-16  bg-indigo-500 text-white px-2 py-1 rounded"
          >
            done
          </button>
          <button
            className=" w-16  bg-indigo-500 text-white px-2 py-1 rounded"
            type="button"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
