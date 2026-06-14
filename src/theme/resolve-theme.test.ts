import { afterEach, describe, expect, it } from "vitest";
import { applyTheme, getStoredTheme } from "@/theme/resolve-theme";
import { THEME_STORAGE_KEY } from "@/types/theme";

describe("resolve-theme", () => {
  afterEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  it("returns dark when no theme is stored", () => {
    expect(getStoredTheme()).toBe("dark");
  });

  it("returns a stored theme when valid", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "geocities");
    expect(getStoredTheme()).toBe("geocities");
  });

  it("falls back to dark for invalid stored themes", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "neon");
    expect(getStoredTheme()).toBe("dark");
  });

  it("applies the theme to the document element", () => {
    applyTheme("light");
    expect(document.documentElement.dataset.theme).toBe("light");
  });
});
