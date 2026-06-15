"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import Badge from "@/src/components/Badge";
import ScrollReveal from "@/src/components/ScrollReveal";

type ThemeVars = CSSProperties & Record<`--${string}`, string>;
type SidebarGroup = {
  title: string;
  items: Array<{ label: string; icon: string; href?: string; active?: boolean }>;
};
type RoadmapCategory = "All Categories" | "Frontend" | "Backend" | "Full Stack" | "DevOps" | "Data" | "Mobile" | "Programming" | "Tooling";
type SkillLevel = "All Levels" | "Beginner" | "Intermediate" | "Advanced" | "Expert";
type RoadmapCard = {
  title: string;
  detail: string;
  topics: string;
  level: string;
  category: Exclude<RoadmapCategory, "All Categories">;
  skillLevel: Exclude<SkillLevel, "All Levels">;
  nodeCount: number;
  storageKey?: string;
  curatedProgress: number;

  status: "Recommended" | "Recently Updated" | "Popular" | "Core";
  tags: string[];
  href: string;
};

const navItems = [
  { label: "Roadmaps", href: "/docs/all-roadmaps" },
  { label: "Resources", href: "/docs/resources" },
  { label: "Docs", href: "/docs/html/home" },
  { label: "Guides", href: "/docs/study-guide" },
  { label: "Community", href: "https://discord.gg/yWtjK2Tb8T" },
];

const sidebarGroups: SidebarGroup[] = [
  {
    title: "Get Started",
    items: [
      { label: "Introduction", icon: "home", href: "/" },
      { label: "Quick Start", icon: "bolt", href: "/docs/quick-start" },
      { label: "How Roadmaps Work", icon: "route", href: "/docs/how-roadmaps-work" },
      { label: "Learning Paths", icon: "nodes", href: "/docs/learning-paths" },
    ],
  },
  {
    title: "Browse",
    items: [
      { label: "All Roadmaps", icon: "grid", href: "/docs/all-roadmaps", active: true },
      { label: "By Category", icon: "folder", href: "/docs/by-category" },
      { label: "Learning Resources", icon: "send", href: "/docs/resources" },
      { label: "Project Ideas", icon: "spark", href: "/docs/project-ideas" },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "Study Guide", icon: "book", href: "/docs/study-guide" },
      { label: "Best Practices", icon: "clock", href: "/docs/best-practices" },
      { label: "Common Questions", icon: "help", href: "/docs/common-questions" },
      { label: "Contributing", icon: "file", href: "/docs/contributing" },
    ],
  },
];

const roadmapCards: RoadmapCard[] = [
  {
    title: "Frontend Developer",
    detail: "Complete path through HTML, CSS, Tailwind, Sass, JavaScript, TypeScript, React, Next.js, testing, and deployment.",
    topics: "12 Stages",
    level: "Beginner to Advanced",
    category: "Frontend",
    skillLevel: "Beginner",
    nodeCount: 24,
    storageKey: "demontech-frontend-roadmap-completed",
    curatedProgress: 92,

    status: "Recommended",
    tags: ["HTML", "CSS", "React", "Next.js", "+8"],
    href: "/roadmaps/frontend-developer",
  },
  {
    title: "Git Roadmap",
    detail: "Document-backed path from Git basics to branching, remotes, pull requests, history tools, and recovery.",
    topics: "12 Topics",
    level: "Beginner to Advanced",
    category: "Tooling",
    skillLevel: "Beginner",
    nodeCount: 12,
    curatedProgress: 80,

    status: "Core",
    tags: ["Git", "Branches", "Remotes", "PRs", "+5"],
    href: "/roadmaps/git",
  },
  {
    title: "Python Roadmap",
    detail: "Document-backed path from Python basics to async, packaging, testing, and PEP 8.",
    topics: "16 Topics",
    level: "Beginner to Advanced",
    category: "Programming",
    skillLevel: "Beginner",
    nodeCount: 16,
    curatedProgress: 88,

    status: "Popular",
    tags: ["Python", "OOP", "Async", "Testing", "+5"],
    href: "/roadmaps/python",
  },
  {
    title: "Backend Developer",
    detail: "Master server-side development, databases, APIs, and more.",
    topics: "24 Stages",
    level: "Beginner to Advanced",
    category: "Backend",
    skillLevel: "Intermediate",
    nodeCount: 24,
    storageKey: "demontech-backend-roadmap-completed",
    curatedProgress: 94,

    status: "Recently Updated",
    tags: ["APIs", "SQL", "Auth", "Cloud", "+10"],
    href: "/roadmaps/backend-developer",
  },
  {
    title: "Full Stack Developer",
    detail: "End-to-end path through frontend, backend, databases, DevOps, cloud, system design, production engineering, and leadership.",
    topics: "33 Stages",
    level: "Beginner to Expert",
    category: "Full Stack",
    skillLevel: "Advanced",
    nodeCount: 33,
    storageKey: "demontech-full-stack-roadmap-completed",
    curatedProgress: 90,

    status: "Popular",
    tags: ["React", "Next.js", "Node.js", "Cloud", "+12"],
    href: "/roadmaps/full-stack-developer",
  },
  {
    title: "DevOps Engineer",
    detail: "Hands-on path through Linux, networking, CI/CD, containers, Kubernetes, cloud, observability, DevSecOps, SRE, and platform engineering.",
    topics: "29 Stages",
    level: "Beginner to Expert",
    category: "DevOps",
    skillLevel: "Advanced",
    nodeCount: 29,
    storageKey: "demontech-devops-roadmap-completed",
    curatedProgress: 88,

    status: "Recently Updated",
    tags: ["Linux", "CI/CD", "Docker", "Kubernetes", "+10"],
    href: "/roadmaps/devops-engineer",
  },
  {
    title: "Data Scientist",
    detail: "Project-based path through statistics, Python, analytics, machine learning, deep learning, GenAI, MLOps, big data, and research.",
    topics: "32 Stages",
    level: "Beginner to Expert",
    category: "Data",
    skillLevel: "Intermediate",
    nodeCount: 32,
    storageKey: "demontech-data-scientist-roadmap-completed",
    curatedProgress: 86,

    status: "Recently Updated",
    tags: ["Python", "Pandas", "ML", "GenAI", "+12"],
    href: "/roadmaps/data-scientist",
  },
  {
    title: "Mobile Developer",
    detail: "Production mobile path through Android, iOS, Flutter, React Native, architecture, backend integration, security, performance, and releases.",
    topics: "33 Stages",
    level: "Beginner to Expert",
    category: "Mobile",
    skillLevel: "Intermediate",
    nodeCount: 33,
    storageKey: "demontech-mobile-roadmap-completed",
    curatedProgress: 84,

    status: "Recommended",
    tags: ["Android", "iOS", "Flutter", "React Native", "+10"],
    href: "/roadmaps/mobile-developer",
  },
];

const categoryFilters: RoadmapCategory[] = ["All Categories", "Frontend", "Backend", "Full Stack", "DevOps", "Data", "Mobile", "Programming", "Tooling"];
const skillFilters: SkillLevel[] = ["All Levels", "Beginner", "Intermediate", "Advanced", "Expert"];
type SortOption = "Default" | "A-Z" | "Most Topics" | "Beginner First" | "Recently Updated";

const comingSoonCards = [
  { title: "Cybersecurity Engineer", category: "Backend", detail: "Networking, ethical hacking, SIEM, threat modeling, and incident response." },
  { title: "AI / ML Engineer", category: "Data", detail: "LLMs, model training, deployment, MLOps and prompt engineering." },
  { title: "Cloud Architect", category: "DevOps", detail: "AWS, GCP, Azure, infrastructure as code, cost optimization." },
];
const beginnerPath = [
  { label: "Start with Git", href: "/roadmaps/git", detail: "Learn commits, branches, remotes, and pull requests." },
  { label: "Pick Frontend", href: "/roadmaps/frontend-developer", detail: "Build visual confidence with HTML, CSS, JavaScript, and React." },
  { label: "Add Backend", href: "/roadmaps/backend-developer", detail: "Learn APIs, databases, auth, and deployment fundamentals." },
];

/**
 * Loads roadmap progress from localStorage.
 * 
 * @returns {Record<string, number>} An object mapping storage keys to completed node counts.
 */
function loadRoadmapProgress() {
  if (typeof window === "undefined") return {};

  const nextProgress: Record<string, number> = {};
  roadmapCards.forEach((roadmap) => {
    if (!roadmap.storageKey) return;
    const stored = window.localStorage.getItem(roadmap.storageKey);
    if (!stored) {
      nextProgress[roadmap.storageKey] = 0;
      return;
    }

    try {
      nextProgress[roadmap.storageKey] = (JSON.parse(stored) as string[]).length;
    } catch {
      nextProgress[roadmap.storageKey] = 0;
    }
  });
  return nextProgress;
}

/**
 * Loads roadmap bookmarks from localStorage.
 * 
 * @returns {Record<string, number>} An object mapping storage keys to bookmarked node counts.
 */
function loadRoadmapBookmarks() {
  if (typeof window === "undefined") return {};

  const nextBookmarks: Record<string, number> = {};
  roadmapCards.forEach((roadmap) => {
    if (!roadmap.storageKey) return;
    const bookmarkKey = roadmap.storageKey.replace("-completed", "-bookmarked");
    const stored = window.localStorage.getItem(bookmarkKey);
    if (!stored) {
      nextBookmarks[roadmap.storageKey] = 0;
      return;
    }

    try {
      nextBookmarks[roadmap.storageKey] = (JSON.parse(stored) as string[]).length;
    } catch {
      nextBookmarks[roadmap.storageKey] = 0;
    }
  });
  return nextBookmarks;
}

const iconPaths: Record<string, ReactNode> = {
  home: <path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-8.5Z" />,
  bolt: <path d="m13 2-9 13h7l-1 7 9-13h-7l1-7Z" />,
  route: <path d="M5 7h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h10M5 7l3-3M5 7l3 3m11 9-3-3m3 3-3 3" />,
  nodes: <path d="M6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 5h8M8 19h8M6 7v10m12-10v10" />,
  grid: <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" />,
  folder: <path d="M4 6h7l2 2h7v13H4V6Z" />,
  send: <path d="m21 3-6.5 18-4-8-8-4L21 3Z" />,
  spark: <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />,
  book: <path d="M5 4h7a3 3 0 0 1 3 3v17a3 3 0 0 0-3-3H5V4Zm10 0h4v17h-4" />,
  clock: <path d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  help: <path d="M10 9a3 3 0 1 1 4 2.83c-1.1.47-2 1.03-2 2.17m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  file: <path d="M7 3h7l5 5v13H7V3Zm7 0v5h5" />,
  search: <path d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />,
  discord: <path d="M8 16c1.5 1 6.5 1 8 0m-9-3h.01M17 13h.01M7 8c3-1.5 7-1.5 10 0l1 7c-1.5 1-3 1.5-4.5 1.8L12 15l-1.5 1.8C9 16.5 7.5 16 6 15l1-7Z" />,
  moon: <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3a8.7 8.7 0 1 0 11.5 11.5Z" />,
  sun: <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.36-6.36 1.42-1.42M4.22 19.78l1.42-1.42m0-12.72L4.22 4.22m15.56 15.56-1.42-1.42M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  target: <path d="M21 12a9 9 0 1 1-9-9m6 3 3-3m0 0v5m0-5h-5M15 9l-3 3m3 0a3 3 0 1 1-3-3" />,
  rocket: <path d="M14 4c3.5.4 5.6 2.5 6 6l-4 4-5-5 4-5Zm-7 8-3 3 5 5 3-3m-5-5 5 5m-7 1-2 2m9-17 5 5" />,
  trophy: <path d="M7 4h10v4a5 5 0 0 1-10 0V4Zm-2 1H3v2a4 4 0 0 0 4 4m12-6h2v2a4 4 0 0 1-4 4m-5 3v4m-4 0h8" />,
  paint: <path d="M5 19c3 0 3-4 6-4h4a6 6 0 1 0-6-6c0 3-4 3-4 6v4Zm10-11h.01M12 6h.01M9 8h.01" />,
  gear: <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0-5v3m0 12v3m8-8h-3M7 12H4m13.7-5.7-2.1 2.1M8.4 15.6l-2.1 2.1m0-11.4 2.1 2.1m7.2 7.2 2.1 2.1" />,
  layers: <path d="m12 3 9 5-9 5-9-5 9-5Zm-7 9 7 4 7-4M5 16l7 4 7-4" />,
  code: <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-10-4 14" />,
  pen: <path d="m4 20 4.5-1 11-11a2.1 2.1 0 0 0-3-3l-11 11L4 20Zm13-15 3 3" />,
  user: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0" />,
  users: <path d="M10 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0m1-10a3 3 0 1 0 0-6m-1 15a5.5 5.5 0 0 1 5-3.5" />,
  refresh: <path d="M20 7v5h-5M4 17v-5h5m10-1a7 7 0 0 0-12-4l-3 3m1 3a7 7 0 0 0 12 4l3-3" />,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 18.2 6.4 21.2 7.5 15 3 10.6l6.2-.9L12 3Z" />,
  flame: <path d="M12 22c4 0 7-2.8 7-6.8 0-3.2-2.1-5.1-4.2-7.1-.9-.8-1.5-2-1.5-3.4C10 6.4 7 9.4 7 13c0 1.2.4 2.2 1 3-1.4-.5-2.3-1.7-2.7-3C4.5 14.1 4 15.3 4 16.5 4 19.7 7 22 12 22Z" />,
  chart: <path d="M18 20V10M12 20V4M6 20v-6" />,
  layout: <path d="M3 3h18v18H3V3Zm0 6h18M9 9v12" />,
  server: <path d="M2 10V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6M2 14v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6M6 6h.01M6 18h.01" />,
};

const darkTheme: ThemeVars = {
  "--page-bg": "#030303",
  "--header-bg": "rgba(3, 3, 3, 0.9)",
  "--panel-bg": "rgba(9, 9, 10, 0.78)",
  "--panel-strong": "rgba(16, 16, 18, 0.92)",
  "--field-bg": "rgba(8, 8, 9, 0.86)",
  "--border": "rgba(90, 90, 94, 0.38)",
  "--text-primary": "#f8fafc",
  "--text-secondary": "#c5c7ce",
  "--text-muted": "#8e929d",
  "--shadow": "rgba(0, 0, 0, 0.32)",
};

const lightTheme: ThemeVars = {
  "--page-bg": "#f8fafc",
  "--header-bg": "rgba(255, 255, 255, 0.92)",
  "--panel-bg": "rgba(255, 255, 255, 0.88)",
  "--panel-strong": "rgba(241, 245, 249, 0.96)",
  "--field-bg": "rgba(255, 255, 255, 0.92)",
  "--border": "rgba(203, 213, 225, 0.9)",
  "--text-primary": "#0f172a",
  "--text-secondary": "#334155",
  "--text-muted": "#64748b",
  "--shadow": "rgba(15, 23, 42, 0.09)",
};

/**
 * Renders an SVG icon.
 * 
 * @param {Object} props
 * @param {string} props.name - The name of the icon.
 * @param {string} [props.className=""] - Optional CSS classes.
 * @returns {JSX.Element} The SVG element representing the icon.
 */
function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {iconPaths[name]}
    </svg>
  );
}

/**
 * Renders the DemonTech Roadmap logo and branding.
 * 
 * @returns {JSX.Element} The logo component linking to the home page.
 */
function DemonTechLogo() {
  return (
    <Link className="flex min-w-fit items-center gap-3" href="/">
      <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-full bg-black shadow-[0_0_36px_rgba(220,38,38,0.26)]">
        <Image
          alt="DemonTech logo"
          className="h-full w-full object-cover"
          height={64}
          src="/demontech-logo.png"
          width={64}
        />
      </div>
      <div>
        <p className="text-2xl font-black leading-6 tracking-normal text-[var(--text-primary)]">
          Demon<span className="text-red-500">Tech</span>
        </p>
        <p className="mt-1 text-[10px] font-black uppercase tracking-[0.32em] text-[var(--text-muted)]">
          Roadmap
        </p>
      </div>
    </Link>
  );
}

/**
 * Renders a dropdown filter select input.
 * 
 * @param {Object} props
 * @param {string} props.label - Accessible label for the select element.
 * @param {function(string): void} props.onChange - Callback fired when a new option is selected.
 * @param {string[]} props.options - List of option strings.
 * @param {string} props.value - Currently selected value.
 * @returns {JSX.Element} The filter select component.
 */
function FilterSelect({ label, onChange, options, value }: { label: string; onChange: (value: string) => void; options: string[]; value: string }) {
  return (
    <label className="flex h-12 items-center rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4">
      <span className="sr-only">{label}</span>
      <select
        className="w-full bg-transparent text-sm font-bold text-[var(--text-secondary)] outline-none"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

/**
 * The main page component for the "All Roadmaps" section.
 * Renders the roadmap directory, filtering controls, and comparison tables.
 * 
 * @returns {JSX.Element} The All Roadmaps page layout.
 */
export default function AllRoadmaps() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<RoadmapCategory>("All Categories");
  const [skillFilter, setSkillFilter] = useState<SkillLevel>("All Levels");
  const [sortBy, setSortBy] = useState<SortOption>("Default");
  const [viewFilter, setViewFilter] = useState<"All" | "My Roadmaps">("All");
  const [isMounted, setIsMounted] = useState(false);
  const [completedByRoadmap, setCompletedByRoadmap] = useState<Record<string, number>>({});
  const [bookmarksByRoadmap, setBookmarksByRoadmap] = useState<Record<string, number>>({});

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCompletedByRoadmap(loadRoadmapProgress());
     
    setBookmarksByRoadmap(loadRoadmapBookmarks());
    setIsMounted(true);
  }, []);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const roadmapCardsWithProgress = useMemo(
    () =>
      roadmapCards.map((roadmap) => {
        const completed = roadmap.storageKey ? completedByRoadmap[roadmap.storageKey] ?? 0 : 0;
        const bookmarks = roadmap.storageKey ? bookmarksByRoadmap[roadmap.storageKey] ?? 0 : 0;
        const userProgress = roadmap.storageKey ? Math.round((completed / roadmap.nodeCount) * 100) : 0;
        return {
          ...roadmap,
          completed,
          bookmarks,
          progress: userProgress,
          qualityScore: roadmap.curatedProgress,
        };
      }),
    [completedByRoadmap, bookmarksByRoadmap],
  );
  const filteredRoadmaps = roadmapCardsWithProgress.filter((roadmap) => {
    const query = searchQuery.trim().toLowerCase();
    const searchable = [roadmap.title, roadmap.detail, roadmap.category, roadmap.skillLevel, roadmap.level, roadmap.status, ...roadmap.tags].join(" ").toLowerCase();
    const isStartedOrBookmarked = roadmap.completed > 0 || roadmap.bookmarks > 0;

    return (
      (viewFilter === "All" || isStartedOrBookmarked) &&
      (!query || searchable.includes(query)) &&
      (categoryFilter === "All Categories" || roadmap.category === categoryFilter) &&
      (skillFilter === "All Levels" || roadmap.skillLevel === skillFilter)
    );
  }).sort((a, b) => {
    switch (sortBy) {
      case "A-Z":
        return a.title.localeCompare(b.title);
      case "Most Topics":
        return b.nodeCount - a.nodeCount;
      case "Beginner First": {
        const order: Record<string, number> = { Beginner: 1, Intermediate: 2, Advanced: 3, Expert: 4 };
        return (order[a.skillLevel] || 99) - (order[b.skillLevel] || 99);
      }
      case "Recently Updated":
        return 0; // Removing recently updated sort logic
      case "Default":
      default:
        return 0;
    }
  });
  const recommendedRoadmap = roadmapCardsWithProgress.find((roadmap) => roadmap.status === "Recommended" && roadmap.progress < 100) ?? roadmapCardsWithProgress[0];
  const recentlyUpdatedRoadmap = roadmapCardsWithProgress.find((roadmap) => roadmap.status === "Recently Updated") ?? roadmapCardsWithProgress[0];
  const totalCompleted = roadmapCardsWithProgress.reduce((sum, roadmap) => sum + roadmap.completed, 0);
  const totalNodes = roadmapCardsWithProgress.reduce((sum, roadmap) => sum + roadmap.nodeCount, 0);
  const overallProgress = Math.round((totalCompleted / totalNodes) * 100);
  const activeCategories = new Set(roadmapCards.map((roadmap) => roadmap.category)).size;

  return (
    <main
      className="min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-300"
      style={theme}
    >
      <div
        className={`fixed inset-0 -z-10 transition-colors duration-300 ${
          isDarkMode
            ? "bg-[radial-gradient(circle_at_68%_12%,rgba(127,29,29,0.22),transparent_28%),radial-gradient(circle_at_82%_64%,rgba(127,29,29,0.18),transparent_28%),linear-gradient(180deg,#050505_0%,#030303_100%)]"
            : "bg-[radial-gradient(circle_at_68%_12%,rgba(239,68,68,0.1),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"
        }`}
      />

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1260px] items-center gap-6 px-5 lg:px-8">
          <DemonTechLogo />
          <nav className="ml-auto hidden items-center gap-12 text-[15px] font-bold text-[var(--text-secondary)] lg:flex">
            {navItems.map((item) => (
              <a
                className={`relative transition hover:text-red-500 ${
                  item.label === "Roadmaps" ? "text-red-500" : ""
                }`}
                href={item.href}
                key={item.label}
                {...(item.label === "Community" ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {item.label}
                {item.label === "Roadmaps" && (
                  <span className="absolute -bottom-[30px] left-1/2 h-0.5 w-16 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.8)]" />
                )}
              </a>
            ))}
          </nav>
          <label className="ml-auto hidden h-11 w-[235px] items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm text-[var(--text-muted)] lg:ml-8 xl:flex">
            <Icon className="h-5 w-5" name="search" />
            <span className="flex-1">Search anything...</span>
            <kbd className="rounded border border-[var(--border)] bg-[var(--panel-strong)] px-2 py-0.5 text-xs">
              K
            </kbd>
          </label>
          <button
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--panel-strong)] text-[var(--text-primary)] transition hover:border-red-500"
            onClick={() => setIsDarkMode((value) => !value)}
            type="button"
          >
            <Icon className="h-5 w-5" name={isDarkMode ? "sun" : "moon"} />
          </button>
          <a
            className="hidden h-11 items-center gap-2 rounded-md border border-red-600 bg-red-950/20 px-5 text-sm font-bold text-red-400 shadow-[0_0_26px_rgba(127,29,29,0.18)] transition hover:bg-red-600 hover:text-white md:inline-flex"
            href="https://discord.gg/yWtjK2Tb8T"
            rel="noreferrer"
            target="_blank"
          >
            <Icon className="h-5 w-5" name="discord" />
            Join Discord
          </a>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1260px] grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden min-h-[calc(100vh-72px)] border-r border-[var(--border)] px-5 py-5 lg:block">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5 shadow-2xl shadow-[var(--shadow)]">
            <div className="space-y-7">
              {sidebarGroups.map((group) => (
                <section key={group.title}>
                  <h3 className="text-xs font-black uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                    {group.title}
                  </h3>
                  <div className="mt-4 space-y-1">
                    {group.items.map((item) => (
                      <a
                        className={`flex h-10 items-center gap-3 rounded-md px-3 text-sm transition ${
                          item.active
                            ? "border border-red-500/40 bg-[linear-gradient(135deg,rgba(153,27,27,0.95),rgba(45,15,15,0.88))] text-white shadow-[0_16px_36px_rgba(127,29,29,0.32)]"
                            : "text-[var(--text-secondary)] hover:bg-[var(--panel-strong)] hover:text-red-500"
                        }`}
                        href={item.href ?? "#"}
                        key={item.label}
                      >
                        <Icon className="h-4 w-4 shrink-0" name={item.icon} />
                        {item.label}
                      </a>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-md border border-red-500/35 bg-red-950/15 p-4">
              <h3 className="font-bold text-[var(--text-primary)]">
                Still confused?
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                Check our FAQ or join our community. We&apos;re here to help!
              </p>
              <a
                className="mt-5 flex h-10 items-center justify-center gap-2 rounded-md bg-red-700/70 px-4 text-sm font-bold text-white"
                href="/docs/common-questions">
                View FAQ
                <Icon className="h-4 w-4" name="pen" />
              </a>
            </div>
          </div>
        </aside>

        <section className="px-5 py-6 sm:px-8 lg:px-8">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-bg)] px-5 py-6 shadow-2xl shadow-[var(--shadow)] sm:px-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
              <Icon className="h-4 w-4 text-zinc-500" name="home" />
              <span>Home</span>
              <Icon className="h-3 w-3" name="chevron" />
              <span className="font-semibold text-[var(--text-primary)]">
                Roadmaps
              </span>
            </div>

            <section className="mt-6">
              <div className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 px-4 py-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.12em] text-zinc-400">
                <Icon className="h-4 w-4" name="flame" />
                Explore All Possibilities
              </div>
              <h1 className="mt-5 text-3xl font-black tracking-normal text-[var(--text-primary)] sm:text-5xl">
                All Roadmaps
              </h1>
              <div className="mt-2 h-1 w-32 sm:w-64 rounded-full bg-zinc-800" />
              <p className="mt-6 max-w-2xl text-sm sm:text-base leading-8 text-[var(--text-secondary)]">
                Explore our collection of developer roadmaps across different
                technologies and domains. Choose a roadmap that fits your goals
                and start your journey to mastery.
              </p>
            </section>

            <section className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-6 rounded-xl border border-[var(--border)] bg-[var(--panel-strong)] px-5 sm:px-8 py-5">
              {[
                [String(roadmapCards.length), "Roadmaps", "grid"],
                [String(activeCategories), "Categories", "folder"],
                [`${overallProgress}%`, "Progress", "chart"],
                [`${totalCompleted}/${totalNodes}`, "Topics", "check"],
                ["Weekly", "Updates", "refresh"],
              ].map(([value, label, icon]) => (
                <div className="flex items-center gap-3 sm:gap-4" key={label}>
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-500" name={icon} />
                  <div>
                    <p className="text-base sm:text-lg font-black leading-none text-white">{value}</p>
                    <p className="mt-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-zinc-500">{label}</p>
                  </div>
                </div>
              ))}
            </section>

            <section className="mt-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-col sm:flex-row rounded-md border border-zinc-800 bg-black p-1">
                <button
                  className={`flex items-center justify-center gap-2 rounded px-4 py-2 text-sm font-bold transition ${viewFilter === "All" ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-zinc-200"}`}
                  onClick={() => setViewFilter("All")}
                  type="button"
                >
                  <Icon className="h-4 w-4" name="search" />
                  All Roadmaps
                </button>
                <button
                  className={`flex items-center justify-center gap-2 rounded px-4 py-2 text-sm font-bold transition ${viewFilter === "My Roadmaps" ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-zinc-200"}`}
                  onClick={() => setViewFilter("My Roadmaps")}
                  type="button"
                >
                  <Icon className="h-4 w-4" name="bookmark" />
                  My Roadmaps
                </button>
              </div>
              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[1.35fr_0.9fr_0.9fr_0.9fr_auto]">
                <label className="flex h-12 items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm text-[var(--text-muted)]">
                  <span className="sr-only">Search roadmaps</span>
                  <input
                    className="min-w-0 flex-1 bg-transparent text-sm font-bold text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search roadmaps..."
                    type="search"
                    value={searchQuery}
                  />
                  <Icon className="h-5 w-5" name="search" />
                </label>
                <FilterSelect label="Category" options={categoryFilters} value={categoryFilter} onChange={(value) => setCategoryFilter(value as RoadmapCategory)} />
                <FilterSelect label="Skill level" options={skillFilters} value={skillFilter} onChange={(value) => setSkillFilter(value as SkillLevel)} />
                <FilterSelect label="Sort by" options={["Default", "A-Z", "Most Topics", "Beginner First", "Recently Updated"]} value={sortBy} onChange={(value) => setSortBy(value as SortOption)} />
                <button
                  className="flex h-12 items-center justify-center gap-2 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm font-bold text-red-500"
                  onClick={() => {
                    setSearchQuery("");
                    setCategoryFilter("All Categories");
                    setSkillFilter("All Levels");
                    setSortBy("Default");
                  }}
                  type="button"
                >
                  <span className="grid h-4 w-4 place-items-center rounded-full border border-red-500 text-[10px]">
                    x
                  </span>
                  Clear Filters
                </button>
              </div>
            </section>
            
            <ScrollReveal>
              <section className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950/20 p-6">
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-zinc-500" name="spark" />
                  <h2 className="text-xl font-black text-white">Featured & Recommended</h2>
                </div>
                <div className="mt-6 grid gap-5 xl:grid-cols-3">
                  <Link className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-red-500/30 bg-red-500/5 p-5 transition hover:border-red-500/60" href={recommendedRoadmap.href}>
                    <div>
                      <Badge variant="red" className="mb-4">Recommended</Badge>
                      <h3 className="text-xl font-black text-white">{recommendedRoadmap.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-zinc-300">{recommendedRoadmap.detail}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm font-black text-red-400">{recommendedRoadmap.progress}% Started</span>
                      <Icon className="h-5 w-5 text-red-500 transition group-hover:translate-x-1" name="arrow" />
                    </div>
                  </Link>

                  <Link className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-zinc-700" href={recentlyUpdatedRoadmap.href}>
                    <div>
                      <Badge variant="outline" className="mb-4 border-zinc-700 text-zinc-400">Recently Updated</Badge>
                      <h3 className="text-xl font-black text-white">{recentlyUpdatedRoadmap.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-zinc-400">{recentlyUpdatedRoadmap.detail}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-zinc-500">
                      <span className="text-sm font-bold">Updated weekly</span>
                      <Icon className="h-5 w-5 transition group-hover:translate-x-1" name="arrow" />
                    </div>
                  </Link>

                  <section className="flex flex-col justify-between rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4">Start Here</p>
                      <div className="space-y-4">
                        {beginnerPath.map((step, index) => (
                          <Link className="flex items-center gap-3 transition hover:text-red-400" href={step.href} key={step.label}>
                            <span className="grid h-6 w-6 shrink-0 place-items-center rounded bg-zinc-800 text-[10px] font-black text-zinc-400">{index + 1}</span>
                            <span className="text-sm font-bold">{step.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-zinc-800">
                      <Link className="text-xs font-black uppercase tracking-wider text-zinc-500 hover:text-white" href="/docs/quick-start">View Guide →</Link>
                    </div>
                  </section>
                </div>
              </section>
            </ScrollReveal>

            <section className="mt-8 grid gap-5 xl:grid-cols-3">
              {filteredRoadmaps.map((roadmap) => {
                return (
                  <ScrollReveal key={roadmap.title}>
                  <Link
                    className="flex h-full flex-col justify-between rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-5 transition hover:border-red-500/45 hover:shadow-[0_20px_60px_rgba(127,29,29,0.18)]"
                    href={roadmap.href}
                  >
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 shadow-sm">
                          <Icon className="h-6 w-6" name={roadmap.category === "Frontend" ? "layout" : roadmap.category === "Backend" ? "server" : roadmap.category === "DevOps" ? "cloud" : roadmap.category === "Mobile" ? "smartphone" : roadmap.category === "Data" ? "database" : "code"} />
                        </div>
                        <h2 className="text-lg font-black text-[var(--text-primary)]">
                          {roadmap.title}
                        </h2>
                      </div>
                      <p className="mt-4 line-clamp-1 text-sm leading-6 text-[var(--text-secondary)]">
                        {roadmap.detail}
                      </p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {roadmap.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="default" className="text-[10px] px-2 py-0">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center justify-between text-[11px] font-bold text-zinc-500">
                        <span>
                          {roadmap.topics}
                        </span>
                        <span>{roadmap.progress}% complete</span>
                      </div>
                      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-zinc-800">
                        <div
                          className="h-full rounded-full bg-zinc-600 transition-all duration-500"
                          style={{ width: isMounted ? `${roadmap.progress}%` : "0%" }}
                        />
                      </div>
                    </div>
                  </Link>
                  </ScrollReveal>
                );
              })}
            </section>

            {!searchQuery && (
              <section className="mt-12 border-t border-zinc-900 pt-12">
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-zinc-900" />
                  <h2 className="text-xl font-black text-zinc-500">Coming Soon</h2>
                  <div className="h-px flex-1 bg-zinc-900" />
                </div>
                <div className="mt-8 grid gap-5 xl:grid-cols-3">
                  {comingSoonCards
                    .filter(card => categoryFilter === "All Categories" || card.category === categoryFilter)
                    .map(card => (
                      <ScrollReveal key={card.title}>
                        <div className="flex h-full flex-col justify-between rounded-lg border border-zinc-800 bg-zinc-950/20 p-5 opacity-60">
                          <div>
                            <div className="flex items-start justify-between gap-4">
                              <h2 className="text-lg font-black text-zinc-500">{card.title}</h2>
                              <Badge variant="outline" className="opacity-50">Draft</Badge>
                            </div>
                            <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-600">{card.detail}</p>
                          </div>
                          <div className="mt-5">
                            <span className="text-xs font-bold text-zinc-700">{card.category} Roadmap</span>
                          </div>
                        </div>
                      </ScrollReveal>
                  ))}
                </div>
              </section>
            )}
            
            <ScrollReveal>
              <section className="mt-12 rounded-xl border border-[var(--border)] bg-black/20 p-6">
                <h2 className="flex items-center gap-3 text-2xl font-black text-[var(--text-primary)]">
                  <Icon className="h-7 w-7 text-zinc-500" name="spark" />
                  Compare Roadmaps at a Glance
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                  Compare estimated timelines and starting difficulty levels side by side.
                </p>

                <div className="mt-6 overflow-x-auto rounded-lg border border-[var(--border)]">
                  <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                    <caption className="sr-only">
                      Comparison of roadmap paths by learner fit, duration, and starting difficulty.
                    </caption>
                    <thead>
                      <tr className="border-b border-[var(--border)] bg-[var(--panel-strong)]">
                        <th className="px-5 py-4 text-xs font-black uppercase tracking-[0.14em] text-zinc-500" scope="col">
                          Roadmap
                        </th>
                        <th className="px-5 py-4 text-xs font-black uppercase tracking-[0.14em] text-zinc-500" scope="col">
                          Best For
                        </th>
                        <th className="px-5 py-4 text-xs font-black uppercase tracking-[0.14em] text-zinc-500" scope="col">
                          Est. Duration
                        </th>
                        <th className="px-5 py-4 text-xs font-black uppercase tracking-[0.14em] text-zinc-500" scope="col">
                          Starting Difficulty
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border)]">
                      {([
                        {
                          name: "Frontend Developer",
                          bestFor: "Visual thinkers who love crafting user interfaces",
                          duration: "4–6 months",
                          difficulty: "Beginner" as const,
                          href: "/roadmaps/frontend-developer",
                          icon: "paint",
                        },
                        {
                          name: "Backend Developer",
                          bestFor: "Problem solvers who enjoy working with data and logic",
                          duration: "5–7 months",
                          difficulty: "Intermediate" as const,
                          href: "/roadmaps/backend-developer",
                          icon: "gear",
                        },
                        {
                          name: "Full Stack Developer",
                          bestFor: "Generalists who want to build complete applications",
                          duration: "8–12 months",
                          difficulty: "Intermediate" as const,
                          href: "/roadmaps/full-stack-developer",
                          icon: "layers",
                        },
                        {
                          name: "DevOps Engineer",
                          bestFor: "System thinkers who enjoy automation and infrastructure",
                          duration: "6–9 months",
                          difficulty: "Intermediate" as const,
                          href: "/roadmaps/devops-engineer",
                          icon: "rocket",
                        },
                        {
                          name: "Data Scientist",
                          bestFor: "Analytical minds drawn to data, statistics, and ML",
                          duration: "8–12 months",
                          difficulty: "Intermediate" as const,
                          href: "/roadmaps/data-scientist",
                          icon: "target",
                        },
                        {
                          name: "Mobile Developer",
                          bestFor: "Builders who want to create apps for phones and tablets",
                          duration: "6–9 months",
                          difficulty: "Intermediate" as const,
                          href: "/roadmaps/mobile-developer",
                          icon: "bolt",
                        },
                      ] as const).map((row) => (
                        <tr
                          className="transition hover:bg-[var(--panel-strong)]"
                          key={row.name}
                        >
                          <td className="px-5 py-4">
                            <Link
                              className="inline-flex items-center gap-2 font-black text-[var(--text-primary)] transition hover:text-red-500"
                              href={row.href}
                            >
                              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400">
                                <Icon className="h-4 w-4" name={row.icon} />
                              </span>
                              {row.name}
                            </Link>
                          </td>
                          <td className="px-5 py-4 text-[var(--text-secondary)]">
                            {row.bestFor}
                          </td>
                          <td className="px-5 py-4 font-bold text-[var(--text-secondary)]">
                            {row.duration}
                          </td>
                          <td className="px-5 py-4">
                            <Badge variant={row.difficulty.toLowerCase() as "beginner" | "intermediate" | "advanced" | "default" | "outline" | "red"}>{row.difficulty}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </main>
  );
}
