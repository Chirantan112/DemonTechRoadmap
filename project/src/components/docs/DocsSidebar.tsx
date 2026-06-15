"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Search, CircleDashed, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/src/lib/utils";
import type { DocLanguage } from "@/src/types/docs";

interface DocsSidebarProps {
  language: DocLanguage;
  activeTopicSlug: string;
}

export default function DocsSidebar({ language, activeTopicSlug }: DocsSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    // By default, expand all sections or just the one with the active topic
    language.sections.reduce((acc, sec) => {
      acc[sec.title] = true; // Auto-expand all for now
      return acc;
    }, {} as Record<string, boolean>)
  );

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const filteredSections = language.sections.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0);

  return (
    <aside className="w-[280px] shrink-0 border-r border-[#1f1f1f] bg-[#050505] hidden lg:block sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto no-scrollbar py-6 pl-8 pr-4">
      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a1a1aa]" />
        <input
          type="text"
          placeholder="Search docs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#0f0f0f] border border-[#1f1f1f] rounded-lg pl-9 pr-4 py-2 text-sm text-[#ffffff] placeholder:text-[#a1a1aa] focus:outline-none focus:border-[#ef4444] transition-colors"
        />
      </div>

      {/* Language Header */}
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-10 h-10 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/20 flex items-center justify-center text-xl">
          {language.icon}
        </div>
        <div>
          <h2 className="text-sm font-black text-white uppercase tracking-widest">{language.label}</h2>
          <p className="text-[10px] font-bold text-[#555] uppercase tracking-widest">Documentation</p>
        </div>
      </div>

      {/* Progress Card */}
      <div className="mb-8 p-4 rounded-xl border border-[#1f1f1f] bg-[#0f0f0f] bg-gradient-to-br from-[#0f0f0f] to-[#1a0a0a]">
        <h4 className="text-xs font-bold text-[#a1a1aa] uppercase tracking-wider mb-2">Your Progress</h4>
        <div className="flex items-end justify-between mb-2">
          <span className="text-2xl font-black text-[#ffffff]">0%</span>
          <span className="text-sm text-[#a1a1aa] mb-1">0/{language.topics.length}</span>
        </div>
        <div className="w-full h-1.5 bg-[#1f1f1f] rounded-full overflow-hidden">
          <div className="h-full bg-[#ef4444] w-0 transition-all duration-500" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-6">
        {filteredSections.map((section) => (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full text-left mb-2 group"
            >
              <h3 className="text-sm font-bold text-[#ffffff] group-hover:text-[#ef4444] transition-colors">
                {section.title}
              </h3>
              <ChevronRight
                className={cn(
                  "h-4 w-4 text-[#a1a1aa] transition-transform duration-200",
                  expandedSections[section.title] ? "rotate-90" : ""
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {expandedSections[section.title] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-1 mt-2 border-l border-[#1f1f1f] ml-1.5 pl-3">
                    {section.items.map((item) => {
                      const isActive = activeTopicSlug === item.slug;
                      return (
                        <li key={item.slug}>
                          <Link
                            href={item.path}
                            className={cn(
                              "flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-all duration-200",
                              isActive
                                ? "text-[#ef4444] bg-[#ef4444]/10 font-medium"
                                : "text-[#a1a1aa] hover:text-[#ffffff] hover:bg-[#0f0f0f]"
                            )}
                          >
                            {isActive ? (
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#ef4444] shrink-0" />
                            ) : (
                              <CircleDashed className="h-3.5 w-3.5 text-[#333] shrink-0" />
                            )}
                            <span className="truncate">{item.title.replace(`${language.label} `, '')}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>
    </aside>
  );
}
