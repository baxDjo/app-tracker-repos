import { useState } from "react";
import { useAppDispatch } from "../App/hooks";
import { addTodo } from "../features/todosSlice";


/**
 * Ajoute une tache dans la liste des taches.
 */

export default function TodoForm() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = value.trim();
    if (!v) return;
    dispatch(addTodo(v));
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-3 w-full">
      <input
        type="text"
        placeholder="Ajouter une nouvelle tâche"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 rounded-lg border border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200
               bg-blue-50 dark:bg-gray-800 dark:text-gray-100 px-4 py-2 outline-none transition-all duration-200"
      />

      <button
        type="submit"
        disabled={!value.trim()}
        className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 
               text-white font-semibold shadow-md px-5 py-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ➕ Ajouter
      </button>
    </form>

  );
}
