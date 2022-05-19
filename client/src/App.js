import { useState } from "react";
import { produce } from "immer";
import { data } from "./dataContext";
import { MoonIcon, SunIcon } from "./components/Icons";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState(data);

  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => setDarkTheme(!darkTheme);

  const moveTask = (dragIndex, hoverIndex) => {
    setTasks(
      produce(tasks, (draft) => {
        draft.splice(dragIndex, 1);
        draft.splice(hoverIndex, 0, tasks[dragIndex]);
      })
    );
  };

  const completeTask = (index, id) => {
    setTasks(
      produce(tasks, (draft) => {
        draft[index].completed = !draft[index].completed;
      })
    );
  };

  const deleteTask = (index, id) => {
    setTasks(
      produce(tasks, (draft) => {
        draft.splice(index, 1);
      })
    );
  };

  const clearCompleted = () => {
    setTasks(
      produce(tasks, (draft) => draft.filter((task) => !task.completed))
    );
  };

  return (
    <div className={darkTheme && `dark`}>
      <div className="min-w-screen min-h-screen bg-veryLightGrayishBlue bg-mobile-light bg-contain bg-no-repeat font-josefin dark:bg-veryDarkBlue dark:bg-mobile-dark md:bg-desktop-light dark:md:bg-desktop-dark dark:md:bg-desktop-dark">
        <header className="mx-auto w-full px-10 pb-5 pt-12 sm:max-w-xl sm:px-0">
          <div className="flex items-center justify-between">
            <h1 className=" text-3xl tracking-[0.8rem] text-white md:text-4xl">
              TODO
            </h1>
            {darkTheme ? (
              <SunIcon toggleTheme={toggleTheme} />
            ) : (
              <MoonIcon toggleTheme={toggleTheme} />
            )}
          </div>
        </header>
        <TaskList
          tasks={tasks}
          darkTheme={darkTheme}
          moveTask={moveTask}
          completeTask={completeTask}
          deleteTask={deleteTask}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
};

export default App;
