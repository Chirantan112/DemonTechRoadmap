"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Code, 
  MessageSquare, 
  Sun, 
  Moon, 
  Command, 
  Menu, 
  X,
  ChevronRight
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/src/lib/utils";
import { DOC_LANGUAGES } from "@/src/config/docs-content";

export default function DocsNavbar({ 
  langId, 
  topicTitle 
}: { 
  langId: string, 
  topicTitle: string 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled 
          ? "bg-[#050505]/80 backdrop-blur-xl border-[#1f1f1f] py-3" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-[1600px] mx-auto px-6 flex items-center justify-between gap-8">
        {/* Left: Logo & Breadcrumb */}
        <div className="flex items-center gap-6 shrink-0">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#ef4444] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.4)] group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-xl italic">D</span>
            </div>
            <span className="font-black text-xl tracking-tighter hidden sm:block">DEMON<span className="text-[#ef4444]">TECH</span></span>
          </Link>
          
          <div className="hidden md:flex items-center gap-2 text-sm font-bold text-[#a1a1aa]">
            <span className="w-1 h-1 rounded-full bg-[#333]" />
            <span className="uppercase tracking-widest text-[10px] text-[#ef4444]">{langId}</span>
            <ChevronRight className="h-3 w-3" />
            <span className="truncate max-w-[150px]">{topicTitle}</span>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-2xl hidden lg:block relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-[#a1a1aa] group-focus-within:text-[#ef4444] transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search documentation..." 
            className="w-full bg-[#0f0f0f] border border-[#1f1f1f] rounded-full py-2.5 pl-11 pr-12 text-sm text-white placeholder:text-[#555] focus:outline-none focus:border-[#ef4444]/50 focus:ring-4 focus:ring-[#ef4444]/5 transition-all"
          />
          <div className="absolute inset-y-0 right-4 flex items-center gap-1">
            <kbd className="bg-[#1f1f1f] text-[#a1a1aa] px-1.5 py-0.5 rounded text-[10px] font-mono flex items-center gap-0.5">
              <Command className="h-2 w-2" />K
            </kbd>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <Link 
            href="https://github.com" 
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#1f1f1f] hover:bg-[#1f1f1f] transition-colors text-[#a1a1aa] hover:text-white"
          >
            <Code className="h-5 w-5" />
          </Link>
          <Link 
            href="https://discord.gg/yWtjK2Tb8T" 
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#1f1f1f] hover:bg-[#1f1f1f] transition-colors text-[#a1a1aa] hover:text-white"
          >
            <MessageSquare className="h-5 w-5" />
          </Link>
          <div className="w-[1px] h-6 bg-[#1f1f1f] mx-1" />
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#1f1f1f] hover:bg-[#1f1f1f] transition-colors text-[#a1a1aa] hover:text-white">
            <Sun className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ef4444] origin-left z-50"
        style={{ scaleX }}
      />
    </header>
  );
}
