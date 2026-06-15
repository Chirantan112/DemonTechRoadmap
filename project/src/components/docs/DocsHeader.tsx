import React from "react";
import { ChevronRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";

interface DocsHeaderProps {
  title: string;
  description: string;
  category: string;
  readingTime?: string;
  updatedAt?: string;
}

export default function DocsHeader({
  title,
  description,
  category,
  readingTime = "5 min read",
  updatedAt = "Updated recently",
}: DocsHeaderProps) {
  return (
    <div className="mb-12 pb-8 border-b border-[#1f1f1f]">
      <div className="flex items-center gap-2 text-sm text-[#a1a1aa] mb-6">
        <span className="text-[#ef4444] font-medium px-2 py-0.5 bg-[#ef4444]/10 rounded-md">
          {category}
        </span>
        <ChevronRight className="h-4 w-4" />
        <span className="truncate">{title}</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-black text-[#ffffff] mb-4 tracking-tight">
        {title}
      </h1>
      
      <p className="text-lg md:text-xl text-[#a1a1aa] leading-relaxed max-w-3xl mb-8">
        {description}
      </p>

      <div className="flex items-center gap-6 text-sm text-[#a1a1aa]">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{readingTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{updatedAt}</span>
        </div>
      </div>
    </div>
  );
}
