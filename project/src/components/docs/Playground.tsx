"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Play, 
  Maximize2, 
  Minimize2, 
  LayoutGrid, 
  RefreshCw,
  Terminal,
  Zap,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/src/lib/utils";

interface PlaygroundProps {
  initialHtml?: string;
  initialCss?: string;
  initialJs?: string;
  title?: string;
}

export default function Playground({
  initialHtml = "<h1>Hello DemonTech!</h1>",
  initialCss = "h1 { color: #ef4444; font-family: sans-serif; }",
  initialJs = "console.log('Playground ready!');",
  title = "Interactive Playground",
}: PlaygroundProps) {
  const [activeTab, setActiveTab] = useState<"html" | "css" | "js">("html");
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [js, setJs] = useState(initialJs);
  const [srcDoc, setSrcDoc] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [dividerPosition, setDividerPosition] = useState(50); // percentage
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePreview = () => {
    const document = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { margin: 0; padding: 2rem; background: #000; color: #fff; font-family: -apple-system, system-ui, sans-serif; }
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;
    setSrcDoc(document);
  };

  useEffect(() => {
    updatePreview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetCode = () => {
    setHtml(initialHtml);
    setCss(initialCss);
    setJs(initialJs);
  };

  return (
    <div 
      className={cn(
        "my-16 rounded-[2rem] overflow-hidden border border-[#1f1f1f] bg-[#050505] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col transition-all duration-500",
        isFullscreen ? "fixed inset-4 z-[100] m-0" : "relative"
      )}
      ref={containerRef}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#0a0a0a] border-b border-[#1f1f1f]">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ef4444]/20 border border-[#ef4444]/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-[#ef4444]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
              {title}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={resetCode}
            className="p-2 text-[#555] hover:text-white transition-colors"
            title="Reset Code"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
          <button 
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 text-[#555] hover:text-white transition-colors"
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
          <button
            onClick={updatePreview}
            className="flex items-center gap-2 px-5 py-2 bg-[#ef4444] hover:bg-[#dc2626] text-white text-[11px] font-black uppercase tracking-widest rounded-xl transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:scale-105 active:scale-95"
          >
            <Play className="h-3.5 w-3.5 fill-white" />
            Run Preview
          </button>
        </div>
      </div>

      {/* Editor & Preview Area */}
      <div className="flex flex-col lg:flex-row h-[600px] bg-[#050505]">
        {/* Editor Pane */}
        <div className="flex flex-col flex-1 border-b lg:border-b-0 lg:border-r border-[#1f1f1f] bg-[#050505]">
          <div className="flex px-4 bg-[#0a0a0a] border-b border-[#1f1f1f]">
            {(['html', 'css', 'js'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all relative",
                  activeTab === tab
                    ? "text-[#ef4444]"
                    : "text-[#444] hover:text-[#a1a1aa]"
                )}
              >
                {tab === 'js' ? 'script.js' : tab === 'css' ? 'style.css' : 'index.html'}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activePlaygroundTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ef4444]" 
                  />
                )}
              </button>
            ))}
          </div>
          <div className="flex-1 relative group">
            <textarea
              value={activeTab === "html" ? html : activeTab === "css" ? css : js}
              onChange={(e) => {
                const value = e.target.value;
                if (activeTab === "html") setHtml(value);
                if (activeTab === "css") setCss(value);
                if (activeTab === "js") setJs(value);
              }}
              className="w-full h-full bg-[#050505] p-6 text-[#a1a1aa] font-mono text-[14px] leading-relaxed resize-none focus:outline-none focus:text-white selection:bg-[#ef4444]/30"
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
            />
            {/* Line number simulation */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#080808] border-r border-[#151515] flex flex-col pt-6 pointer-events-none items-center">
              {[...Array(20)].map((_, i) => (
                <span key={i} className="text-[10px] font-mono text-[#333] leading-[21px]">{i + 1}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Preview Pane */}
        <div className="flex-1 flex flex-col bg-black">
          <div className="px-6 py-3 bg-[#0a0a0a] border-b border-[#1f1f1f] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-3 w-3 text-yellow-500 fill-yellow-500" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#555]">
                Live Preview
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#111]" />
              <div className="w-12 h-1 bg-[#111] rounded-full" />
            </div>
          </div>
          <div className="flex-1 relative p-4 lg:p-8 overflow-hidden">
             {/* Device frame simulation */}
             <div className="w-full h-full border border-[#1f1f1f] rounded-2xl overflow-hidden bg-black shadow-2xl relative">
                <iframe
                  srcDoc={srcDoc}
                  title="Live Preview"
                  sandbox="allow-scripts"
                  className="w-full h-full border-none bg-black"
                />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
