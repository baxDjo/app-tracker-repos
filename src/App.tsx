// App.tsx (extrait)
import { ThemeProvider, Typography } from "@material-tailwind/react";
import FilterBar from "./components/FilterBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";
import { Route, Routes } from "react-router-dom";
import Dummy from "./components/Dummy";


export default function App() {
  return (
    <ThemeProvider>
    {/*
    <Routes>
       <Route path="/doms" element={<Dummy />} />
    </Routes>
    */}

      <main className="min-h-screen bg-transparent text-gray-900 dark:text-gray-100">
        <div className="mx-auto max-w-2xl px-4 py-10 space-y-6">
          <header className="flex items-center justify-between">
            <Typography variant="h4" className="font-semibold">
              ✅ Todo Pro
            </Typography>
            <ThemeToggle />
          </header>

          <FilterBar />
          <TodoForm />
          <TodoList />
        </div>
      </main>
    </ThemeProvider>

  );
}
