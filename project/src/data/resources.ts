export type Resource = {
  id: string;
  title: string;
  description?: string;
  href?: string;
  tags?: string[];
};

const resources: Resource[] = [
  {
    id: "frontend-roadmap",
    title: "Frontend Roadmap",
    description:
      "A curated roadmap to learn frontend development: HTML, CSS, JS, and frameworks.",
    href: "https://github.com/kamranahmedse/developer-roadmap",
    tags: ["frontend", "roadmap"],
  },
  {
    id: "js-info",
    title: "JavaScript Info",
    description: "Comprehensive guide to modern JavaScript with tutorials and examples.",
    href: "https://javascript.info/",
    tags: ["javascript", "tutorial"],
  },
  {
    id: "freecodecamp",
    title: "FreeCodeCamp",
    description: "Interactive coding lessons and projects to build your portfolio.",
    href: "https://www.freecodecamp.org/",
    tags: ["practice", "projects"],
  },
  {
    id: "backend-roadmap",
    title: "Backend Roadmap",
    description: "Roadmap to learn backend fundamentals, databases and deployment.",
    href: "https://github.com/kamranahmedse/developer-roadmap/blob/master/README.md",
    tags: ["backend", "roadmap"],
  },
  {
    id: "react-topic",
    title: "React Topic Overview",
    description: "Key concepts, hooks and patterns for modern React development.",
    href: "https://reactjs.org/",
    tags: ["react", "frontend", "topic"],
  },
];

export default resources;
