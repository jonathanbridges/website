import React, { useContext } from "react";
import { DarkModeContext } from "../../utilites/ThemeProvider";
import { ReactComponent as ReactIcon } from "../../graphics/react-original.svg";
import { ReactComponent as TypescriptIcon } from "../../graphics/typescript-plain.svg";
import { ReactComponent as ApolloIcon } from "../../graphics/apollo.svg";
import { ReactComponent as NextJSIcon } from "../../graphics/next-js.svg";
import { ReactComponent as JavascriptIcon } from "../../graphics/javascript-plain.svg";
import { ReactComponent as SassIcon } from "../../graphics/sass-original.svg";
import { ReactComponent as RubyIcon } from "../../graphics/ruby-plain.svg";
import { ReactComponent as AmazonIcon } from "../../graphics/amazonwebservices-original.svg";
import { ReactComponent as BoostrapIcon } from "../../graphics/bootstrap-plain.svg";
import { ReactComponent as CSSIcon } from "../../graphics/css3-plain.svg";
import { ReactComponent as D3Icon } from "../../graphics/d3js-plain.svg";
import { ReactComponent as DockerIcon } from "../../graphics/docker-plain.svg";
import { ReactComponent as ExpressIcon } from "../../graphics/express-original.svg";
import { ReactComponent as GitIcon } from "../../graphics/git-plain.svg";
import { ReactComponent as HerokuIcon } from "../../graphics/heroku-plain.svg";
import { ReactComponent as HTMLIcon } from "../../graphics/html5-plain.svg";
import { ReactComponent as JavaIcon } from "../../graphics/java-plain.svg";
import { ReactComponent as MySQLIcon } from "../../graphics/mysql-plain.svg";
import { ReactComponent as NodeJSIcon } from "../../graphics/nodejs-plain.svg";
import { ReactComponent as PostgresIcon } from "../../graphics/postgresql-plain.svg";
import { ReactComponent as RailsIcon } from "../../graphics/rails-plain.svg";
import { ReactComponent as ReduxIcon } from "../../graphics/redux-original.svg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import localStyles from "./Skills.module.scss";
import SectionHeader from "../SectionHeader/SectionHeader";

const Skills: React.FC = () => {
  const theme = useContext(DarkModeContext);
  const { isDark } = theme.mode || {};
  const { grid, inverted, svg } = localStyles;
  const animatedSvgClassname = isDark
    ? `${inverted} transition`
    : `${svg} transition`;

  /**
   * Dev icons
   */
  const icons: Array<React.ReactElement> = [
    <ReactIcon className="mw-100 h-auto" />,
    <TypescriptIcon className="mw-100 h-auto" />,
    <ApolloIcon className="mw-100 h-auto" />,
    <NextJSIcon className={`${animatedSvgClassname} mw-100 h-auto`} />,
    <JavascriptIcon className="mw-100 h-auto" />,
    <HTMLIcon className="mw-100 h-auto" />,
    <CSSIcon className="mw-100 h-auto" />,
    <SassIcon className="mw-100 h-auto" />,
    <BoostrapIcon className="mw-100 h-auto" />,
    <ReduxIcon className="mw-100 h-auto" />,
    <RubyIcon className="mw-100 h-auto" />,
    <RailsIcon className="mw-100 h-auto" />,
    <JavaIcon className="mw-100 h-auto" />,
    <PostgresIcon className="mw-100 h-auto" />,
    <MySQLIcon className="mw-100 h-auto" />,
    <NodeJSIcon className="mw-100 h-auto" />,
    <ExpressIcon className={`${animatedSvgClassname} mw-100 h-auto`} />,
    <AmazonIcon className="mw-100 h-auto" />,
    <GitIcon className="mw-100 h-auto" />,
    <HerokuIcon className="mw-100 h-auto" />,
    <DockerIcon className="mw-100 h-auto" />,
    <D3Icon className="mw-100 h-auto" />,
  ];

  /**
   * Titles associated with the dev icons
   */
  const iconTitles: string[] = [
    "React",
    "Typescript",
    "Apollo GraphQL",
    "NextJS",
    "Javascript",
    "HTML5",
    "CSS3",
    "Sass",
    "Bootstrap",
    "Redux",
    "Ruby",
    "Ruby on Rails",
    "Java",
    "PostgreSQL",
    "MySQL",
    "NodeJS",
    "ExpressJS",
    "Amazon Web Services",
    "Git",
    "Heroku",
    "Docker",
    "D3JS",
  ];

  /**
   * Renders a tooltip showing the title for each dev icon
   *
   * @param iconElement the dev icon
   * @param iconTitle the title associated with the icon
   */
  const overlayWrapper = (
    iconElement: React.ReactElement,
    iconTitle: string
  ): React.ReactElement => (
    <OverlayTrigger
      key={iconTitle}
      placement="top"
      overlay={<Tooltip id="title">{iconTitle}</Tooltip>}
    >
      {iconElement}
    </OverlayTrigger>
  );

  /**
   * Renders all icons
   */
  const renderIcons = (): React.ReactElement[] =>
    icons.map((icon, iconIdx) => overlayWrapper(icon, iconTitles[iconIdx]));

  return (
    <>
      <SectionHeader
        spanText="Skills"
        headerText="My Skills"
        useHeaderAnimation
      />
      <div
        data-aos="flip-down"
        data-aos-duration="500"
        className={grid}
        data-testid="skills"
      >
        {renderIcons()}
      </div>
    </>
  );
};
export default Skills;
