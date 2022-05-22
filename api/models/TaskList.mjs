import { default as mongoose } from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Tasks must have a title"] },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const taskListSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    tasks: [taskSchema],
  },
  { timestamps: true }
);

export const TaskList = mongoose.model("tasklists", taskListSchema);
