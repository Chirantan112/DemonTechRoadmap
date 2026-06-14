"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type ThemeVars = CSSProperties & Record<`--${string}`, string>;
type SidebarGroup = {
  title: string;
  items: Array<{ label: string; icon: string; href?: string; active?: boolean }>;
};
type QuestionCategory = {
  title: string;
  icon: string;
  active?: boolean;
};

const navItems = ["Roadmaps", "Resources", "Docs", "Guides", "Community"];

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
      { label: "All Roadmaps", icon: "grid", href: "/docs/all-roadmaps" },
      { label: "By Category", icon: "folder", href: "/docs/by-category" },
      { label: "Learning Resources", icon: "send", href: "/docs/resources" },
      { label: "Project Ideas", icon: "spark", href: "/docs/project-ideas" },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "Study Guide", icon: "book", href: "/docs/study-guide" },
      { label: "Best Practices", icon: "shield", href: "/docs/best-practices" },
      { label: "Common Questions", icon: "help", href: "/docs/common-questions", active: true },
      { label: "Contributing", icon: "info", href: "/docs/contributing" },
    ],
  },
];

const categories: QuestionCategory[] = [
  { title: "All Questions", icon: "message", active: true },
  { title: "Getting Started", icon: "rocket" },
  { title: "Roadmaps", icon: "book" },
  { title: "Learning", icon: "book-open" },
  { title: "Community", icon: "users" },
];

const faqData = [
  {
    id: "what-is-roadmap",
    question: "What is a roadmap and how does it help me?",
    answer: (
      <>
        <p>A roadmap is a structured guide that shows you what to learn and in what order to achieve a specific goal.</p>
        <p className="mt-2">It helps you stay focused, avoid confusion, and track your progress step by step.</p>
      </>
    ),
    isTop: true,
  },
  {
    id: "how-to-choose",
    question: "How do I choose the right roadmap for me?",
    answer: "Think about your goals. Do you want to build websites (Frontend/Backend), mobile apps, or work with data? We recommend starting with our 'Which roadmap is right for me?' quiz on the homepage.",
    isTop: true,
  },
  {
    id: "levels-explained",
    question: "What do beginner, intermediate, and advanced levels mean?",
    answer: (
      <>
        <p>These labels show how deep the topics usually are before moving to the next stage:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li><span className="font-semibold text-[var(--text-primary)]">Beginner:</span> foundation topics that build the core concepts and terms.</li>
          <li><span className="font-semibold text-[var(--text-primary)]">Intermediate:</span> practical topics that combine core ideas with real examples and common pitfalls.</li>
          <li><span className="font-semibold text-[var(--text-primary)]">Advanced:</span> project-scale, architecture-heavy topics where independent problem-solving is expected.</li>
        </ul>
      </>
    ),
    isTop: false,
  },
  {
    id: "are-free",
    question: "Are the roadmaps free?",
    answer: "Yes, DemonTech Roadmaps are 100% free and open source. We believe high-quality education should be accessible to everyone.",
    isTop: true,
  },
  {
    id: "update-frequency",
    question: "How often are the roadmaps updated?",
    answer: "We update our core roadmaps weekly to ensure they stay current with industry trends and community feedback.",
    isTop: true,
  },
  {
    id: "suggest-changes",
    question: "Can I suggest changes or improvements to a roadmap?",
    answer: "Absolutely! We are community-driven. You can suggest changes via GitHub or by joining our Discord community.",
    isTop: false,
  },
  {
    id: "get-stuck",
    question: "What if I get stuck while learning?",
    answer: "Don't worry! Join our Discord community where thousands of developers help each other every day. You can also check our Study Guide for tips.",
    isTop: true,
  },
  {
    id: "prior-experience",
    question: "Do I need prior experience to follow a roadmap?",
    answer: "No. Our beginner roadmaps start from absolute zero. If you've never coded before, we recommend starting with the Git or HTML/CSS roadmaps.",
    isTop: false,
  },
];

const helpTopics = [
  ["Getting Started Guide", "New here? Start with the basics.", "book", "/docs/quick-start"],
  ["How Roadmaps Work", "Understand the structure and flow.", "home", "/docs/how-roadmaps-work"],
  ["Learning Tips", "Proven tips to learn faster and smarter.", "target", "/docs/study-guide"],
  ["Community Rules", "Guidelines for a positive and helpful community.", "shield", "/docs/best-practices"],
];

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
  shield: <path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Z" />,
  help: <path d="M10 9a3 3 0 1 1 4 2.83c-1.1.47-2 1.03-2 2.17m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  info: <path d="M12 10v7m0-10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  file: <path d="M7 3h7l5 5v13H7V3Zm7 0v5h5" />,
  search: <path d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />,
  discord: <path d="M8 16c1.5 1 6.5 1 8 0m-9-3h.01M17 13h.01M7 8c3-1.5 7-1.5 10 0l1 7c-1.5 1-3 1.5-4.5 1.8L12 15l-1.5 1.8C9 16.5 7.5 16 6 15l1-7Z" />,
  moon: <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3a8.7 8.7 0 1 0 11.5 11.5Z" />,
  sun: <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.36-6.36 1.42-1.42M4.22 19.78l1.42-1.42m0-12.72L4.22 4.22m15.56 15.56-1.42-1.42M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  message: <path d="M4 5h16v11H9l-5 4V5Zm5 5h6m-6 3h4" />,
  rocket: <path d="M14 4c3.5.4 5.6 2.5 6 6l-4 4-5-5 4-5Zm-7 8-3 3 5 5 3-3m-5-5 5 5m-7 1-2 2m9-17 5 5" />,
  "book-open": <path d="M4 5h6a4 4 0 0 1 4 4v11a4 4 0 0 0-4-3H4V5Zm10 4a4 4 0 0 1 4-4h2v12h-2a4 4 0 0 0-4 3V9Z" />,
  user: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0" />,
  users: <path d="M10 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0m1-10a3 3 0 1 0 0-6m-1 15a5.5 5.5 0 0 1 5-3.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  thumbsUp: <path d="M7 10v10H4V10h3Zm0 0 4-7h1.5a2 2 0 0 1 2 2.3L14 8h5a2 2 0 0 1 2 2.3l-1.2 7A3 3 0 0 1 16.8 20H7" />,
  thumbsDown: <path d="M7 14V4H4v10h3Zm0 0 4 7h1.5a2 2 0 0 0 2-2.3L14 16h5a2 2 0 0 0 2-2.3l-1.2-7A3 3 0 0 0 16.8 4H7" />,
  external: <path d="M14 4h6v6m0-6-9 9M20 14v6H4V4h6" />,
  headset: <path d="M4 13a8 8 0 0 1 16 0v5a3 3 0 0 1-3 3h-2m-9-8H4v5h2v-5Zm14 0h-2v5h2v-5Z" />,
  target: <path d="M21 12a9 9 0 1 1-9-9m6 3 3-3m0 0v5m0-5h-5M15 9l-3 3m3 0a3 3 0 1 1-3-3" />,
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

function DemonTechLogo() {
  return (
    <Link className="flex min-w-fit items-center gap-3" href="/">
      <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-full bg-black shadow-[0_0_36px_rgba(220,38,38,0.26)]">
        <Image alt="DemonTech logo" className="h-full w-full object-cover" height={64} src="/demontech-logo.png" width={64} />
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

export default function CommonQuestions() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [openIds, setOpenIds] = useState<string[]>([faqData[0].id]);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const topQuestions = faqData.filter(f => f.isTop);

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-300" style={theme}>
      <div className={`fixed inset-0 -z-10 transition-colors duration-300 ${isDarkMode ? "bg-[radial-gradient(circle_at_68%_12%,rgba(127,29,29,0.2),transparent_27%),radial-gradient(circle_at_80%_68%,rgba(127,29,29,0.16),transparent_28%),linear-gradient(180deg,#050505_0%,#030303_100%)]" : "bg-[radial-gradient(circle_at_68%_12%,rgba(239,68,68,0.1),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"}`} />

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1260px] items-center gap-6 px-5 lg:px-8">
          <DemonTechLogo />
          <nav className="ml-auto hidden items-center gap-12 text-[15px] font-bold text-[var(--text-secondary)] lg:flex">
            {navItems.map((item) => (
              <a className={`relative transition hover:text-red-500 ${item === "Guides" ? "text-red-500" : ""}`} href="#" key={item}>
                {item}
                {item === "Guides" && <span className="absolute -bottom-[30px] left-1/2 h-0.5 w-16 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.8)]" />}
              </a>
            ))}
          </nav>
          <label className="ml-auto hidden h-11 w-[235px] items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm text-[var(--text-muted)] lg:ml-8 xl:flex">
            <Icon className="h-5 w-5" name="search" />
            <span className="flex-1">Search anything...</span>
            <kbd className="rounded border border-[var(--border)] bg-[var(--panel-strong)] px-2 py-0.5 text-xs">K</kbd>
          </label>
          <button aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`} className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--panel-strong)] text-[var(--text-primary)] transition hover:border-red-500" onClick={() => setIsDarkMode((value) => !value)} type="button">
            <Icon className="h-5 w-5" name={isDarkMode ? "sun" : "moon"} />
          </button>
          <a className="hidden h-11 items-center gap-2 rounded-md border border-red-600 bg-red-950/20 px-5 text-sm font-bold text-red-400 shadow-[0_0_26px_rgba(127,29,29,0.18)] transition hover:bg-red-600 hover:text-white md:inline-flex" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">
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
                  <h3 className="text-xs font-black uppercase tracking-[0.14em] text-[var(--text-secondary)]">{group.title}</h3>
                  <div className="mt-4 space-y-1">
                    {group.items.map((item) => (
                      <a className={`flex h-10 items-center gap-3 rounded-md px-3 text-sm transition ${item.active ? "border border-red-500/40 bg-[linear-gradient(135deg,rgba(153,27,27,0.95),rgba(45,15,15,0.88))] text-white shadow-[0_16px_36px_rgba(127,29,29,0.32)]" : "text-[var(--text-secondary)] hover:bg-[var(--panel-strong)] hover:text-red-500"}`} href={item.href ?? "#"} key={item.label}>
                        <Icon className="h-4 w-4 shrink-0" name={item.icon} />
                        {item.label}
                      </a>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-md border border-red-500/35 bg-red-950/15 p-4 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-md bg-red-950/25 text-red-500">
                <Icon className="h-8 w-8" name="message" />
              </div>
              <h3 className="mt-6 font-black text-[var(--text-primary)]">Still have questions?</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                We&apos;re here to help! Join our community and get answers.
              </p>
              <a className="mt-6 flex h-10 items-center justify-center gap-2 rounded-md bg-red-700/70 px-4 text-sm font-bold text-white" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">
                <Icon className="h-4 w-4" name="discord" />
                Join Discord Community
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
              <span className="font-semibold text-[var(--text-primary)]">Common Questions</span>
            </div>

            <section className="mt-10 grid gap-10 xl:grid-cols-[1fr_310px]">
              <div>
                <h1 className="text-4xl font-black tracking-normal text-[var(--text-primary)] sm:text-5xl">
                  Common Questions
                  <Icon className="ml-5 inline-block h-8 w-8 align-top text-red-500" name="spark" />
                </h1>
                <div className="mt-4 h-1 w-72 rounded-full bg-zinc-800" />
                <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                  Find answers to the most common questions about roadmaps,
                  learning, and everything in between.
                </p>

                <div className="mt-12 max-w-2xl">
                  <label className="flex h-14 items-center gap-4 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-5 text-sm text-[var(--text-muted)] focus-within:ring-4 focus-within:ring-red-500/20 transition-all">
                    <Icon className="h-5 w-5" name="search" />
                    <input className="bg-transparent flex-1 outline-none text-[var(--text-primary)] font-bold placeholder:text-zinc-600" placeholder="Search questions..." />
                  </label>
                </div>
              </div>

              <aside className="rounded-xl border border-[var(--border)] bg-[var(--panel-strong)] p-6">
                <h2 className="text-lg font-black text-[var(--text-primary)]">Quick Help</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  Our community is super helpful. Ask your question there.
                </p>
                <div className="mt-8 space-y-4">
                  <a className="flex h-12 items-center justify-center gap-3 rounded-md bg-red-600 px-5 text-sm font-black text-white hover:bg-red-500 transition-colors" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">
                    Ask in Community
                    <Icon className="h-4 w-4" name="external" />
                  </a>
                  <Link className="flex h-12 items-center justify-center gap-3 rounded-md border border-[var(--border)] px-5 text-sm font-black text-[var(--text-primary)] hover:bg-white/5 transition-colors" href="/docs/contributing">
                    Contribute
                  </Link>
                </div>
              </aside>
            </section>

            <div className="my-16 h-px w-full bg-zinc-900" />

            <section>
              <h2 className="text-xl font-black text-[var(--text-primary)]">Browse by Category</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {categories.map(({ title, icon, active }) => (
                  <button className={`flex items-center gap-4 rounded-lg border p-5 transition text-left ${active ? "border-red-500 bg-red-500/5" : "border-[var(--border)] bg-[var(--panel-strong)] hover:border-red-500/45"}`} key={title}>
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-md ${active ? "bg-red-500 text-white" : "bg-zinc-900 text-zinc-400"}`}>
                      <Icon className="h-5 w-5" name={icon} />
                    </span>
                    <h3 className="text-sm font-black text-[var(--text-primary)]">{title}</h3>
                  </button>
                ))}
              </div>
            </section>

            <section className="mt-16 grid gap-10 lg:grid-cols-[1fr_260px]">
              <div>
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-xl font-black text-[var(--text-primary)]">All Questions ({faqData.length})</h2>
                  <div className="flex items-center gap-3 text-sm text-zinc-500">
                    Sort by:
                    <button className="flex h-10 items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 font-bold text-[var(--text-primary)]">
                      Most Popular
                      <Icon className="h-4 w-4 rotate-90 text-zinc-500" name="chevron" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {faqData.map((item) => {
                    const isOpen = openIds.includes(item.id);
                    return (
                      <article 
                        id={item.id} 
                        className={`rounded-lg border transition-all scroll-mt-24 ${isOpen ? "border-zinc-700 bg-[var(--panel-strong)]" : "border-[var(--border)] bg-zinc-950/20 hover:border-zinc-800"}`} 
                        key={item.id}
                      >
                        <button 
                          onClick={() => toggleFaq(item.id)}
                          className="flex w-full items-center gap-4 px-6 py-5 text-left"
                        >
                          <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition-colors ${isOpen ? "border-red-500 text-red-500" : "border-zinc-700 text-zinc-600"}`}>
                            <Icon className="h-3.5 w-3.5" name={isOpen ? "minus" : "plus"} />
                          </span>
                          <h3 className="flex-1 text-base font-black text-[var(--text-primary)]">{item.question}</h3>
                          <Icon className={`h-5 w-5 text-zinc-600 transition-transform duration-300 ${isOpen ? "-rotate-90" : "rotate-90"}`} name="chevron" />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 ml-10">
                            <div className="h-px w-full bg-zinc-900 mb-6" />
                            <div className="text-sm leading-8 text-[var(--text-secondary)]">
                              {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
                            </div>
                            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                              <span>Helpful?</span>
                              <div className="flex gap-4">
                                <button className="hover:text-red-500 transition-colors flex items-center gap-2">
                                  <Icon className="h-4 w-4" name="thumbsUp" /> Yes
                                </button>
                                <button className="hover:text-red-500 transition-colors flex items-center gap-2">
                                  <Icon className="h-4 w-4" name="thumbsDown" /> No
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </div>

              <aside className="space-y-8">
                <section className="rounded-xl border border-[var(--border)] bg-[var(--panel-strong)] p-6">
                  <h2 className="text-sm font-black uppercase tracking-widest text-zinc-500">Top Questions</h2>
                  <div className="mt-6 space-y-5">
                    {topQuestions.map((item) => (
                      <a 
                        className="block text-sm font-bold leading-6 text-[var(--text-primary)] hover:text-red-500 transition-colors" 
                        href={`#${item.id}`}
                        key={item.id}
                        onClick={(e) => {
                          if (!openIds.includes(item.id)) toggleFaq(item.id);
                        }}
                      >
                        {item.question}
                      </a>
                    ))}
                  </div>
                </section>

                <section className="rounded-xl border border-red-500/10 bg-red-500/[0.02] p-6 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-red-500/10 text-red-500">
                    <Icon className="h-7 w-7" name="headset" />
                  </div>
                  <h2 className="mt-6 text-lg font-black text-[var(--text-primary)]">Need more help?</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                    Join our Discord community for real-time support.
                  </p>
                  <a className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-red-600 px-6 text-sm font-black text-white hover:bg-red-500 transition-colors" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">
                    Join Community
                  </a>
                </section>
              </aside>
            </section>

            <div className="my-16 h-px w-full bg-zinc-900" />

            <section>
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-500">
                  <Icon className="h-7 w-7" name="book" />
                </span>
                <div>
                  <h2 className="text-xl font-black text-[var(--text-primary)]">Explore Help Topics</h2>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">Quick guides to help you on your journey.</p>
                </div>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {helpTopics.map(([title, detail, icon, href]) => (
                  <article className="rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-6 transition hover:border-zinc-700" key={title}>
                    <span className="grid h-11 w-11 place-items-center rounded-md bg-zinc-900 text-zinc-500">
                      <Icon className="h-6 w-6" name={icon as string} />
                    </span>
                    <h3 className="mt-5 text-sm font-black text-[var(--text-primary)]">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-500 min-h-[48px]">{detail}</p>
                    <Link className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-red-500 hover:text-red-400" href={href}>
                      Read Guide →
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
