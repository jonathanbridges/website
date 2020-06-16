import React, { useContext } from "react";
import Figure from "react-bootstrap/Figure";
import { DarkModeContext } from "../../utilites/ThemeProvider";

const About: React.FC = () => {
  const theme = useContext(DarkModeContext);
  const { background, color, isDark } = theme.mode;

  return (
    <Figure className={isDark ? "bg-dark" : "bg-light"}>
      <Figure.Image />
      <Figure.Caption>Here's some filler text</Figure.Caption>
    </Figure>
  );
};

export default About;
