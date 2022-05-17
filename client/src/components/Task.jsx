import React from "react";

const Task = ({ content, id }) => {
  return (
    <li className=" relative w-full border-b-2 border-lightGrayishBlue bg-white px-12 py-4 ">
      <span className="absolute top-2 left-4 h-6 w-6 rounded-full bg-brightBlue"></span>
      <h2 className="text-xs text-gray-600">{content}</h2>
    </li>
  );
};

export default Task;
