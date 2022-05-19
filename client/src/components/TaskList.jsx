import { useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Task from "./Task";
import FilterMenu from "./FilterMenu";

const TaskList = ({
  tasks,
  darkTheme,
  moveTask,
  completeTask,
  deleteTask,
  clearCompleted,
}) => {
  const [filter, setFilter] = useState("all");

  const renderTask = useCallback(
    (task, index, moveTask, completeTask, deleteTask, filter, darkTheme) => {
      return (
        <Task
          key={task.id}
          task={task}
          id={task.id}
          index={index}
          moveTask={moveTask}
          completeTask={completeTask}
          deleteTask={deleteTask}
          filter={filter}
          darkTheme={darkTheme}
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
              filter,
              darkTheme
            )
          )}
        </DndProvider>
        <li className="flex w-full items-center justify-between bg-white px-5 py-3 text-sm text-gray-400 dark:bg-veryDarkDesaturatedBlue dark:text-gray-600">
          <p className="text-sm md:text-base">
            {tasks.filter((task) => !task.completed).length} items left
          </p>

          <FilterMenu inList={true} setFilter={setFilter} />
          <button
            onClick={() => clearCompleted()}
            className="cursor-pointer text-sm hover:text-brightBlue md:text-base"
          >
            Clear completed
          </button>
        </li>
      </ul>
      <FilterMenu inList={false} setFilter={setFilter} />

      <div className="mt-5 text-gray-400">Drag and drop to reorder list </div>
    </main>
  );
};

export default TaskList;
