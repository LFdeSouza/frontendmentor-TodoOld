import { Task } from "../models/Task.mjs";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json({ tasks });
  } catch (error) {
    const errors = handleErrors(error);
    return res.status(400).json({ errors });
  }
};

export const createTask = async (req, res) => {
  try {
    const newTask = await Task.create({
      title: req.body.title,
    });

    return res.status(200).json({ newTask });
  } catch (error) {
    const errors = handleErrors(error);
    return res.status(400).json({ errors });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.body.id);
    if (!task) return res.status(400).json({ msg: "Task not found" });

    return res.status(200).json({ msg: "Task deleted" });
  } catch (error) {
    const errors = handleErrors(error);
    return res.status(400).json({ errors });
  }
};

export const completeTask = async (req, res) => {
  try {
    const task = await Task.findById(req.body.id);
    task.completed = !task.completed;

    await task.save();
    return res.json({ task });
  } catch (error) {
    const errors = handleErrors(error);
    return res.status(400).json({ errors });
  }
};

export const reorderTasks = async (req, res) => {
  try {
    const [task1, task2] = await Task.find({
      _id: { $in: [req.body.id1, req.body.id2] },
    });

    [task1.index, task2.index] = [task2.index, task1.index];

    return res.json({ task1, task2 });
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
