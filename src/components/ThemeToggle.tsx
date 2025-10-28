// ThemeToggle.tsx
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(() =>
    typeof window !== "undefined" ? document.documentElement.classList.contains("dark") : false
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <Button size="sm" variant="outlined" onClick={() => setDark(d => !d)}>
      {dark ? "🌙 Sombre" : "☀️ Clair"}
    </Button>
  );
}
