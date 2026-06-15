"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsConfig } from "../../config/docsConfig";
import { Icon } from "./Icons";

export function Breadcrumbs() {
  const pathname = usePathname();

  let currentGroup = "";
  let currentItem = "";

  for (const group of docsConfig.sidebar) {
    for (const item of group.items) {
      if (item.href === pathname) {
        currentGroup = group.title;
        currentItem = item.label;
        break;
      }
    }
    if (currentItem) break;
  }

  if (!currentItem) return null;

  return (
    <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[var(--text-muted)]">
      <Link className="flex items-center gap-2 transition hover:text-[var(--text-primary)]" href="/">
        <Icon className="h-4 w-4" name="home" />
        Home
      </Link>
      <Icon className="h-3 w-3" name="chevron" />
      <span className="text-[var(--text-secondary)]">{currentGroup}</span>
      <Icon className="h-3 w-3" name="chevron" />
      <span className="font-bold text-[var(--text-primary)]">{currentItem}</span>
    </div>
  );
}
