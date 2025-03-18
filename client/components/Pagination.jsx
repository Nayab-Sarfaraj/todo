import { getTodos } from "@/action";
import React from "react";

function Pagination({ page, setTodos, setPage }) {
  const arr = Array.from({ length: 5 }, (_, i) => i + 1);
  const changePage = async (page) => {
    console.log(page);
    const data = await getTodos(page);

    setPage(page);
    setTodos(data?.todos);
  };
  return (
    <div className="flex items-center justify-center w-full gap-3">
      <button
        className="hover:underline"
        onClick={() => {
          if (page !== 1) changePage(page - 1);
        }}
      >
        Prev
      </button>
      {arr.map((item, idx) => (
        <button
          className={`hover:underline ${page === item && "underline"}`}
          onClick={() => {
            changePage(idx + 1);
          }}
          key={idx}
        >
          {item}
        </button>
      ))}
      <button
        className="hover:underline"
        onClick={() => {
          changePage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
