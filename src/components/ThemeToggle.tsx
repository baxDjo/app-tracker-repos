import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";

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
<Button
  size="sm"
  variant="filled"
  onClick={() => setDark((d) => !d)}
  className={`flex items-center gap-2 transition-all duration-300 font-medium
    ${dark
      ? "bg-sky-400 hover:bg-sky-500 text-white"
      : "bg-amber-300 hover:bg-amber-400 text-gray-900"}`}
>
  {dark ? "🌙 Sombre" : "☀️ Clair"}
</Button>

  );
}
