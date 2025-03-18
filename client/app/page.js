import { addTodo } from "@/action";
import Todos from "@/components/Todos.jsx";
import axios from "axios";

async function page() {
  // const [page, setPage] = useState(1);
  const { data } = await axios.get("http://localhost:8080/todo/all?page=1");

  return (
    <div className="min-h-screen flex items-center justify-center gap-5 flex-col">
      <Todos data={data} />
    </div>
  );
}

export default page;
