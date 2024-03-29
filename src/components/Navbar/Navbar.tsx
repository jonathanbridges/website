import React, { RefObject, useContext, useState } from "react";
import { Container, Nav, Navbar, NavbarProps } from "react-bootstrap";
import { ReactComponent as GitIcon } from "../../graphics/github-original.svg";
import { ReactComponent as LinkedinIcon } from "../../graphics/linkedin.svg";
import { DarkModeContext } from "../../utilites/ThemeProvider";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import localStyles from "./Navbar.module.scss";

interface Props extends NavbarProps {
  /**
   * Section titles and references
   */
  sections: Record<string, RefObject<HTMLDivElement>>;
  /**
   * Event handler for scrolling to sections after clicking a nav link
   */
  handleClick: (sectionReference: React.RefObject<HTMLDivElement>) => void;
}

const NavbarExtended: React.FC<Props> = ({ sections, handleClick }) => {
  const theme = useContext(DarkModeContext);
  const { isDark } = theme.mode || {};
  const [active, setActive] = useState<string>("");

  const {
    brand,
    toggle,
    icon,
    iconinverted,
    darktoggle,
    link,
    unstyled,
    leftNav,
  } = localStyles;

  const variant = isDark ? "dark" : "light";

  const setTheme = (darkMode: DarkModeContext): void => {
    const isDark = darkMode.mode.isDark;
    darkMode.dispatch(!isDark);
  };

  const renderNavLinks = (): React.ReactElement[] => {
    return Object.keys(sections).map((section: string) => (
      <Nav.Link
        key={section}
        className={isDark ? link : ""}
        eventKey={section}
        active={active === section}
        onClick={() => {
          handleClick(sections[section]);
          setActive(section);
        }}
      >
        {section}
      </Nav.Link>
    ));
  };

  return (
    <Navbar
      bg={variant}
      className="transition"
      fixed={"top"}
      expand={"lg"}
      collapseOnSelect
      variant={variant}
    >
      <Container>
        <Navbar.Brand
          as={"h1"}
          onClick={() => {
            handleClick(sections["Home"]);
            setActive("Home");
          }}
          className={brand}
          data-testid="navbar"
        >
          Jonathan Bridges
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={toggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`mr-auto ${leftNav}`}>
            <Nav.Link
              href="https://github.com/jonathanbridges"
              target="_blank"
              className={unstyled}
            >
              <GitIcon className={isDark ? icon : iconinverted} />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/bridgesjonathan/"
              target="_blank"
              className={unstyled}
            >
              <LinkedinIcon className={isDark ? icon : iconinverted} />
            </Nav.Link>
            <Navbar.Text className={darktoggle}>
              Dark Mode
              <DarkModeToggle onClick={() => setTheme(theme)} isDark={isDark} />
            </Navbar.Text>
          </Nav>
          <Nav>{renderNavLinks()}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarExtended;
