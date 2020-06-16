import React, { useContext } from "react";
import { Container, Nav, Navbar, NavbarProps } from "react-bootstrap";
import { ReactComponent as GitIcon } from "../../graphics/github-original.svg";
import { ReactComponent as LinkedinIcon } from "../../graphics/linkedin.svg";
import { DarkModeContext } from "../../utilites/ThemeProvider";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import localStyles from "./Navbar.module.scss";

interface Props extends NavbarProps {
  /*
   * A list of links to render in the second <Nav> element.
   */
  navLinks: string[];
}

const NavbarExtended: React.FC<Props> = ({ expand, navLinks, sticky }) => {
  const theme = useContext(DarkModeContext);
  const { background, color, isDark } = theme.mode;

  const setTheme = (darkMode: DarkModeContext) => {
    const isDark = darkMode.mode.isDark;
    darkMode.dispatch(!isDark);
  };

  return (
    <Navbar
      bg={isDark ? "dark" : "light"}
      variant={isDark ? "dark" : "light"}
      expand={expand}
      sticky={sticky}
      className={localStyles.transition}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          Jonathan Bridges
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://github.com/jonathanbridges" target="_blank">
              <GitIcon
                className={isDark ? localStyles.icon : localStyles.iconinverted}
              />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/bridgesjonathan/"
              target="_blank"
            >
              <LinkedinIcon
                className={isDark ? localStyles.icon : localStyles.iconinverted}
              />
            </Nav.Link>
            <Navbar.Text className="d-inline-flex nav-link">
              Dark Mode
              <DarkModeToggle onClick={() => setTheme(theme)} isDark={isDark} />
            </Navbar.Text>
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

export default NavbarExtended;
