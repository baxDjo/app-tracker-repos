import { useAppDispatch, useAppSelector } from "../App/hooks";
import { setFilter } from "../features/todosSlice";


/**
 * Affiche la barre de filtre des tâches.
 * @param props.filter Filtre actif ("all" | "active" | "done").
 * @param props.onChange Callback appelé lors d’un changement de filtre.
 * @example <FilterBar filter="all" onChange={setFilter} />
 */

export default function FilterBar() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((s) => s.todos.filter);
  const items = useAppSelector((s) => s.todos.items);
  const visible =
    filter === "active" ? items.filter(t => !t.completed)
      : filter === "done" ? items.filter(t => t.completed)
        : items;

  const isActive = (v: "all" | "active" | "done") => filter === v;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {(["all", "active", "done"] as const).map((v) => {
        const active = isActive(v);
        return (
          <button
            key={v}
            type="button"
            onClick={() => dispatch(setFilter(v))}
            aria-pressed={active}
            className={`capitalize rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200
          ${active
                ? "bg-blue-600 text-white shadow-sm hover:bg-blue-700"
                : "border-blue-400 text-blue-600 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-300 dark:hover:bg-blue-900/40"
              }`}
          >
            {v === "all" ? "Toutes" : v === "active" ? "Actives" : "Terminées"}
          </button>
        );
      })}

      <span className="ml-2 text-sm opacity-70 text-gray-700 dark:text-gray-300">
        {visible.length} sur {items.length} tâches
      </span>
    </div>

  );
}
