import { useAppDispatch, useAppSelector } from "../App/hooks";
import { removeTodo, toggleTodo } from "../features/todosSlice";
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { PiTrashSimpleBold } from "react-icons/pi";

export default function TodoList() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((s) => s.todos.items);

  if (todos.length === 0) {
    return (
      <Card className="shadow-sm bg-blue-50 dark:bg-gray-800">
        <CardBody className="text-center py-10">
          <Typography variant="h6" className="text-blue-700 dark:text-blue-300">
            Aucune tâche pour l’instant
          </Typography>
          <Typography variant="small" className="opacity-70 dark:text-gray-400">
            Ajoute ta première tâche avec le formulaire ci-dessus.
          </Typography>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className="shadow-md bg-white dark:bg-gray-900 border border-blue-200 dark:border-gray-700">
      <CardBody className="divide-y divide-blue-100 dark:divide-gray-800">
        {todos.map(({ id, text, completed }) => (
          <div
            key={id}
            className="group flex items-center gap-3 py-3 transition-colors"
          >
            <input
              id={id}
              type="checkbox"
              checked={completed}
              onChange={() => dispatch(toggleTodo(id))}
              className="h-5 w-5 rounded border-blue-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />

            <label
              htmlFor={id}
              className={`flex-1 cursor-pointer select-none text-[15px] transition-all ${
                completed ? "line-through opacity-60" : "opacity-90"
              }`}
            >
              {text}
            </label>

            <Button
              type="button"
              size="sm"
              variant="text"
              color="blue"
              onClick={() => dispatch(removeTodo(id))}
              className="flex items-center gap-2 px-2 text-blue-500 hover:text-blue-700"
            >
              <PiTrashSimpleBold className="text-lg" />
              <span className="hidden sm:inline">Supprimer</span>
            </Button>
          </div>
        ))}
      </CardBody>
    </Card>
  );
}
