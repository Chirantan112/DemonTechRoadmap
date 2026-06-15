"use client";

import React, { useState, useEffect } from "react";
import { Play, Maximize2, LayoutGrid } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface PlaygroundProps {
  initialHtml?: string;
  initialCss?: string;
  initialJs?: string;
  title?: string;
}

export default function Playground({
  initialHtml = "<h1>Hello DemonTech!</h1>\n<p>Welcome to the interactive playground.</p>",
  initialCss = "body {\n  font-family: system-ui, sans-serif;\n  background: #fff;\n  color: #000;\n  padding: 2rem;\n}\n\nh1 {\n  color: #ef4444;\n}",
  initialJs = "console.log('Playground ready!');",
  title = "Interactive Playground",
}: PlaygroundProps) {
  const [activeTab, setActiveTab] = useState<"html" | "css" | "js">("html");
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [js, setJs] = useState(initialJs);
  const [srcDoc, setSrcDoc] = useState("");

  const updatePreview = () => {
    const document = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;
    setSrcDoc(document);
  };

  // Initial render
  useEffect(() => {
    updatePreview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tabs = [
    { id: "html", label: "index.html" },
    { id: "css", label: "styles.css" },
    { id: "js", label: "script.js" },
  ] as const;

  return (
    <div className="my-10 rounded-xl overflow-hidden bg-[#0f0f0f] border border-[#1f1f1f] shadow-2xl flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#050505] border-b border-[#1f1f1f]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs font-bold text-[#ffffff] uppercase tracking-widest ml-2">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={updatePreview}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#ef4444] hover:bg-[#dc2626] text-white text-xs font-bold rounded-md transition-colors"
          >
            <Play className="h-3.5 w-3.5" />
            Run Code
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 h-[500px]">
        {/* Editor Pane */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-[#1f1f1f]">
          <div className="flex bg-[#050505] border-b border-[#1f1f1f]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2.5 text-xs font-mono transition-colors border-b-2",
                  activeTab === tab.id
                    ? "border-[#ef4444] text-[#ffffff] bg-[#0f0f0f]"
                    : "border-transparent text-[#a1a1aa] hover:text-[#ffffff] hover:bg-[#0f0f0f]/50"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex-1 p-4 bg-[#050505]">
            <textarea
              value={activeTab === "html" ? html : activeTab === "css" ? css : js}
              onChange={(e) => {
                const value = e.target.value;
                if (activeTab === "html") setHtml(value);
                if (activeTab === "css") setCss(value);
                if (activeTab === "js") setJs(value);
              }}
              className="w-full h-full bg-transparent text-[#a1a1aa] font-mono text-sm resize-none focus:outline-none focus:text-[#ffffff] transition-colors"
              spellCheck={false}
            />
          </div>
        </div>

        {/* Preview Pane */}
        <div className="flex flex-col bg-white h-full relative">
          <div className="absolute top-0 right-0 left-0 h-8 bg-[#f8fafc] border-b border-gray-200 flex items-center px-4">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Live Preview
            </span>
          </div>
          <iframe
            srcDoc={srcDoc}
            title="Live Preview"
            sandbox="allow-scripts"
            className="w-full flex-1 pt-8 border-none"
          />
        </div>
      </div>
    </div>
  );
}
