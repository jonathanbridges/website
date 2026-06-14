import React from "react";
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import App from "./App";

describe("portfolio app", (): void => {
  it("renders the navbar", async (): Promise<void> => {
    render(<App />);

    const navbarBrand: HTMLElement = await screen.findByTestId("navbar");
    expect(navbarBrand).toBeInTheDocument();
  });
  it("renders the jumbotron", async (): Promise<void> => {
    render(<App />);

    const jumbotron: HTMLElement = await screen.findByTestId("home");
    expect(jumbotron).toBeInTheDocument();
  });
  it("renders the about section", async (): Promise<void> => {
    render(<App />);

    const about: HTMLElement = await screen.findByTestId("about");
    expect(about).toBeInTheDocument();
  });
  it("renders the skills section", async (): Promise<void> => {
    render(<App />);

    const skills: HTMLElement = await screen.findByTestId("skills");
    expect(skills).toBeInTheDocument();
  });
  it("renders the experience section", async (): Promise<void> => {
    render(<App />);

    const experience: HTMLElement = await screen.findByTestId("experience");
    expect(experience).toBeInTheDocument();
  });
  it("renders the contact section", async (): Promise<void> => {
    render(<App />);

    const contact: HTMLElement = await screen.findByTestId("contact");
    expect(contact).toBeInTheDocument();
  });
  it("launches the modal", async (): Promise<void> => {
    render(<App />);

    const btn: HTMLElement = await screen.findByTestId("mondrian-btn");
    fireEvent.click(btn);
    const modal: HTMLElement = await screen.findByTestId("mondrian");
    expect(modal).toBeInTheDocument();
  });
  it("hides the modal", async (): Promise<void> => {
    render(<App />);
    const btn: HTMLElement = await screen.findByTestId("mondrian-btn");
    fireEvent.click(btn);
    const modal: HTMLElement = await screen.findByTestId("mondrian");
    expect(modal).toBeInTheDocument();
    fireEvent.keyDown(modal, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });
    await waitFor(() => {
      expect(screen.queryByTestId).not.toBeInTheDocument();
    });
  });
});
