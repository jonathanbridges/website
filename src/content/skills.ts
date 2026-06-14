export interface Skill {
  name: string;
  icon: string;
}

/** Ordered for hiring signal — strongest / most recent first */
export const skills: Skill[] = [
  { name: "TypeScript", icon: "/graphics/typescript-plain.svg" },
  { name: "React", icon: "/graphics/react-original.svg" },
  { name: "Next.js", icon: "/graphics/next-js.svg" },
  { name: "Node.js", icon: "/graphics/nodejs-plain.svg" },
  { name: "PostgreSQL", icon: "/graphics/postgresql-plain.svg" },
  { name: "Google Cloud", icon: "/graphics/code.svg" },
  { name: "Terraform", icon: "/graphics/code.svg" },
  { name: "Docker", icon: "/graphics/docker-plain.svg" },
  { name: "AI Engineering", icon: "/graphics/code.svg" },
  { name: "Express.js", icon: "/graphics/express-original.svg" },
  { name: "React Native", icon: "/graphics/react-original.svg" },
  { name: "CI/CD", icon: "/graphics/code.svg" },
  { name: "Internationalization", icon: "/graphics/code.svg" },
  { name: "Tailwind CSS", icon: "/graphics/css3-plain.svg" },
  { name: "GraphQL", icon: "/graphics/apollo.svg" },
  { name: "Java", icon: "/graphics/java-plain.svg" },
  { name: "Git", icon: "/graphics/git-plain.svg" },
];
