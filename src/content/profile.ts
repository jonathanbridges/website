export type AboutSegment = {
  text: string;
  emphasis?: boolean;
};

export const profile = {
  name: "Jonathan Bridges",
  shortName: "Jon Bridges",
  tagline: "Software Developer",
  location: "San Francisco, CA",
  resumeUrl:
    "https://docs.google.com/document/d/12wndBuWVkX4Hc6_BYDKZFoEdm8er5dSFmWjG1LzIlU0",
  pullQuote: "Building software you're proud to share.",
  aboutBlurb: [
    [
      { text: "Jonathan Bridges", emphasis: true },
      {
        text: " is a full-stack software engineer in San Francisco who builds products from the ground up: monorepos, APIs, design systems, cloud infrastructure, and the tooling teams need to ship with confidence.",
      },
    ],
    [
      { text: "His stack centers on ", emphasis: false },
      { text: "TypeScript", emphasis: true },
      { text: ", " },
      { text: "React", emphasis: true },
      { text: ", " },
      { text: "Next.js", emphasis: true },
      { text: ", and " },
      { text: "Node.js", emphasis: true },
      {
        text: ", with growing depth in ",
      },
      { text: "Google Cloud", emphasis: true },
      { text: ", " },
      { text: "Terraform", emphasis: true },
      { text: ", " },
      { text: "Docker", emphasis: true },
      {
        text: ", and media pipelines. He integrates ",
      },
      { text: "AI-assisted development", emphasis: true },
      {
        text: " into real workflows, with an eye toward maintainable codebases, clear UX, and software that holds up as products and teams grow.",
      },
    ],
    [
      { text: "At ", emphasis: false },
      { text: "OlioApps", emphasis: true },
      {
        text: ", he builds platforms for faith-based organizations. At ",
      },
      { text: "Khoros", emphasis: true },
      {
        text: ", he advanced to Senior Software Engineer and led frontend architecture for page builder and WYSIWYG systems. Earlier client-facing roles at ",
      },
      { text: "TINT", emphasis: true },
      { text: " and " },
      { text: "Stitch Fix", emphasis: true },
      {
        text: " sharpen product judgment when translating ambiguous requirements into software that holds up in production.",
      },
    ],
  ] satisfies AboutSegment[][],
  bio: [
    {
      emphasis: "I'm a software developer",
      text: " with a passion for lifelong learning, problem-solving, and always improving oneself.",
    },
    "I have extensive experience with frontend frameworks and languages like React, Typescript, Apollo GraphQL, NextJS, and CSS. I'm also always ready to contribute to the backend of things, most recently working with Java and MySQL, but with previous experience using Ruby, Rails, and PostgreSQL.",
    "I'm currently based out of San Francisco, where I've spent time contributing to tech companies in various roles, not just as a developer, but also in client-facing roles. I believe this gives me a unique perspective when it comes to problem-solving and looking out for the best solutions to customer's requests and problems.",
    "Personally, I spend a lot of my free time cycling around the hills of San Francisco. I play several instruments and love to travel. I grew up in Vermont, a place I love that taught me to be okay with being outdoors and not looking at screens every waking moment.",
  ],
};
