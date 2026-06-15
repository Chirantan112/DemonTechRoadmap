"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/src/lib/utils";
import { Code, Bug, MessageSquare } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll("main h2, main h3"));
      const newHeadings = elements.map((elem) => {
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
    <aside className="w-[300px] shrink-0 hidden xl:block sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto no-scrollbar py-12 pr-12 pl-4">
      <div className="relative pl-6">
        {/* Reading Progress Line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#111]">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-[#ef4444] origin-top"
            style={{ scaleY }}
          />
        </div>

        <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-8">
          On this page
        </h4>
        
        <ul className="space-y-4">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={cn(
                "transition-all duration-300",
                heading.level === 3 ? "ml-4" : ""
              )}
            >
              <a
                href={`#${heading.id}`}
                className={cn(
                  "text-sm transition-colors relative block leading-snug",
                  activeId === heading.id 
                    ? "text-[#ef4444] font-bold" 
                    : "text-[#444] hover:text-[#a1a1aa]"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 pt-8 border-t border-[#111] space-y-6">
          <h4 className="text-[10px] font-black text-[#333] uppercase tracking-[0.2em]">
            Resources
          </h4>
          <div className="flex flex-col gap-4">
            <ResourceLink icon={Code} label="Edit on GitHub" />
            <ResourceLink icon={Bug} label="Report an issue" />
            <ResourceLink icon={MessageSquare} label="Ask Community" />
          </div>
        </div>
      </div>
    </aside>
  );
}

function ResourceLink({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <a href="#" className="flex items-center gap-3 text-xs font-bold text-[#444] hover:text-[#ef4444] transition-colors group">
      <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
      {label}
    </a>
  );
}
