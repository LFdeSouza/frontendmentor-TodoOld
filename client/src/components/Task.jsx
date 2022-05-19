import React from "react";
import { CheckIcon, CrossIcon } from "./Icons";

const Task = ({ content, id, darkTheme }) => {
  return (
    <li className=" flex items-center justify-between border-b-2 border-lightGrayishBlue bg-white px-5 py-4 dark:border-b-veryDarkGrayishBlue dark:bg-veryDarkDesaturatedBlue ">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="absolute opacity-0"
          name="task"
          id={id}
        />
        <label
          htmlFor={id}
          className=" task flex cursor-pointer items-center justify-center text-xs text-gray-600 dark:text-gray-400 md:text-base"
        >
          <span className="custom-checkbox flex items-center justify-center">
            <CheckIcon darkTheme={darkTheme} />
          </span>
          {content}
        </label>
      </div>
      <CrossIcon />
    </li>
  );
};

export default Task;
