"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ToggleTheme() {
  const { setTheme } = useTheme();
  return (
    <div>
      <button onClick={() => setTheme("light")}>
        <Moon />
      </button>
      <button onClick={() => setTheme("dark")}>
        <Sun />
      </button>
    </div>
  );
}
