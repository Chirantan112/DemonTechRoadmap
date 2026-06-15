"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Wait a brief moment to ensure markdown content has rendered
    const timer = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll("main h2, main h3"));
      const newHeadings = elements.map((elem) => {
        // Ensure elements have IDs
        if (!elem.id) {
          elem.id = elem.textContent?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") || "";
        }
        return {
          id: elem.id,
          text: elem.textContent || "",
          level: Number(elem.tagName.charAt(1)),
        };
      });
      setHeadings(newHeadings);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    headings.forEach((heading) => {
      const elem = document.getElementById(heading.id);
      if (elem) observer.observe(elem);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className="w-[240px] shrink-0 hidden xl:block sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto no-scrollbar py-10 pr-8">
      <div className="pl-4 border-l border-[#1f1f1f]">
        <h4 className="text-xs font-bold text-[#ffffff] uppercase tracking-wider mb-4">
          On this page
        </h4>
        <ul className="space-y-3 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={cn(
                "transition-colors duration-200 line-clamp-2",
                heading.level === 3 ? "ml-4" : ""
              )}
            >
              <a
                href={`#${heading.id}`}
                className={cn(
                  "hover:text-[#ffffff] transition-colors relative block",
                  activeId === heading.id ? "text-[#ef4444] font-medium" : "text-[#a1a1aa]"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {activeId === heading.id && (
                  <motion.span
                    layoutId="activeTOC"
                    className="absolute -left-[17px] top-1.5 w-[2px] h-3 bg-[#ef4444] rounded-full"
                  />
                )}
                {heading.text}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-8 border-t border-[#1f1f1f]">
          <h4 className="text-xs font-bold text-[#ffffff] uppercase tracking-wider mb-4">
            Helpful Resources
          </h4>
          <ul className="space-y-3 text-sm text-[#a1a1aa]">
            <li><a href="#" className="hover:text-[#ef4444] transition-colors">Edit this page on GitHub</a></li>
            <li><a href="#" className="hover:text-[#ef4444] transition-colors">Report an issue</a></li>
            <li><a href="https://discord.gg/yWtjK2Tb8T" className="hover:text-[#ef4444] transition-colors">Ask the community</a></li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
