"use client";

import { useState } from "react";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

type ThemeVars = CSSProperties & Record<`--${string}`, string>;

const navItems = ["Roadmaps", "Resources", "Guides", "Docs", "Community"];

const sidebarGroups = [
  {
    title: "Get Started",
    items: [
      { label: "Introduction", icon: "home", active: true },
      { label: "Quick Start", icon: "clock" },
      { label: "How Roadmaps Work", icon: "route" },
      { label: "Learning Paths", icon: "file" },
    ],
  },
  {
    title: "Browse",
    items: [
      { label: "All Roadmaps", icon: "grid" },
      { label: "By Category", icon: "briefcase" },
      { label: "Learning Resources", icon: "nodes" },
      { label: "Project Ideas", icon: "star" },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "Study Guide", icon: "book" },
      { label: "Best Practices", icon: "badge" },
      { label: "Common Questions", icon: "help" },
      { label: "Contributing", icon: "code" },
    ],
  },
  {
    title: "About",
    items: [
      { label: "About DemonTech", icon: "info" },
      { label: "Our Mission", icon: "spark" },
      { label: "Changelog", icon: "refresh" },
    ],
  },
];

const features = [
  {
    title: "Structured Learning",
    detail: "Follow step-by-step roadmaps designed by industry experts",
    icon: "map",
    tone: "teal",
  },
  {
    title: "Practical Projects",
    detail: "Build real projects and create an impressive portfolio",
    icon: "brackets",
    tone: "violet",
  },
  {
    title: "Community Support",
    detail: "Join a community of learners and get help along the way",
    icon: "users",
    tone: "amber",
  },
];

const steps = [
  "Choose a roadmap that matches your goals and current skill level",
  "Follow the structured path with curated resources and projects",
  "Build projects, track progress, and grow your skills",
  "Join our community and never stop learning",
];

const pageLinks = [
  "What is DemonTech Roadmap?",
  "How It Works",
  "Key Features",
  "Who Is This For?",
  "Getting Started",
];

const iconPaths: Record<string, ReactNode> = {
  home: (
    <path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-8.5Z" />
  ),
  clock: <path d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  route: <path d="M5 7h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h10M5 7l3-3M5 7l3 3m11 9-3-3m3 3-3 3" />,
  file: <path d="M7 3h7l5 5v13H7V3Zm7 0v5h5" />,
  grid: <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" />,
  briefcase: <path d="M8 7V5h8v2m-13 4h18M4 7h18v14H4V7Z" />,
  nodes: <path d="M6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 5h8M8 19h8M6 7v10m12-10v10" />,
  star: <path d="m12 3 2.6 5.6 6.1.8-4.5 4.2 1.1 6-5.3-3-5.3 3 1.1-6-4.5-4.2 6.1-.8L12 3Z" />,
  book: <path d="M5 4h7a3 3 0 0 1 3 3v17a3 3 0 0 0-3-3H5V4Zm10 0h4v17h-4" />,
  badge: <path d="M7 3h10v5a5 5 0 0 1-10 0V3Zm2 14-2 5 5-2 5 2-2-5" />,
  help: <path d="M10 9a3 3 0 1 1 4 2.83c-1.1.47-2 1.03-2 2.17m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  code: <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-10-4 14" />,
  info: <path d="M12 10v7m0-10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  spark: <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Zm7 11 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />,
  refresh: <path d="M20 6v6h-6M4 18v-6h6m9-1a7 7 0 0 0-12.1-4M5 13a7 7 0 0 0 12.1 4" />,
  search: <path d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />,
  map: <path d="m4 6 5-2 6 2 5-2v14l-5 2-6-2-5 2V6Zm5-2v14m6-12v14" />,
  brackets: <path d="m9 7-5 5 5 5m6-10 5 5-5 5m-1-14-4 20" />,
  users: <path d="M16 19a4 4 0 0 0-8 0M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 8a3.5 3.5 0 0 0-3-3.45M17 8.5a2.5 2.5 0 0 1 0 5M5 19a3.5 3.5 0 0 1 3-3.45M7 8.5a2.5 2.5 0 0 0 0 5" />,
  sun: <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.36-6.36 1.42-1.42M4.22 19.78l1.42-1.42m0-12.72L4.22 4.22m15.56 15.56-1.42-1.42M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />,
  moon: <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3a8.7 8.7 0 1 0 11.5 11.5Z" />,
};

const darkTheme: ThemeVars = {
  "--page-bg": "#020817",
  "--header-bg": "rgba(5, 11, 23, 0.9)",
  "--panel-bg": "rgba(11, 20, 38, 0.72)",
  "--panel-strong": "rgba(10, 18, 37, 0.9)",
  "--field-bg": "rgba(7, 13, 30, 0.86)",
  "--border": "rgba(51, 65, 85, 0.68)",
  "--text-primary": "#ffffff",
  "--text-secondary": "#cbd5e1",
  "--text-muted": "#94a3b8",
  "--shadow": "rgba(0, 0, 0, 0.26)",
};

const lightTheme: ThemeVars = {
  "--page-bg": "#f7fafc",
  "--header-bg": "rgba(255, 255, 255, 0.92)",
  "--panel-bg": "rgba(255, 255, 255, 0.86)",
  "--panel-strong": "rgba(241, 245, 249, 0.96)",
  "--field-bg": "rgba(255, 255, 255, 0.9)",
  "--border": "rgba(203, 213, 225, 0.9)",
  "--text-primary": "#0f172a",
  "--text-secondary": "#334155",
  "--text-muted": "#64748b",
  "--shadow": "rgba(15, 23, 42, 0.08)",
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
    <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full border border-[var(--border)] bg-black shadow-[0_0_34px_rgba(239,68,68,0.28)]">
      <Image
        alt="DemonTech logo"
        className="h-full w-full object-cover"
        height={56}
        src="/demontech-logo.png"
        width={56}
      />
    </div>
  );
}

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <main
      className="min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-300"
      style={theme}
    >
      <div
        className={`fixed inset-0 -z-10 transition-colors duration-300 ${
          isDarkMode
            ? "bg-[radial-gradient(circle_at_48%_4%,rgba(239,68,68,0.13),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(91,72,255,0.16),transparent_26%),linear-gradient(180deg,#050b19_0%,#020817_45%,#020817_100%)]"
            : "bg-[radial-gradient(circle_at_42%_0%,rgba(239,68,68,0.12),transparent_30%),radial-gradient(circle_at_82%_4%,rgba(14,165,233,0.12),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_48%,#eef2ff_100%)]"
        }`}
      />

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex h-[86px] max-w-[1400px] items-center gap-6 px-5 sm:px-8 lg:px-16">
          <a className="flex min-w-fit items-center gap-4" href="#">
            <DemonTechLogo />
            <div>
              <p className="text-xl font-black leading-6 tracking-normal text-[var(--text-primary)]">
                DemonTech
              </p>
              <p className="text-sm leading-5 text-[var(--text-secondary)]">
                Documentation
              </p>
            </div>
          </a>

          <nav className="ml-auto hidden items-center gap-9 text-[15px] font-medium text-[var(--text-secondary)] lg:flex">
            {navItems.map((item) => (
              <a
                className={`relative transition hover:text-red-500 ${
                  item === "Docs" ? "text-cyan-400" : ""
                }`}
                href="#"
                key={item}
              >
                {item}
                {item === "Docs" && (
                  <span className="absolute -bottom-[31px] left-1/2 h-0.5 w-14 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.75)]" />
                )}
              </a>
            ))}
          </nav>

          <label className="ml-auto hidden h-11 w-[292px] items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm text-[var(--text-muted)] shadow-inner shadow-[var(--shadow)] lg:ml-6 xl:flex">
            <Icon className="h-5 w-5 text-[var(--text-muted)]" name="search" />
            <span className="flex-1">Search documentation...</span>
            <kbd className="rounded border border-[var(--border)] px-1.5 py-0.5 text-xs text-[var(--text-muted)]">
              / K
            </kbd>
          </label>

          <a
            className="hidden h-11 items-center rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition hover:scale-[1.02] md:inline-flex"
            href="https://discord.gg/yWtjK2Tb8T"
            rel="noreferrer"
            target="_blank"
          >
            Join Discord
          </a>

          <button
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--panel-strong)] text-[var(--text-primary)] shadow-inner shadow-[var(--shadow)] transition hover:border-red-400"
            onClick={() => setIsDarkMode((value) => !value)}
            title={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
            type="button"
          >
            <Icon className="h-5 w-5" name={isDarkMode ? "sun" : "moon"} />
          </button>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-[290px_minmax(0,1fr)] xl:grid-cols-[290px_minmax(0,1fr)_230px]">
        <aside className="hidden min-h-[calc(100vh-86px)] border-r border-[var(--border)] px-5 py-6 lg:block">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-4 shadow-2xl shadow-[var(--shadow)]">
            <h2 className="text-base font-bold text-[var(--text-primary)]">
              Documentation
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
              Everything you need to know about DemonTech Roadmap.
            </p>
          </div>

          <div className="mt-7 space-y-7">
            {sidebarGroups.map((group) => (
              <section key={group.title}>
                <h3 className="px-3 text-xs font-black uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                  {group.title}
                </h3>
                <div className="mt-3 space-y-1">
                  {group.items.map((item) => (
                    <a
                      className={`flex h-9 items-center gap-3 rounded-md px-3 text-sm font-medium transition ${
                        item.active
                          ? "border border-red-500/35 bg-[linear-gradient(135deg,rgba(127,29,29,0.92),rgba(24,24,27,0.88))] text-white shadow-[0_12px_30px_rgba(127,29,29,0.24)]"
                          : "text-[var(--text-secondary)] hover:bg-[var(--panel-strong)] hover:text-red-500"
                      }`}
                      href="#"
                      key={item.label}
                    >
                      <Icon className="h-4 w-4 shrink-0" name={item.icon} />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </aside>

        <section className="px-5 py-10 sm:px-8 lg:px-10 xl:px-12">
          <div className="max-w-[860px]">
            <div className="inline-flex rounded-md border border-[var(--border)] bg-[var(--panel-strong)] px-3 py-1 text-[11px] font-black uppercase tracking-[0.24em] text-[var(--text-secondary)]">
              Get Started
            </div>
            <h1 className="mt-5 text-balance text-4xl font-black leading-tight tracking-normal text-[var(--text-primary)] sm:text-5xl">
              Welcome to DemonTech Documentation
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
              Your complete guide to learning with roadmaps, resources, and
              project-based learning paths designed for real-world success.
            </p>

            <div className="mt-8 grid gap-5 rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-6 shadow-2xl shadow-[var(--shadow)] backdrop-blur sm:grid-cols-3 sm:p-8">
              {features.map((feature) => (
                <article
                  className="flex flex-col items-center text-center"
                  key={feature.title}
                >
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-lg border text-2xl shadow-lg ${
                      feature.tone === "teal"
                        ? "border-cyan-400/30 bg-cyan-400/15 text-cyan-400 shadow-cyan-950/20"
                        : feature.tone === "violet"
                          ? "border-violet-400/30 bg-violet-500/15 text-violet-400 shadow-violet-950/20"
                          : "border-red-400/30 bg-red-500/15 text-red-500 shadow-red-950/20"
                    }`}
                  >
                    <Icon className="h-7 w-7" name={feature.icon} />
                  </div>
                  <h2 className="mt-5 text-base font-bold text-[var(--text-primary)]">
                    {feature.title}
                  </h2>
                  <p className="mt-2 max-w-[220px] text-sm leading-6 text-[var(--text-secondary)]">
                    {feature.detail}
                  </p>
                </article>
              ))}
            </div>

            <section className="mt-9" id="what-is-demontech-roadmap">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                What is DemonTech Roadmap?
              </h2>
              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[var(--text-secondary)]">
                DemonTech Roadmap is an open-source platform that provides
                structured learning paths for developers and tech enthusiasts.
                We believe in learning by doing, which is why our roadmaps
                focus on practical skills and real-world projects.
              </p>
            </section>

            <section className="mt-8" id="how-it-works">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                How It Works
              </h2>
              <div className="mt-4 space-y-3">
                {steps.map((step, index) => (
                  <div
                    className="flex min-h-12 items-center gap-4 rounded-md border border-[var(--border)] bg-[var(--panel-bg)] px-4 text-sm text-[var(--text-secondary)] shadow-inner shadow-[var(--shadow)]"
                    key={step}
                  >
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-black text-white ${
                        index === 0
                          ? "bg-cyan-500"
                          : index === 1
                            ? "bg-violet-500"
                            : index === 2
                              ? "bg-red-500"
                              : "bg-sky-500"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        <aside className="hidden px-5 py-36 xl:block">
          <div className="sticky top-28 space-y-5">
            <section className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5 shadow-2xl shadow-[var(--shadow)]">
              <h2 className="text-xs font-black uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                On This Page
              </h2>
              <nav className="mt-4 space-y-4 text-sm text-[var(--text-muted)]">
                {pageLinks.map((link) => (
                  <a
                    className="block transition hover:text-red-500"
                    href="#"
                    key={link}
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </section>

            <section className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] shadow-2xl shadow-[var(--shadow)]">
              <div className="p-5">
                <h2 className="text-base font-bold text-[var(--text-primary)]">
                  Need Help?
                </h2>
                <p className="mt-3 text-xs leading-6 text-[var(--text-muted)]">
                  Join our community and get help from fellow learners.
                </p>
                <a
                  className="mt-4 flex h-10 items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--panel-strong)] px-3 text-sm text-[var(--text-secondary)] transition hover:border-red-400 hover:text-red-500"
                  href="https://discord.gg/yWtjK2Tb8T"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-indigo-400/20 text-xs text-indigo-500">
                    d
                  </span>
                  Join Discord
                </a>
              </div>
              <div className="border-t border-[var(--border)] p-5">
                <h2 className="text-base font-bold text-[var(--text-primary)]">
                  Have Feedback?
                </h2>
                <p className="mt-3 text-xs leading-6 text-[var(--text-muted)]">
                  Help us improve our documentation by sharing your feedback.
                </p>
                <a
                  className="mt-4 flex h-10 items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--panel-strong)] px-3 text-sm text-[var(--text-secondary)] transition hover:border-red-400 hover:text-red-500"
                  href="https://github.com/Demon-Die/DemonTechRoadmap"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-slate-400/20 text-xs text-slate-500">
                    g
                  </span>
                  Give Feedback
                </a>
              </div>
            </section>
          </div>
        </aside>
      </div>
    </main>
  );
}
