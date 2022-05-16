import express from "express";
import {
  createTask,
  deleteTask,
  completeTask,
  reorderTasks,
  getTasks,
} from "../controllers/tasksController.mjs";

const router = express.Router();

router.get("/get-task", getTasks);
router.post("/create-task", createTask);
router.delete("/delete-task", deleteTask);
router.put("/complete-task", completeTask);
router.put("/reorder-tasks", reorderTasks);

export default router;
