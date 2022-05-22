import { TaskList } from "../models/TaskList.mjs";

export const getTasks = async (req, res) => {
  try {
    const taskList = await TaskList.findById("TaskList");

    return res.status(200).json({ tasks: taskList.tasks });
  } catch (error) {
    const errors = handleErrors(error);
    return res.status(400).json({ errors });
  }
};

export const createTask = async (req, res) => {
  try {
    const taskList = await TaskList.findById("TaskList");
    taskList.tasks.push(req.body);
    await taskList.save();
    return res
      .status(200)
      .json({ newTask: taskList.tasks[taskList.tasks.length - 1] });
  } catch (error) {
    const errors = handleErrors(error);
    return res.status(400).json({ errors });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskList = await TaskList.findById("TaskList");
    const deletedTask = taskList.tasks.id(req.body.id).remove();
    await taskList.save();
    return res.status(200).json({ deletedTask });
  } catch (error) {
    const errors = handleErrors(error);
    return res.status(400).json({ errors });
  }
};

export const clearCompleted = async (req, res) => {
  try {
    const taskList = await TaskList.updateOne(
      { _id: "TaskList" },
      { $pull: { tasks: { completed: true } } }
    );

    // await taskList.save();
    return res.status(200).json({ taskList });
  } catch (error) {
    const errors = handleErrors(error);
    return res.status(400).json({ errors });
  }
};

export const toggleCompleteTask = async (req, res) => {
  try {
    const taskList = await TaskList.findById("TaskList");
    taskList.tasks.id(req.body.id).completed = !taskList.tasks.id(req.body.id)
      .completed;

    await taskList.save();
    return res.json({ task: taskList.tasks.id(req.body.id) });
  } catch (error) {
    const errors = handleErrors(error);
    return res.status(400).json({ errors });
  }
};

export const reorderTasks = async (req, res) => {
  try {
    const taskList = await TaskList.findById("TaskList");
    const task = taskList.tasks.id(req.body.id);
    taskList.tasks.splice(req.body.sourceIndex, 1);
    taskList.tasks.splice(req.body.destinationIndex, 0, task);
    await taskList.save();

    return res.json({ tasks: taskList.tasks });
  } catch (error) {
    const errors = handleErrors(error);
    return res.status(400).json({ errors });
  }
};

const handleErrors = (error) => {
  console.log(error);
  const errors = {};

  if (error.message.includes("validation failed")) {
    Object.values(error.errors).forEach(
      (err) => (errors[err.properties.path] = err.properties.message)
    );
    return errors;
  }
};
