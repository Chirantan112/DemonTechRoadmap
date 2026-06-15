"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import { docsConfig } from "../../config/docsConfig";
import { Icon } from "./Icons";

type ThemeVars = CSSProperties & Record<`--${string}`, string>;

const navItems = ["Roadmaps", "Resources", "Guides", "Docs", "Community"];

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
          Documentation
        </p>
      </div>
    </Link>
  );
}

export function DocsLayout({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const pathname = usePathname();

  return (
    <main
      className="min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-300"
      style={theme}
    >
      <div
        className={`fixed inset-0 -z-10 transition-colors duration-300 ${
          isDarkMode
            ? "bg-[radial-gradient(circle_at_49%_12%,rgba(127,29,29,0.18),transparent_22%),radial-gradient(circle_at_83%_63%,rgba(127,29,29,0.18),transparent_24%),linear-gradient(180deg,#050505_0%,#030303_100%)]"
            : "bg-[radial-gradient(circle_at_47%_10%,rgba(239,68,68,0.1),transparent_25%),radial-gradient(circle_at_86%_62%,rgba(220,38,38,0.1),transparent_24%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"
        }`}
      />

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1260px] items-center gap-6 px-5 lg:px-8">
          <DemonTechLogo />

          <nav className="ml-auto hidden items-center gap-12 text-[15px] font-bold text-[var(--text-secondary)] lg:flex">
            {navItems.map((item) => (
              <a
                className={`relative transition hover:text-red-500 ${
                  item === "Docs" ? "text-red-500" : ""
                }`}
                href="#"
                key={item}
              >
                {item}
                {item === "Docs" && (
                  <span className="absolute -bottom-[30px] left-1/2 h-0.5 w-16 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.8)]" />
                )}
              </a>
            ))}
          </nav>

          <label className="ml-auto hidden h-11 w-[235px] items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm text-[var(--text-muted)] lg:ml-8 xl:flex">
            <Icon className="h-5 w-5" name="search" />
            <span className="flex-1">Search documentation...</span>
            <kbd className="rounded border border-[var(--border)] bg-[var(--panel-strong)] px-2 py-0.5 text-xs">
              K
            </kbd>
          </label>

          <a
            className="hidden h-11 items-center gap-2 rounded-md border border-red-600 bg-red-950/20 px-5 text-sm font-bold text-red-400 shadow-[0_0_26px_rgba(127,29,29,0.18)] transition hover:bg-red-600 hover:text-white md:inline-flex"
            href="https://discord.gg/yWtjK2Tb8T"
            rel="noreferrer"
            target="_blank"
          >
            <Icon className="h-5 w-5" name="discord" />
            Join Discord
          </a>

          <button
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--panel-strong)] text-[var(--text-primary)] transition hover:border-red-500"
            onClick={() => setIsDarkMode((value) => !value)}
            title={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
            type="button"
          >
            <Icon className="h-5 w-5" name={isDarkMode ? "sun" : "moon"} />
          </button>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1260px] grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="hidden min-h-[calc(100vh-72px)] border-r border-[var(--border)] px-5 py-5 lg:block">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5 shadow-2xl shadow-[var(--shadow)]">
            <h2 className="text-xs font-black uppercase tracking-[0.14em] text-[var(--text-primary)]">
              Documentation
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
              Everything you need to know about DemonTech Roadmap.
            </p>
            <div className="mt-5 h-px bg-[var(--border)]" />

            <div className="mt-6 space-y-7">
              {docsConfig.sidebar.map((group) => (
                <section key={group.title}>
                  <h3 className="text-xs font-black uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                    {group.title}
                  </h3>
                  <div className="mt-4 space-y-1">
                    {group.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          className={`flex h-10 items-center gap-3 rounded-md px-3 text-sm transition ${
                            isActive
                              ? "border border-red-500/40 bg-[linear-gradient(135deg,rgba(153,27,27,0.95),rgba(45,15,15,0.88))] text-white shadow-[0_16px_36px_rgba(127,29,29,0.32)]"
                              : "text-[var(--text-secondary)] hover:bg-[var(--panel-strong)] hover:text-red-500"
                          }`}
                          href={item.href}
                          key={item.label}
                        >
                          <Icon className="h-4 w-4 shrink-0" name={item.icon} />
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-7 rounded-md border border-red-500/30 bg-red-950/15 p-4">
              <h3 className="text-sm font-bold text-[var(--text-primary)]">
                Improve this docs
              </h3>
              <p className="mt-2 text-xs leading-5 text-[var(--text-muted)]">
                Found a mistake or have suggestions? Help us make our docs better.
              </p>
              <a
                className="mt-3 flex h-9 items-center justify-between rounded-md border border-[var(--border)] bg-[var(--panel-strong)] px-3 text-xs font-bold text-[var(--text-secondary)]"
                href="https://github.com/Demon-Die/DemonTechRoadmap"
                rel="noreferrer"
                target="_blank"
              >
                Edit this page
                <Icon className="h-3.5 w-3.5 text-red-500" name="pen" />
              </a>
            </div>
          </div>
        </aside>

        <section className="px-5 py-6 sm:px-8 lg:px-12">
          {children}
        </section>
      </div>
    </main>
  );
}
