import React from "react";
import "./styles/App.scss";
import Container from "react-bootstrap/Container";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        sticky="top"
        navLinks={["About", "Skills", "Projects", "Experience", "Contact"]}
      />
      <Container />
    </>
  );
};

export default App;
