import React from "react";
import { CrossIcon } from "./Icons";

const Task = ({ content, id }) => {
  return (
    <li className=" relative flex items-center justify-between border-b-2 border-lightGrayishBlue bg-white px-5 py-4 dark:border-b-veryDarkGrayishBlue dark:bg-veryDarkDesaturatedBlue ">
      <div className="flex items-center">
        <input type="checkbox" className="mr-2 h-4 w-4" name="task" id={id} />
        <label
          htmlFor={id}
          className="flex items-center justify-center text-xs text-gray-600 dark:text-gray-400"
        >
          {content}
        </label>
      </div>
      <CrossIcon />
    </li>
  );
};

export default Task;
