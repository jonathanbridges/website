import React from "react";
import "./styles/App.scss";
import NavbarExtended from "./components/Navbar/Navbar";
import { DarkModeProvider } from "./utilites/ThemeProvider";

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <NavbarExtended
        expand="md"
        sticky="top"
        navLinks={["About", "Skills", "Projects", "Experience", "Contact"]}
      />
    </DarkModeProvider>
  );
};

export default App;
