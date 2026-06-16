"use client";

import React from "react";
import { 
  ChevronRight, 
  Clock, 
  Calendar, 
  Signal, 
  BookOpen, 
  Terminal,
  Layers,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

interface DocsHeaderProps {
  title: string;
  description: string;
  category: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  readingTime?: string;
  updatedAt?: string;
  prerequisites?: string[];
}

export default function DocsHeader({
  title,
  description,
  category,
  difficulty = "Beginner",
  readingTime = "5 min read",
  updatedAt = "Jun 15, 2026",
  prerequisites = [],
}: DocsHeaderProps) {
  const difficultyColors = {
    Beginner: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    Intermediate: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    Advanced: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    Expert: "text-red-400 bg-red-500/10 border-red-500/20",
  };

  return (
    <div className="mb-16">
      {/* Breadcrumb / Category */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f0f0f] border border-[#1f1f1f]">
          <Sparkles className="h-3.5 w-3.5 text-[#ef4444]" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ef4444]">
            {category}
          </span>
        </div>
        <ChevronRight className="h-4 w-4 text-[#333]" />
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a1a1aa] truncate">
          {title}
        </span>
      </div>

      {/* Hero Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-5xl md:text-6xl lg:text-7xl font-black text-[#ffffff] mb-6 tracking-tight leading-[0.95]"
      >
        {title}
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="text-xl md:text-2xl text-[#a1a1aa] leading-relaxed max-w-3xl mb-12 font-medium"
      >
        {description}
      </motion.p>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-1 rounded-2xl bg-[#0f0f0f] border border-[#1f1f1f] mb-12">
        <MetaCard icon={Clock} label="Read Time" value={readingTime} />
        <MetaCard icon={Signal} label="Difficulty" value={difficulty} className={difficultyColors[difficulty]} />
        <MetaCard icon={Calendar} label="Last Updated" value={updatedAt} />
        <MetaCard icon={Layers} label="Version" value="v1.0.0" />
      </div>

      {/* Prerequisites Section */}
      {prerequisites.length > 0 && (
        <div className="p-6 rounded-2xl border border-[#1f1f1f] bg-[#050505] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <BookOpen className="h-24 w-24 text-white" />
          </div>
          <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
            Prerequisites
          </h4>
          <div className="flex flex-wrap gap-2">
            {prerequisites.map((p, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg bg-[#0f0f0f] border border-[#1f1f1f] text-xs font-bold text-[#a1a1aa]">
                {p}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MetaCard({ icon: Icon, label, value, className = "" }: { icon: any, label: string, value: string, className?: string }) {
  return (
    <div className="p-4 rounded-xl flex flex-col gap-1 transition-colors hover:bg-[#1a1a1a]">
      <div className="flex items-center gap-2 text-[#555]">
        <Icon className="h-3.5 w-3.5" />
        <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
      </div>
      <span className={cn("text-sm font-bold text-white", className)}>
        {value}
      </span>
    </div>
  );
}
