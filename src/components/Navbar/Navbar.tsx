import React from "react";
import { Container, Nav, Navbar, NavbarProps } from "react-bootstrap";
import { ReactComponent as Logo } from "../../logo.svg";
import { ReactComponent as GitIcon } from "../../graphics/github-original.svg";
import { ReactComponent as LinkedinIcon } from "../../graphics/linkedin.svg";

import localStyles from "./Navbar.module.scss";

interface Props extends NavbarProps {
  /*
   * A list of links to render in the second <Nav> element.
   */
  navLinks: string[];
}

const App: React.FC<Props> = ({ bg, expand, navLinks, sticky, variant }) => {
  return (
    <Navbar bg={bg} variant={variant} expand={expand} sticky={sticky}>
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <Logo className={localStyles.logo} />
          Jonathan Bridges
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://github.com/jonathanbridges" target="_blank">
              <GitIcon className={localStyles.icon} />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/bridgesjonathan/"
              target="_blank"
            >
              <LinkedinIcon className={localStyles.icon} />
            </Nav.Link>
          </Nav>
          <Nav>
            {navLinks.map((text) => (
              <Nav.Link href={text}>{text}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default App;
