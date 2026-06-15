"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import AuthButton from "./AuthButton";

const navItems = [
  { label: "Roadmaps", href: "/docs/all-roadmaps" },
  { label: "Resources", href: "/docs/resources" },
  { label: "Guides", href: "/docs/study-guide" },
  { label: "Docs", href: "/docs/html/home" },
  { label: "Community", href: "https://discord.gg/yWtjK2Tb8T" },
];

const icons: Record<string, ReactNode> = {
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
};

function Icon({ className = "", name }: { className?: string; name: keyof typeof icons }) {
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
      {icons[name]}
    </svg>
  );
}

export function Logo() {
  return (
    <Link className="flex min-w-fit items-center gap-3" href="/">
      <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-md border border-red-500/35 bg-black">
        <Image alt="DemonTech logo" className="h-full w-full object-cover" height={40} src="/demontech-logo.png" width={40} />
      </span>
      <span>
        <span className="block text-lg font-black leading-5 text-white">
          Demon<span className="text-red-500">Tech</span>
        </span>
        <span className="mt-1 block text-[11px] font-bold uppercase tracking-normal text-zinc-400">Roadmap</span>
      </span>
    </Link>
  );
}

export default function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-[#030409]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[62px] max-w-[1540px] items-center gap-5 px-5 lg:px-8">
        <Logo />
        <nav className="ml-auto hidden items-center gap-9 text-sm font-black text-zinc-200 lg:flex">
          {navItems.map((item) => (
            <Link className="transition hover:text-red-300" href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Link className="inline-flex h-10 items-center gap-2 rounded-md border border-red-500/40 bg-red-500 px-5 text-sm font-black text-white shadow-[0_0_24px_rgba(239,68,68,0.22)] transition hover:bg-red-400" href="/docs/all-roadmaps">
            Start Learning Free
            <span aria-hidden="true">→</span>
          </Link>
          <AuthButton />
        </div>
        <button
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          className="ml-auto grid h-10 w-10 place-items-center rounded-md border border-zinc-800 text-zinc-300 lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          type="button"
        >
          <Icon className="h-5 w-5" name="menu" />
        </button>
      </div>
      {menuOpen ? (
        <nav className="grid gap-1 border-t border-zinc-900 bg-[#050505] px-5 py-4 lg:hidden">
          {navItems.map((item) => (
            <Link className="rounded-md px-3 py-3 text-sm font-bold text-zinc-300 hover:bg-zinc-900" href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
          <div className="px-3 py-3">
            <AuthButton />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
