import { useCallback } from "react";
import Task from "./Task";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const TaskList = ({ tasks, darkTheme, moveTask, completeTask, deleteTask }) => {
  const renderTask = useCallback(
    (task, index, moveTask, completeTask, deleteTask, darkTheme) => {
      return (
        <Task
          key={task.id}
          task={task}
          id={task.id}
          index={index}
          darkTheme={darkTheme}
          moveTask={moveTask}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      );
    },
    []
  );

  return (
    <main className=" mx-auto flex w-11/12 flex-col items-center sm:max-w-xl">
      <form className="mb-5 w-full">
        <input
          placeholder="Create a new todo"
          className="w-full rounded-lg px-14 py-3 text-sm dark:bg-veryDarkDesaturatedBlue dark:placeholder:text-gray-500 md:text-base"
        ></input>
      </form>

      <ul className="mb-5 w-full overflow-auto rounded-lg shadow-lg">
        <DndProvider backend={HTML5Backend}>
          {tasks.map((task, index) =>
            renderTask(
              task,
              index,
              moveTask,
              completeTask,
              deleteTask,
              darkTheme
            )
          )}
        </DndProvider>
        <li className="flex w-full items-center justify-between bg-white px-5 py-3 text-sm text-gray-400 dark:bg-veryDarkDesaturatedBlue dark:text-gray-600">
          <p className="text-sm md:text-base">
            {tasks.filter((task) => !task.completed).length} items left
          </p>
          <div className=" hidden justify-center gap-3 rounded-lg bg-white px-10 dark:bg-veryDarkDesaturatedBlue sm:flex">
            <button className=" text-sm text-gray-500 md:text-base">All</button>
            <button className=" text-sm text-gray-500 md:text-base">
              Active
            </button>
            <button className=" text-sm text-gray-500 md:text-base">
              Completed
            </button>
          </div>
          <p className="cursor-pointer text-sm md:text-base">Clear completed</p>
        </li>
      </ul>

      <div className=" justify-centerrounded-lg flex w-full justify-around rounded-lg bg-white py-3 px-20 dark:bg-veryDarkDesaturatedBlue sm:hidden">
        <button className="text-sm text-gray-500 hover:text-brightBlue">
          All
        </button>
        <button className="text-sm text-gray-500 hover:text-brightBlue">
          Active
        </button>
        <button className="text-sm text-gray-500 hover:text-brightBlue">
          Completed
        </button>
      </div>
      <div className="mt-5 text-gray-400">Drag and drop to reorder list </div>
    </main>
  );
};

export default TaskList;
