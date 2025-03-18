import Todo from "../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.create({
      title: title || "New Title",
      description: description || "New Description",
    });
    console.log(todo);
    return res.status(201).json({ success: true, todo });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const toBeSkipped = 6 * (page - 1);

    const todos = await Todo.find({ isCompleted: { $eq: false } })
      .sort({ date: -1 })
      .skip(toBeSkipped)
      .limit(6);
    return res.status(200).json({ success: true, todos, count: todos.length });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await Todo.findById(id);
    if (!todo)
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    todo.title = title;
    todo.description = description;
    await todo.save();
    return res.status(200).json({ success: true, todo });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ success: true, message: "Item deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

export const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo)
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    return res.status(200).json({ success: true, todo });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

export const markAsDone = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);
    todo.isCompleted = true;
    await todo.save();
    return res.status(200).json({ success: true, message: "marked as done" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};
