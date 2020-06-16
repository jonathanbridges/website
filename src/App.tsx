import React from "react";
import "./styles/App.scss";
import NavbarExtended from "./components/Navbar/Navbar";
import { DarkModeProvider } from "./utilites/ThemeProvider";
import About from "./components/About/About";

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <NavbarExtended
        expand="lg"
        sticky="top"
        navLinks={["About", "Skills", "Projects", "Experience", "Contact"]}
      />
      <main>
        <About />
      </main>
    </DarkModeProvider>
  );
};

export default App;
