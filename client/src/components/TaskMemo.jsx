import React, { memo } from "react";
import Task from "./Task";

//This component exists for performcane, as when snapshot changes,
// all of the tasks are being rerendered
//With memoization, we cache the innerlist, and only rerender when there is changes to props

const TaskMemo = ({ tasks, completeTask, deleteTask, filter }) => {
  return tasks.map((task, index) => (
    <Task
      key={task._id}
      task={task}
      index={index}
      completeTask={completeTask}
      deleteTask={deleteTask}
      filter={filter}
    />
  ));
};

const areEqual = (prevProps, nextProps) =>
  prevProps.tasks === nextProps.tasks && prevProps.filter === nextProps.filter;

export default memo(TaskMemo, areEqual);
