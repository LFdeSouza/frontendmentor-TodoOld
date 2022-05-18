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
    <main className=" mx-auto flex w-11/12 flex-col items-center">
      <form className="mb-5 w-full">
        <span className="checkmark z-10"></span>
        <input
          placeholder="Create a new todo"
          className="w-full rounded-lg px-14 py-3 text-sm dark:bg-veryDarkDesaturatedBlue dark:placeholder:text-gray-500"
        ></input>
      </form>
      <ul className="mb-5 w-full overflow-auto rounded-lg shadow-lg">
        {data.map((todo, index) => (
          <Task key={index} content={todo} id={index} />
        ))}
        <li className="flex w-full items-center justify-between bg-white px-5 py-3 text-sm text-gray-400 dark:bg-veryDarkDesaturatedBlue dark:text-gray-600">
          <p>5 items left</p>
          <p>Clear completed</p>
        </li>
      </ul>
      <div className="flex w-full justify-around rounded-lg bg-white py-3 px-20 dark:bg-veryDarkDesaturatedBlue">
        <button className="text-sm text-gray-500">All</button>
        <button className="text-sm text-gray-500">Active</button>
        <button className="text-sm text-gray-500">Completed</button>
      </div>
      <div className="mt-5 text-gray-400">Drag and drop to reorder list </div>
    </main>
  );
};

export default TaskList;
