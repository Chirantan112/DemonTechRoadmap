import React from 'react';

interface DocNoteProps {
  type: "note" | "tip" | "warning" | "example";
  children: React.ReactNode;
  title?: string;
}

const DocNote: React.FC<DocNoteProps> = ({ type, children, title }) => {
  const styles = {
    note: "border-l-4 border-blue-500 bg-blue-500/10",
    tip: "border-l-4 border-[#22c55e] bg-[#22c55e]/10",
    warning: "border-l-4 border-yellow-500 bg-yellow-500/10",
    example: "bg-[#1e1e1e] border border-[#333]",
  };

  const prefixes = {
    note: "Note:",
    tip: "Tip:",
    warning: "Warning:",
    example: "Example",
  };

  return (
    <div className={`my-6 p-4 rounded-r-lg ${styles[type]}`}>
      {(title || type === "example") && (
        <div className={`font-bold mb-2 ${type === "example" ? "text-lg border-b border-[#333] pb-2 mb-3" : ""}`}>
          {title || prefixes[type]}
        </div>
      )}
      <div className="text-gray-300 leading-relaxed">
        {type !== "example" && !title && <span className="font-bold mr-2">{prefixes[type]}</span>}
        {children}
      </div>
    </div>
  );
};

export default DocNote;
