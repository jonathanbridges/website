import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
const About: React.FC = () => (
  <>
    <SectionHeader spanText="About Me" headerText="Who Am I?" />
    <p data-testid="about">
      <strong>I'm a software developer</strong> with a passion for lifelong
      learning, problem-solving, and always improving oneself 📚.
    </p>
    <p>
      I have extensive experience with frontend frameworks and languages like
      React, Typescript, Apollo GraphQL, NextJS, and CSS. I'm also always ready
      to contribute to the backend of things, most recently working with Java
      and MySQL, but with previous experience using Ruby, Rails, and PostgreSQL.
    </p>
    <p>
      I'm currently based out of San Francisco, where I've spent time
      contributing to tech companies in various roles, not just as a developer,
      but also in client-facing roles. I believe this gives me a unique
      perspective when it comes to problem-solving and looking out for the best
      solutions to customer's requests and problems.
    </p>
    <p>
      Personally, I spend a lot of my free time cycling around the hills of San
      Francisco. I play several instruments and love to travel. I grew up in
      Vermont, a place I love that taught me to be okay with being outdoors and
      not looking at screens every waking moment.
    </p>
  </>
);
export default About;
