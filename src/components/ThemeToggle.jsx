"use client"

import { useTheme } from "../context/ThemeContext"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-full p-2 transition-colors hover:bg-[color:var(--surface-2)]"
      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
    >
      {theme === "dark" ? (
        // Sun
        <svg width="20" height="20" viewBox="0 0 24 24" className="text-[color:var(--text)]">
          <path
            fill="currentColor"
            d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.8l1.8-1.8m10.48 0l1.79-1.79l1.79 1.79l-1.79 1.8l-1.79-1.8M12 4V1h-0v3h0m0 19v-3h-0v3h0M4 12H1v0h3v0m19 0h-3v0h3v0M6.76 19.16l-1.8 1.79l-1.79-1.79l1.79-1.8l1.8 1.8m10.48 0l1.79 1.79l1.79-1.79l-1.79-1.8l-1.79 1.8M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8Z"
          />
        </svg>
      ) : (
        // Moon
        <svg width="20" height="20" viewBox="0 0 24 24" className="text-[color:var(--text)]">
          <path fill="currentColor" d="M12 2a9.92 9.92 0 0 0-1 .05a10 10 0 1 0 10.95 10a8 8 0 1 1-9.95-10Z" />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle
