"use client";

import React, { useMemo, useState } from "react";
import { ResourceCard, Sidebar } from ".";
import resources from "../data/resources";

const ALL_CATEGORIES = "all";

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const iconPaths: Record<string, React.ReactNode> = {
    search: <path d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />,
  };
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

export default function SearchableResources() {
  const [q, setQ] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);

  const normalized = (value?: string) => (value || "").toLowerCase();

  const categories = useMemo(() => {
    const counts = new Map<string, number>();

    resources.forEach((resource) => {
      (resource.tags ?? ["uncategorized"]).forEach((tag) => {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      });
    });

    return [
      { id: ALL_CATEGORIES, label: "All resources", count: resources.length },
      ...Array.from(counts.entries())
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([tag, count]) => ({
          id: tag,
          label: tag.replace(/-/g, " "),
          count,
        })),
    ];
  }, []);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();

    const matchesCategory = (resourceTags?: string[]) => {
      if (activeCategory === ALL_CATEGORIES) return true;
      return (resourceTags ?? []).some((tag) => tag.toLowerCase() === activeCategory);
    };

    if (term === "") {
      return resources.filter((resource) => matchesCategory(resource.tags));
    }

    return resources.filter((resource) => {
      if (!matchesCategory(resource.tags)) return false;
      if (normalized(resource.title).includes(term)) return true;
      if (normalized(resource.description).includes(term)) return true;
      if (resource.tags && resource.tags.some((tag) => tag.toLowerCase().includes(term))) {
        return true;
      }
      return false;
    });
  }, [activeCategory, q]);

  const hasSearchTerm = q.trim().length > 0;

  return (
    <section className="mt-8 w-full">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-lg font-black text-[var(--text-primary)]">
            Browse resources
          </h3>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Filter by category or search by keyword to narrow the list.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 py-2.5 shadow-sm focus-within:ring-4 focus-within:ring-red-500/20">
          <Icon className="h-5 w-5 text-[var(--text-muted)]" name="search" />
          <label htmlFor="search" className="sr-only">
            Search roadmaps and topics
          </label>
          <input
            id="search"
            value={q}
            onChange={(event) => setQ(event.target.value)}
            placeholder="Search by keyword..."
            className="w-full min-w-0 bg-transparent text-sm font-bold text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
          />
          <div className="shrink-0 text-[11px] font-black uppercase tracking-wider text-[var(--text-muted)]">
            {filtered.length} {filtered.length === 1 ? "result" : "results"}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <Sidebar
          title="Categories"
          description="Choose a topic to focus the list."
          items={categories}
          activeId={activeCategory}
          onSelect={setActiveCategory}
        />

        <div className="min-w-0 flex-1">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((resource) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                description={resource.description}
                href={resource.href}
                tags={resource.tags}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-12 text-center rounded-xl border border-zinc-800 bg-zinc-950/20 py-12 px-5">
              <p className="text-sm font-bold text-[var(--text-secondary)]">
                {hasSearchTerm
                  ? `No results for "${q}" in this category.`
                  : "No resources found in this category."}
              </p>
              <button 
                onClick={() => { setQ(""); setActiveCategory(ALL_CATEGORIES); }}
                className="mt-4 text-xs font-black uppercase tracking-widest text-red-500 hover:text-red-400"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
