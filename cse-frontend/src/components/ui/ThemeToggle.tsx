"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cse-theme");

    const isDark =
      saved === "dark" ||
      (!saved &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark-theme", isDark);

    setDark(isDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !dark;

    document.documentElement.classList.add("theme-transition");

    document.documentElement.classList.toggle("dark-theme", next);

    localStorage.setItem("cse-theme", next ? "dark" : "light");

    setDark(next);

    window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 320);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="theme-toggle"
      >
        <Moon size={15} strokeWidth={1.8} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light theme" : "Dark theme"}
      className="theme-toggle"
    >
      {dark ? (
        <Sun
          size={15}
          strokeWidth={1.8}
          className="theme-toggle-icon"
        />
      ) : (
        <Moon
          size={15}
          strokeWidth={1.8}
          className="theme-toggle-icon"
        />
      )}
    </button>
  );
}