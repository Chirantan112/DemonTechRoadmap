"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsConfig } from "../../config/docsConfig";
import { Icon } from "./Icons";

export function Pager() {
  const pathname = usePathname();

  const allItems = docsConfig.sidebar.flatMap((group) => group.items);
  const currentIndex = allItems.findIndex((item) => item.href === pathname);

  if (currentIndex === -1) return null;

  const prevItem = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  const nextItem = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

  return (
    <div className="mt-16 flex flex-col gap-4 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
      {prevItem ? (
        <Link
          className="group flex flex-1 flex-col items-start gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-4 transition hover:border-red-500/50 hover:shadow-[0_8px_24px_rgba(127,29,29,0.12)]"
          href={prevItem.href}
        >
          <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] group-hover:text-red-400">
            <Icon className="h-4 w-4 rotate-180" name="chevron" />
            Previous
          </span>
          <span className="text-base font-black text-[var(--text-primary)]">
            {prevItem.label}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {nextItem ? (
        <Link
          className="group flex flex-1 flex-col items-end gap-2 text-right rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-4 transition hover:border-red-500/50 hover:shadow-[0_8px_24px_rgba(127,29,29,0.12)]"
          href={nextItem.href}
        >
          <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] group-hover:text-red-400">
            Next
            <Icon className="h-4 w-4" name="chevron" />
          </span>
          <span className="text-base font-black text-[var(--text-primary)]">
            {nextItem.label}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
