"use client";

import { useEffect, useState } from "react";

export default function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input/textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      
      if (e.key === "?" && !e.shiftKey && !e.metaKey && !e.ctrlKey) {
        setIsOpen(true);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-xl border border-zinc-800 bg-[#0A0A0A] p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-white">Keyboard Shortcuts</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-zinc-500 hover:text-white"
            aria-label="Close shortcuts dialog"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-400">Search / Command Palette</span>
            <kbd className="rounded border border-zinc-700 bg-zinc-800 px-2 py-1 text-xs font-mono text-zinc-300">⌘K</kbd>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-400">Show this help menu</span>
            <kbd className="rounded border border-zinc-700 bg-zinc-800 px-2 py-1 text-xs font-mono text-zinc-300">?</kbd>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-400">Close modals</span>
            <kbd className="rounded border border-zinc-700 bg-zinc-800 px-2 py-1 text-xs font-mono text-zinc-300">ESC</kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
