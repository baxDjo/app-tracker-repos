import { useAppDispatch, useAppSelector } from "../App/hooks";
import { setFilter } from "../features/todosSlice";
import { Button } from "@material-tailwind/react";

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
      {(["all", "active", "done"] as const).map((v) => (
        <Button
          key={v}
          type="button"
          size="sm"
          variant={isActive(v) ? "filled" : "outlined"}
          color="blue"
          onClick={() => dispatch(setFilter(v))}
          aria-pressed={isActive(v)}
          className={`capitalize ${
            isActive(v)
              ? "bg-blue-600 text-white"
              : "border-blue-400 text-blue-600 hover:bg-blue-50"
          }`}
        >
          {v === "all" ? "Toutes" : v === "active" ? "Actives" : "Terminées"}
        </Button>
      ))}
      <span className="ml-2 text-sm opacity-70 text-gray-700 dark:text-gray-300">
        {visible.length} sur {items.length} tâches
      </span>
    </div>
  );
}
