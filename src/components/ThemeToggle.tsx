import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
        ${
          dark
            ? "bg-sky-400 hover:bg-sky-500 text-white focus:ring-sky-400"
            : "bg-amber-300 hover:bg-amber-400 text-gray-900 focus:ring-amber-300"
        }`}
    >
      {dark ? "🌙 Sombre" : "☀️ Clair"}
    </button>
  );
}
