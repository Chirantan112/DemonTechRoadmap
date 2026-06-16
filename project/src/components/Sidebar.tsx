"use client";

import { useId, useState } from "react";
import Badge from "./Badge";
import Button from "./Button";

export type SidebarItem = {
  id: string;
  label: string;
  count?: number;
};

type SidebarProps = {
  title: string;
  description?: string;
  items: SidebarItem[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
};

export default function Sidebar({
  title,
  description,
  items,
  activeId,
  onSelect,
  className = "",
}: SidebarProps) {
  const panelId = useId();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`w-full lg:w-80 ${className}`}>
      <div className="rounded-xl border border-zinc-200 bg-white/90 p-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80 lg:sticky lg:top-6">
        <div className="flex items-center justify-between gap-4 lg:block">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
              Navigation
            </p>
            <h3 className="mt-2 text-lg font-black text-zinc-950 dark:text-white">
              {title}
            </h3>
            {description ? (
              <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            ) : null}
          </div>

          <Button
            type="button"
            variant="secondary"
            size="sm"
            tone="light"
            className="font-bold dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900 lg:hidden"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? "Hide" : "Show"}
          </Button>
        </div>

        <div id={panelId} className={`${isOpen ? "mt-4" : "mt-4 hidden lg:block"}`}>
          <nav aria-label={title} className="space-y-1.5">
            {items.map((item) => {
              const isActive = item.id === activeId;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => {
                    onSelect(item.id);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg border px-4 py-2.5 text-left transition focus:outline-none focus:ring-4 ${
                    isActive
                      ? "border-red-500/40 bg-red-500/5 text-zinc-950 shadow-sm focus:ring-red-500/20 dark:text-white"
                      : "border-transparent text-zinc-700 hover:border-zinc-200 hover:bg-zinc-50 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:border-zinc-800 dark:hover:bg-zinc-900 dark:focus:ring-zinc-800"
                  }`}
                >
                  <span className="text-sm font-bold">{item.label}</span>
                  {typeof item.count === "number" ? (
                    <Badge
                      variant={isActive ? "red" : "default"}
                      className="ml-3"
                    >
                      {item.count}
                    </Badge>
                  ) : null}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
