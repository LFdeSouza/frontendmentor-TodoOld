import { CheckIcon, CrossIcon } from "./Icons";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, index, completeTask, deleteTask, filter }) => {
  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided, snapshot) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={` flex cursor-grab items-center justify-between border-b-2 border-lightGrayishBlue bg-white px-5 py-4 dark:border-b-veryDarkGrayishBlue dark:bg-veryDarkDesaturatedBlue
      ${task.completed && filter === "active" && "hidden"} ${
            !task.completed && filter === "completed" && "hidden"
          }`}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              className="absolute opacity-0"
              name="task"
              checked={task.completed}
              id={task._id}
              onChange={() => {
                completeTask(index, task._id);
              }}
            />
            <label
              htmlFor={task._id}
              className=" task flex cursor-pointer items-center justify-center text-xs text-gray-600 dark:text-gray-400 md:text-base"
            >
              <span className="custom-checkbox flex items-center justify-center">
                <CheckIcon />
              </span>
              {task.title}
            </label>
          </div>
          <CrossIcon deleteTask={deleteTask} index={index} id={task._id} />
        </li>
      )}
    </Draggable>
  );
};

export default Task;
