import { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import FilterMenu from "./FilterMenu";
import TaskMemo from "./TaskMemo";

const TaskList = ({
  tasks,
  moveTask,
  createTask,
  completeTask,
  deleteTask,
  clearCompleted,
}) => {
  const [filter, setFilter] = useState("all");
  const [newTask, setNewTask] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    createTask(newTask);
    setNewTask("");
  };

  return (
    <main className=" mx-auto flex w-11/12 flex-col items-center sm:max-w-xl">
      <form onSubmit={(e) => onSubmit(e)} className="mb-5 w-full">
        <input
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Create a new todo"
          value={newTask}
          className="w-full rounded-lg px-14 py-3 text-sm dark:bg-veryDarkDesaturatedBlue dark:placeholder:text-gray-500 md:text-base"
        ></input>
      </form>

      <DragDropContext
        onDragEnd={(result) =>
          moveTask(
            result.source.index,
            result.destination.index,
            result.draggableId
          )
        }
      >
        <Droppable droppableId="TaskList">
          {(provided) => (
            <ul
              className="mb-5 w-full overflow-y-auto rounded-lg shadow-lg"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <TaskMemo
                tasks={tasks}
                moveTask={moveTask}
                completeTask={completeTask}
                deleteTask={deleteTask}
                filter={filter}
              />
              {provided.placeholder}
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
          )}
        </Droppable>
      </DragDropContext>
      <FilterMenu inList={false} setFilter={setFilter} />
      <div className="mt-5 text-gray-400">Drag and drop to reorder list </div>
    </main>
  );
};

export default TaskList;
