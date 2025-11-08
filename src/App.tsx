// App.tsx (extrait)
import { ThemeProvider, Typography } from "@material-tailwind/react";
import FilterBar from "./components/FilterBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";
import { FaCheckCircle } from "react-icons/fa";

export default function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-transparent text-gray-900 dark:text-gray-100">
        <div className="mx-auto max-w-2xl px-4 py-10 space-y-6">
          <header className="space-y-3">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-extrabold tracking-tight">
                <span className="mr-2 align-middle text-blue-600"></span>
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
                  <FaCheckCircle className="text-blue-600" />Todo App Tracker
                </span>
              </h1>
              <ThemeToggle />
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Gérez vos tâches avec élégance — rapide, clair, efficace.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent dark:via-blue-700/40" />
          </header>

          <FilterBar />
          <TodoForm />
          <TodoList />
        </div>
      </main>
    </ThemeProvider>

  );
}
