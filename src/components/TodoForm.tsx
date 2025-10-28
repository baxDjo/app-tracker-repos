import { useState } from "react";
import { useAppDispatch } from "../App/hooks";
import { addTodo } from "../features/todosSlice";
import { Button, Input } from "@material-tailwind/react";

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
    <form onSubmit={onSubmit} className="flex items-center gap-2">
      <Input
        crossOrigin=""
        label="Ajouter une nouvelle tâche"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        color="blue"
        className="!border-blue-400 focus:!border-blue-500 focus:!ring-blue-500 text-gray-900 bg-blue-50 dark:bg-gray-800 dark:text-gray-100 rounded-md"
        labelProps={{
          className: "!text-blue-600 dark:!text-blue-300 font-medium",
        }}
        containerProps={{ className: "min-w-0 flex-1" }}
      />
      <Button
        type="submit"
        disabled={!value.trim()}
        className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 
             text-white font-semibold shadow-md rounded-lg px-5 py-2 transition-all duration-200"
      >
        ➕ Ajouter
      </Button>

    </form>
  );
}
