import { default as mongoose } from "mongoose";

const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  seq_value: { type: Number, required: true },
});

export const Counter = mongoose.model("counter", counterSchema);
