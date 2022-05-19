import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { CheckIcon, CrossIcon } from "./Icons";

const Task = ({
  task,
  id,
  index,
  moveTask,
  completeTask,
  deleteTask,
  filter,
  darkTheme,
}) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "card",

    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveTask(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: () => console.log("end"),
  });

  drag(drop(ref));

  return (
    <li
      ref={ref}
      className={`flex items-center justify-between border-b-2 border-lightGrayishBlue bg-white px-5 py-4 dark:border-b-veryDarkGrayishBlue dark:bg-veryDarkDesaturatedBlue ${
        isDragging && " opacity-10"
      } ${task.completed && filter === "active" && "hidden"} ${
        !task.completed && filter === "completed" && "hidden"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          className="absolute opacity-0"
          name="task"
          checked={task.completed}
          id={id}
          onChange={() => completeTask(index, id)}
        />
        <label
          htmlFor={id}
          className=" task flex cursor-pointer items-center justify-center text-xs text-gray-600 dark:text-gray-400 md:text-base"
        >
          <span className="custom-checkbox flex items-center justify-center">
            <CheckIcon darkTheme={darkTheme} />
          </span>
          {task.content}
        </label>
      </div>
      <CrossIcon deleteTask={deleteTask} index={index} id={id} />
    </li>
  );
};

export default Task;
