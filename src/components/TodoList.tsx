import { useAppDispatch, useAppSelector } from "../App/hooks";
import { toggleTodo, removeTodo } from "../features/todosSlice";
import { PiTrashSimpleBold } from "react-icons/pi";

/*Cette fonction est responsable de l'affichage des taches ajoutées */

export default function TodoList() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((s) => s.todos.items);

  if (todos.length === 0) {
    return (
      <div className="rounded-xl border border-blue-200 dark:border-gray-700 bg-blue-50 dark:bg-gray-800/70 p-8 text-center shadow-sm">
        <div className="text-blue-700 dark:text-blue-300 text-base font-medium">
          Aucune tâche pour l’instant
        </div>
        <div className="mt-1 text-sm opacity-70 dark:text-gray-300">
          Ajoute ta première tâche avec le formulaire ci-dessus.
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-blue-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm shadow-md">
      <div className="divide-y divide-blue-100 dark:divide-gray-800">
        {todos.map(({ id, text, completed }) => (
          <div
            key={id}
            className="group flex items-center gap-3 px-4 py-3 first:rounded-t-xl last:rounded-b-xl transition-colors"
          >
            {/* Checkbox */}
            <input
              id={id}
              type="checkbox"
              checked={completed}
              onChange={() => dispatch(toggleTodo(id))}
              className="h-5 w-5 rounded border-blue-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
              aria-label={`Marquer ${completed ? "active" : "terminée"}`}
            />

            {/* Texte */}
            <label
              htmlFor={id}
              className={`flex-1 cursor-pointer select-none text-[15px] transition-opacity ${
                completed ? "line-through opacity-60" : "opacity-90 group-hover:opacity-100"
              }`}
              title={text}
            >
              {text}
            </label>

            {/* Bouton supprimer (natif) */}
            <button
              type="button"
              onClick={() => { dispatch(removeTodo(id)); }}
              className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium
                         text-blue-600 hover:text-white hover:bg-blue-600/90
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`Supprimer la tâche: ${text}`}
            >
              <PiTrashSimpleBold className="text-lg" />
              <span className="hidden sm:inline">Supprimer</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
