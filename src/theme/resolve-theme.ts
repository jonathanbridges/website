import {
  THEME_STORAGE_KEY,
  THEMES,
  type Theme,
} from "@/types/theme";

/** Reads the saved theme from localStorage, with legacy dark-mode fallback. */
export function getStoredTheme(): Theme {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored && THEMES.includes(stored as Theme)) {
    return stored as Theme;
  }

  const legacyDark = localStorage.getItem("DarkMode");
  if (legacyDark) {
    try {
      const parsed = JSON.parse(legacyDark) as { isDark?: boolean };
      return parsed.isDark ? "dark" : "light";
    } catch {
      return "light";
    }
  }

  return "dark";
}

/** Sets `data-theme` on the document root for CSS variable switching. */
export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
}
