export interface Project {
  name: string;
  description: string;
  stack: string;
  liveUrl: string;
  githubUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    name: "ClickCamp",
    description: "A single-page web app inspired by HipCamp",
    stack: "Ruby on Rails, ReactJS, Redux, PostgreSQL, GoogleMaps API, Amazon S3",
    liveUrl: "https://click-camp.herokuapp.com",
    githubUrl: "https://github.com/jonathanbridges/click-camp",
    image: "/images/clickcamp-preview.png",
  },
  {
    name: "Twitter GeoTrends",
    description: "A data visualization of trending items on Twitter",
    stack: "d3, ExpressJS",
    liveUrl: "https://twitter-geotrends.herokuapp.com",
    githubUrl: "https://github.com/jonathanbridges/twitter-geotrends",
    image: "/images/twitter-preview.png",
  },
  {
    name: "Spacey",
    description:
      "A single-page website that aggregates space industry content",
    stack: "MongoDB, ExpressJS, ReactJS, Node",
    liveUrl: "https://spacey-aa.herokuapp.com",
    githubUrl: "https://github.com/jonathanbridges/spacey",
    image: "/images/spacey-preview.png",
  },
  {
    name: "Winter Design Build",
    description: "A portfolio website built using create-react-app",
    stack: "ReactJS, HTML, CSS",
    liveUrl: "https://winterdesignbuild.com",
    githubUrl: "https://github.com/jonathanbridges/winter-design-build/",
    image: "/images/winter-preview.jpg",
  },
];
