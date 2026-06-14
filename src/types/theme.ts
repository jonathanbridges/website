export type Theme = "light" | "dark" | "geocities";

export const THEMES: Theme[] = ["light", "dark", "geocities"];

export const THEME_STORAGE_KEY = "portfolio-theme";

export const THEME_LABELS: Record<Theme, string> = {
  light: "Light",
  dark: "Dark",
  geocities: "GeoCities",
};
