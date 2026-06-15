import { useContext } from "react";
import { ThemeContext } from "@/context/theme-context";

/** Reads the active theme and theme actions from `ThemeProvider`. */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
