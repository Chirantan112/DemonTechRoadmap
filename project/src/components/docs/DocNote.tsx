import React from "react";
import { Info, AlertTriangle, CheckCircle, Lightbulb, FileText } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface DocNoteProps {
  type: "info" | "warning" | "success" | "note" | "tip";
  title?: string;
  children: React.ReactNode;
}

export default function DocNote({ type = "info", title, children }: DocNoteProps) {
  const styles = {
    info: {
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      accent: "bg-blue-500",
      iconColor: "text-blue-400",
      Icon: Info,
      defaultTitle: "Info",
    },
    warning: {
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
      accent: "bg-yellow-500",
      iconColor: "text-yellow-400",
      Icon: AlertTriangle,
      defaultTitle: "Warning",
    },
    success: {
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      accent: "bg-green-500",
      iconColor: "text-green-400",
      Icon: CheckCircle,
      defaultTitle: "Success",
    },
    note: {
      bg: "bg-[#1f1f1f]/50",
      border: "border-[#1f1f1f]",
      accent: "bg-[#a1a1aa]",
      iconColor: "text-[#a1a1aa]",
      Icon: FileText,
      defaultTitle: "Note",
    },
    tip: {
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      accent: "bg-purple-500",
      iconColor: "text-purple-400",
      Icon: Lightbulb,
      defaultTitle: "Pro Tip",
    },
  };

  const config = styles[type];
  const IconComponent = config.Icon;

  return (
    <div
      className={cn(
        "my-8 relative overflow-hidden rounded-xl border p-6",
        config.bg,
        config.border
      )}
    >
      <div className={cn("absolute left-0 top-0 bottom-0 w-1", config.accent)} />
      
      <div className="flex gap-4">
        <IconComponent className={cn("h-6 w-6 shrink-0 mt-0.5", config.iconColor)} />
        <div className="flex-1">
          <h5 className={cn("text-base font-bold mb-2", config.iconColor)}>
            {title || config.defaultTitle}
          </h5>
          <div className="text-[15px] text-[#a1a1aa] leading-relaxed prose-code:text-[#ffffff] prose-code:bg-black/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
