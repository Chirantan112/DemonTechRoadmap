"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { cn } from "@/src/lib/utils";

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language,
  title,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-xl overflow-hidden bg-[#0f0f0f] border border-[#1f1f1f] shadow-2xl">
      {/* VS Code Style Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#050505] border-b border-[#1f1f1f]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          {title ? (
            <span className="text-xs font-mono text-[#a1a1aa] ml-2">
              {title}
            </span>
          ) : (
            <div className="flex items-center gap-1.5 ml-2 text-xs font-mono text-[#a1a1aa] uppercase bg-[#1f1f1f] px-2 py-0.5 rounded-md">
              <Terminal className="h-3 w-3" />
              {language}
            </div>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 text-xs font-medium text-[#a1a1aa] hover:text-[#ffffff] transition-colors bg-[#1f1f1f] hover:bg-[#333] px-2.5 py-1.5 rounded-md"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-green-400" />
              <span className="text-green-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Syntax Highlighting Body */}
      <div className="relative text-sm max-h-[500px] overflow-auto no-scrollbar">
        <SyntaxHighlighter
          language={language.toLowerCase() === "jsx" ? "javascript" : language.toLowerCase()}
          style={vscDarkPlus}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: "1.5rem",
            background: "transparent",
            fontSize: "14px",
            lineHeight: "1.6",
          }}
          lineNumberStyle={{
            minWidth: "2.5em",
            paddingRight: "1em",
            color: "#333",
            textAlign: "right",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
