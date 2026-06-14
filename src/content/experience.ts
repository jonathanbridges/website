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
    company: "OlioApps",
    url: "https://olioapps.com",
    roles: [{ title: "Senior Software Engineer", date: "2025–Present" }],
    paragraphs: [
      "Founding engineer and consultant through OlioApps for Grace & Mercy, a New York City based non-profit. Bootstrapped Tabernacle from an empty repo into a production platform where faith communities organize groups, run recurring schedules, host live gatherings, stream video, and manage RSVPs and notifications.",
      "Architected the TypeScript monorepo (Next.js, Express, PostgreSQL) on Google Cloud, from auth and membership workflows through media pipelines, multi-language support, CI/CD, and React Native mobile contributions.",
    ],
  },
  {
    company: "Khoros",
    url: "https://khoros.com",
    roles: [
      {
        title: "Software Engineer I → Senior Software Engineer",
        date: "2020–2024",
      },
    ],
    paragraphs: [
      "Promoted annually from Community frontend contributor to Senior Software Engineer. Khoros was a major stepping stone in frontend design and architecture across React, Next.js, component systems, and complex product UI.",
      "Led architecture for the community page builder, a drag-and-drop tool that let customers assemble branded sites without code, and an in-platform WYSIWYG editor for content authoring. Scope grew over time into full-stack integration, shared frontend patterns, engineering tooling, and mentoring on globally distributed teams.",
    ],
  },
  {
    company: "Brandly",
    url: "https://www.brandly.com",
    roles: [{ title: "Software Developer", date: "2019–2020" }],
    paragraphs: [
      "Freelance developer for Brandly, a custom merchandise platform. Shipped admin improvements such as paginated order histories, resolved production bugs, and tightened mobile layouts across the back-office experience.",
    ],
  },
  {
    company: "TINT",
    url: "https://www.tintup.com",
    roles: [{ title: "Support Engineer", date: "2015–2018" }],
    paragraphs: [
      "Support engineer for TINT, a platform that helps brands collect and display user-generated content across web, mobile, and live events. Partnered with clients on implementations and with engineering on bug reports, QA, and API documentation.",
      "Owned customer experience tooling on the support side as well, leading a migration to Zendesk and rolling out live chat to bring response times down.",
    ],
  },
  {
    company: "Stitch Fix",
    url: "https://www.stitchfix.com",
    roles: [
      { title: "Client Experience / Operations Associate", date: "2014–2015" },
    ],
    paragraphs: [
      "Client experience associate at Stitch Fix while the support team grew from about 20 agents to more than 300. Shaped how tickets were prioritized in Zendesk, wrote help-desk copy, trained new hires, and regularly led the team in ticket volume with a 98% positive client rating.",
    ],
  },
  {
    company: "First Republic Bank",
    url: "https://www.firstrepublic.com",
    roles: [{ title: "Purchasing Specialist", date: "2012–2013" }],
    paragraphs: [
      "Purchasing specialist for First Republic's corporate headquarters and branch network. Coordinated orders for physical assets, managed vendor relationships, and partnered with the Facilities team to keep offices supplied and running smoothly.",
    ],
  },
  {
    company: "DigiFX",
    url: "https://digifx.com",
    roles: [{ title: "Editor / Audio Engineer", date: "2009–2010" }],
    paragraphs: [
      "Editor and audio engineer at DigiFX, producing eLearning and training content including modules for the nuclear industry. Responsibilities ranged from script revision before recording sessions to studio recording, audio editing, and voice-over delivery.",
    ],
  },
  {
    company: "Soundtrack Boston",
    url: "http://soundtrackgroup.com/",
    roles: [{ title: "Studio Assistant", date: "2008–2009" }],
    paragraphs: [
      "Studio assistant at Soundtrack Boston, one of New England's largest post-production facilities. Covered duplication, the machine room, client services, and other floor needs as they came up.",
    ],
  },
];
