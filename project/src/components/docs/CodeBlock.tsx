"use client";

import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, title }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden bg-[#1e1e1e] border border-[#333]">
      <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-[#333]">
        <span className="text-xs font-mono text-gray-400 uppercase">{title || language}</span>
        <button
          onClick={copyToClipboard}
          className="text-xs text-gray-400 hover:text-white transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm text-gray-300">
          <code>{code}</code>
        </pre>
      </div>
      <div className="px-4 py-3 bg-[#111] border-t border-[#333]">
        <button className="bg-[#22c55e] hover:bg-[#1ea34d] text-white px-4 py-1.5 rounded text-sm font-medium transition-colors">
          Try it Yourself »
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;
