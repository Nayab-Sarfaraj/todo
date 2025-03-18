"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function addTodo() {
  await axios.post("http://localhost:8080/todo");

  revalidatePath("/test");
}
export async function updateTodo(formData) {
  await axios.put(`http://localhost:8080/todo/${formData.get("_id")}`, {
    title: formData.get("title"),
    description: formData.get("description"),
  });
  revalidatePath("/test");
}

export async function getTodos(page = 1) {
  const { data } = await axios.get(
    `http://localhost:8080/todo/all/?page=${page}`
  );

  return data;
}

export async function markAsDone(id) {
  await axios.put(`http://localhost:8080/todo/compelete/${id}`);
}
