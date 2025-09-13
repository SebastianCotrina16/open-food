import React from "react";
import { useTheme } from "../useTheme";

const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border
                  border-slate-300 dark:border-slate-600
                  text-slate-700 dark:text-slate-200 ${className}`}
      title={`Switch to ${next} mode`}
    >
      <span aria-hidden>{theme === "dark" ? "☀️" : "🌙"}</span>
      <span className="font-light">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
};

export default ThemeToggle;
