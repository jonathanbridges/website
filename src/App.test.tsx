import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "@/App";
import { ThemeProvider } from "@/context/ThemeContext";

describe("App", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders primary portfolio sections", () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(document.getElementById("about")).toBeInTheDocument();
    expect(document.getElementById("skills")).toBeInTheDocument();
    expect(document.getElementById("experience")).toBeInTheDocument();
    expect(document.getElementById("contact")).toBeInTheDocument();
  });

  it("renders header home control", () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    expect(screen.getByRole("button", { name: "Cycle theme" })).toBeInTheDocument();
  });
});
