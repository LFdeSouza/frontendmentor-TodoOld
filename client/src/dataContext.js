import { createContext, useState } from "react";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      content: "Complete Javascript online course",
      position: 1,
      id: 1,
      completed: false,
    },
    { content: "Jog around the park 3x", position: 2, id: 2, completed: true },
    { content: "10 minutes meditation", position: 3, id: 3, completed: true },
    { content: "Read for 1h", position: 4, id: 4, completed: false },
    { content: "Pick up groceries", position: 5, id: 5, completed: false },
    {
      content: "Complete frontendmentor Todo challenge",
      position: 6,
      id: 6,
      completed: false,
    },
  ]);

  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      {children}
    </TasksContext.Provider>
  );
};
