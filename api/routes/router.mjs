import express from "express";
import {
  createTask,
  deleteTask,
  toggleCompleteTask,
  reorderTasks,
  getTasks,
  clearCompleted,
} from "../controllers/tasksController.mjs";

const router = express.Router();

router.get("/get-tasks", getTasks);
router.post("/create-task", createTask);
router.delete("/delete-task", deleteTask);
router.delete("/clear-completed", clearCompleted);
router.put("/complete-task", toggleCompleteTask);
router.put("/reorder-tasks", reorderTasks);

export default router;
