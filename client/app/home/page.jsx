import axios from "axios";
import { revalidatePath } from "next/cache";

// Fetch the existing To-Do (SSR)
async function getTodo(id) {
  const { data } = await axios.get(`http://localhost:8080/todo/${id}`);
  return data;
}

// Server Action to update the To-Do
async function updateTodo(formData) {
  "use server";

  const id = formData.get("id");
  const title = formData.get("title");
  const description = formData.get("description");

  await axios.put(`http://localhost:8080/todo/${id}`, { title, description });

  revalidatePath(`/todo/${id}`); // Refresh UI after updating
}

export default async function EditTodo({ params }) {
  const todo = await getTodo(params.id);

  return (
    <div className="flex items-center justify-center h-screen">
      <form action={updateTodo} className="w-1/3 bg-gray-800 p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-white mb-4">Edit To-Do</h1>

        {/* Hidden Field to store ID */}
        <input type="hidden" name="id" value={todo._id} />

        <label className="text-white block mb-2">Title:</label>
        <input
          type="text"
          name="title"
          defaultValue={todo.title}
          className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          required
        />

        <label className="text-white block mb-2">Description:</label>
        <textarea
          name="description"
          defaultValue={todo.description}
          className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          required
        />

        <button
          type="submit"
          className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded w-full"
        >
          Update To-Do
        </button>
      </form>
    </div>
  );
}
