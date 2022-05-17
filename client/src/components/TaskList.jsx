import React from "react";
import Task from "./Task";

const TaskList = () => {
  const data = [
    "Complete Javascript online course",
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1h",
    "Pick up groceries",
    "Complete frontendmentor Todo challenge",
  ];
  return (
    <main className=" flex w-full flex-col items-center">
      <form className="mb-5 w-11/12">
        <span className="checkmark z-10"></span>
        <input
          placeholder="Create a new todo"
          className="w-full rounded-lg px-14 py-3 text-sm"
        ></input>
      </form>
      <ul className="w-11/12 overflow-auto rounded-lg shadow-lg">
        {data.map((todo, index) => (
          <Task key={index} content={todo} />
        ))}
        <li className="flex w-full items-center justify-between bg-white px-5 py-3 text-sm text-gray-400">
          <p className="">5 items left</p>
          <p className="">Clear completed</p>
        </li>
      </ul>
      <div className="">
        <button className="">All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </main>
  );
};

export default TaskList;
