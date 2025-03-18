"use client";
import { useState } from "react";
import Pagination from "./Pagination";
import UpdateTodoForm from "./UpdateTodoForm";
import { addTodo, getTodos } from "@/action";

function Todos({ data }) {
  const [todos, setTodos] = useState(data?.todos);
  const [page, setPage] = useState(1);
  const [selectedTodo, setSelectedTodo] = useState();

  return (
    <>
      <form
        action={async () => {
          addTodo();
          const temp = await getTodos();
          setTodos(temp.todos);
        }}
        className="my-5"
      >
        <button className="border-white border-1 p-2 hover:bg-gray-900 rounded-lg">
          Add todo
        </button>
      </form>
      <div className="flex flex-col md:flex-row items-start justify-center w-full min-h-screen p-6 gap-6">
        <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold text-white">To-Do List</h1>
          {todos.length > 0 ? (
            todos?.map((item) => (
              <button
                key={item._id}
                className="bg-gray-700 text-white w-full md:w-[80%] p-4 rounded-lg text-left shadow-md hover:bg-gray-600 transition-all duration-200"
                onClick={() => setSelectedTodo(item)}
              >
                <div className="font-semibold">{item.title}</div>
                <div className="text-gray-300">{item.description}</div>
              </button>
            ))
          ) : (
            <div>
              <div className="text-5xl">Not found</div>
            </div>
          )}
        </div>

        {/* Right Side - Update Todo Form */}
        {selectedTodo && (
          <div className="w-full md:w-2/5 bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-4">
              Edit To-Do
            </h2>
            <UpdateTodoForm
              todo={selectedTodo}
              setTodo={setSelectedTodo}
              page={page}
              setTodos={setTodos}
            />

            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setSelectedTodo(null)}
            >
              Close Form
            </button>
          </div>
        )}
      </div>

      <Pagination page={page} setTodos={setTodos} setPage={setPage} />
    </>
  );
}

export default Todos;
