import { useState, useEffect, createContext } from "react";
import { produce } from "immer";
import axios from "axios";
import { MoonIcon, SunIcon } from "./components/Icons";
import TaskList from "./components/TaskList";
export const ThemeContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => setDarkTheme(!darkTheme);

  const fetchTasks = async () => {
    const response = await axios.get("/api/get-tasks");
    setTasks(response.data.tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async (title) => {
    const res = await axios.post("/api/create-task", { title });
    setTasks(
      produce(tasks, (draft) => {
        draft.push(res.data.newTask);
      })
    );
  };

  const moveTask = async (sourceIndex, destinationIndex, id) => {
    setTasks(
      produce(tasks, (draft) => {
        draft.splice(sourceIndex, 1);
        draft.splice(destinationIndex, 0, tasks[sourceIndex]);
      })
    );
    await axios.put("/api/reorder-tasks", {
      sourceIndex,
      destinationIndex,
      id,
    });
  };

  const completeTask = async (index, id) => {
    setTasks(
      produce(tasks, (draft) => {
        draft[index].completed = !draft[index].completed;
      })
    );
    await axios.put("/api/complete-task", { id });
  };

  const deleteTask = async (index, id) => {
    setTasks(
      produce(tasks, (draft) => {
        draft.splice(index, 1);
      })
    );
    await axios({
      method: "delete",
      url: "/api/delete-task",
      data: { id },
    });
  };

  const clearCompleted = async () => {
    setTasks(
      produce(tasks, (draft) => draft.filter((task) => !task.completed))
    );
    await axios({
      method: "delete",
      url: "/api/clear-completed",
    });
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <div className={darkTheme ? `dark` : undefined}>
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
            createTask={createTask}
            moveTask={moveTask}
            completeTask={completeTask}
            deleteTask={deleteTask}
            clearCompleted={clearCompleted}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
