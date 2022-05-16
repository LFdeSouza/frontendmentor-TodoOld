import { default as mongoose } from "mongoose";
import { Counter } from "./Counter.mjs";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Tasks must have a title"] },
    completed: { type: Boolean, default: false },
    index: {
      type: Number,
      required: [true, "Tasks must have an index"],
      default: 0,
    },
  },
  { timestamps: true }
);

taskSchema.pre("validate", async function (next) {
  if (!this.index) {
    const counter = await Counter.findOneAndUpdate(
      "counter",
      { $inc: { seq_value: 1 } },
      { upsert: true, new: true }
    );
    this.index = counter.seq_value;
  }
  next();
});

export const Task = mongoose.model("task", taskSchema);
