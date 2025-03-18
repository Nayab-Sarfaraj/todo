"use client";
import { getTodos, markAsDone, updateTodo } from "@/action";
import React, { useRef } from "react";

function UpdateTodoForm({ todo, setTodo, page, setTodos }) {
  const ref = useRef();
  return (
    <>
      <form
        action={async (formData) => {
          formData.append("_id", todo._id);
          await updateTodo(formData);
          ref.current.reset();
          setTodo(null);
          const data = await getTodos(page);
          setTodos(data?.todos);
        }}
        className=" bg-gray-800 p-6 rounded-lg w-full"
        ref={ref}
      >
        <label className="text-white block mb-2">Title:</label>
        <input
          type="text"
          name="title"
          defaultValue={todo.title}
          className="w-full p-2 rounded bg-gray-700 text-white mb-4 "
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          required
        />

        <label className="text-white block mb-2">Description:</label>
        <textarea
          name="description"
          defaultValue={todo.description}
          className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          required
        />

        <button
          type="submit"
          className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded w-full"
        >
          Update To-Do
        </button>
      </form>
      <button
        className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded  mr-4"
        onClick={async () => {
          await markAsDone(todo._id);
          setTodo(null);
          const data = await getTodos(page);
          setTodos(data?.todos);
        }}
      >
        Mark As Done
      </button>
    </>
  );
}

export default UpdateTodoForm;
