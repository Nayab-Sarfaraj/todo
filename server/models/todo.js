import mongoose, { Model } from "mongoose";
import { Schema } from "mongoose";

const TodoSchema = Schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now },
  isCompleted: { type: Boolean, default: false },
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
