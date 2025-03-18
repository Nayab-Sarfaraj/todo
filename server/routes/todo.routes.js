import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodo,
  markAsDone,
  updateTodo,
} from "../controller/todo.controller.js";

const router = Router();

router.post("/", createTodo);
router.get("/all", getAllTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.get("/:id", getTodo);
router.put("/compelete/:id", markAsDone);
export default router;
