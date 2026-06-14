export interface JobRole {
  title: string;
  date: string;
}

export interface ExperienceEntry {
  company: string;
  url: string;
  roles: JobRole[];
  paragraphs: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Khoros",
    url: "https://khoros.com",
    roles: [
      { title: "Senior Software Engineer", date: "2023–2024" },
      { title: "Software Engineer III", date: "2022–2023" },
      { title: "Software Engineer II", date: "2021–2022" },
      { title: "Software Engineer I", date: "2020–2021" },
    ],
    paragraphs: [
      "At Khoros I was progressively promoted in the software engineering department for exceeding expectations annually. I started as an individual contributor working primarily on the frontend Community application after being hired for my knowledge of React and CSS but took on more and more responsibility as I gained more experience.",
      "As a developer, I became increasingly pivotal across the department by devising generic, reusable, and scalable solutions to complex problems, including the frontend architecture for the Khoros page builder, and a WYSIWYG editor for the Khoros platform.",
      "Most recently, I expanded my role to include work on the Java backend, where I streamlined error responses from disparate API endpoints. Other projects include significant refactoring of Jest unit test suites, which increased CI speeds by over 50%.",
      "As a collaborator, I trained new hires on best practices and design patterns, authored documentation for the codebase, and increasingly became a go-to resource supporting junior developers across our globally located teams.",
    ],
  },
  {
    company: "Brandly",
    url: "https://www.brandly.com",
    roles: [{ title: "Software Developer", date: "2019–2020" }],
    paragraphs: [
      "As a freelance developer for Brandly, I worked on new features like pagination on admin order histories, bug fixes, and mobile design.",
    ],
  },
  {
    company: "TINT",
    url: "https://www.tintup.com",
    roles: [{ title: "Support Engineer", date: "2015–2018" }],
    paragraphs: [
      "I supported our clients with web, mobile, and live event implementations of our application, boosting my knowledge of languages like CSS and SQL. I worked with Engineering closely, reporting and tracking bugs, creating and running QA tests, and authoring API documentation.",
      "In addition, I had full autonomy over client experience at TINT. I managed conversion to Zendesk and implemented live chat, greatly reducing our response time and contact rate during the process.",
    ],
  },
  {
    company: "Stitch Fix",
    url: "https://www.stitchfix.com",
    roles: [
      { title: "Client Experience / Operations Associate", date: "2014–2015" },
    ],
    paragraphs: [
      "At Stitch Fix, I wholly embraced a customer-centric mindset and made several improvements to CX processes on the operational level. I implemented a priority ticket structure in Zendesk, wrote Marketing copy for help desk replies, and trained new hires in Austin headquarters.",
      "Out of a team that scaled from 20 to over 300 agents, I routinely led the CX team by total ticket solves, while retaining a 98% positive rating on tickets with client ratings.",
    ],
  },
  {
    company: "First Republic Bank",
    url: "https://www.firstrepublic.com",
    roles: [{ title: "Purchasing Specialist", date: "2012–2013" }],
    paragraphs: [
      "Working in First Republic's Purchasing Department, I ordered tangible assets for our corporate HQ and nationwide branches. I worked closely with our Facilities department, managing several vendors, and coordinating subcontractors.",
    ],
  },
  {
    company: "DigiFX",
    url: "https://digifx.com",
    roles: [{ title: "Editor / Audio Engineer", date: "2009–2010" }],
    paragraphs: [
      "While at DigiFX I worked primarily on eLearning modules that were used as training materials in the nuclear industry. I proofed and revised scripts prior to recording sessions, recorded and edited audio, and performed voice overs.",
    ],
  },
  {
    company: "Soundtrack Boston",
    url: "http://soundtrackgroup.com/",
    roles: [{ title: "Studio Assistant", date: "2008–2009" }],
    paragraphs: [
      "Soundtrack Boston is the premier post-production facility in New England. While there I worked as a studio assistant, and provided coverage for the duplication room, machine room, client services, and wherever else I was needed.",
    ],
  },
];
