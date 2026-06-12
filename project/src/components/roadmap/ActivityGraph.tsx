"use client";

import { useMemo, useEffect, useState } from "react";

/**
 * ActivityGraph component.
 * Renders a GitHub-style contribution graph based on completed nodes over time.
 * For now, this uses total completed items from localStorage to generate a deterministic graph.
 */
export default function ActivityGraph() {
  const weeks = 52;
  const daysPerWeek = 7;

  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (key && key.endsWith("-completed")) {
        try {
          const arr = JSON.parse(window.localStorage.getItem(key) || "[]");
          if (Array.isArray(arr)) {
            count += arr.length;
          }
        } catch (e) {}
      }
    }
    setCompletedCount(count);
  }, []);

  // Generate deterministic contribution data based on completedCount
  const grid = useMemo(() => {
    const data = [];
    let remaining = completedCount;
    
    // Create an empty grid
    for (let i = 0; i < weeks; i++) {
      const week = [];
      for (let j = 0; j < daysPerWeek; j++) {
        week.push(0);
      }
      data.push(week);
    }
    
    // Fill backwards from the most recent day
    for (let i = weeks - 1; i >= 0 && remaining > 0; i--) {
      for (let j = 6; j >= 0 && remaining > 0; j--) {
        // Pseudo-random but deterministic spread based on index
        if ((i + j) % 3 === 0 || i > weeks - 3) {
          const level = Math.min(4, remaining, Math.floor((i * j) % 3) + 1);
          data[i][j] = level;
          remaining -= level;
        }
      }
    }
    
    return data;
  }, [completedCount]);

  const getColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-red-500/20";
      case 2:
        return "bg-red-500/40";
      case 3:
        return "bg-red-500/60";
      case 4:
        return "bg-red-500/80";
      default:
        return "bg-zinc-900 border border-zinc-800";
    }
  };

  return (
    <section className="mt-6 rounded-md border border-zinc-800 bg-zinc-950 p-5">
      <h2 className="text-2xl font-black text-white">Weekly Activity</h2>
      <p className="mt-1 text-sm text-zinc-400">Your roadmap progress over the last year.</p>
      <div className="mt-6 flex w-full overflow-x-auto pb-4">
        <div className="flex gap-1">
          {grid.map((week, wIndex) => (
            <div className="flex flex-col gap-1" key={wIndex}>
              {week.map((level, dIndex) => (
                <div
                  className={`h-3 w-3 rounded-sm ${getColor(level)}`}
                  key={dIndex}
                  title={`Activity level ${level}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
        <span>Less</span>
        <div className="h-3 w-3 rounded-sm border border-zinc-800 bg-zinc-900" />
        <div className="h-3 w-3 rounded-sm bg-red-500/20" />
        <div className="h-3 w-3 rounded-sm bg-red-500/40" />
        <div className="h-3 w-3 rounded-sm bg-red-500/60" />
        <div className="h-3 w-3 rounded-sm bg-red-500/80" />
        <span>More</span>
      </div>
    </section>
  );
}
