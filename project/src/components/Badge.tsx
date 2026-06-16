import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "default" | "beginner" | "intermediate" | "advanced" | "outline" | "red";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  beginner:
    "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20",
  intermediate:
    "bg-amber-500/10 text-amber-500 border border-amber-500/20",
  advanced:
    "bg-rose-500/10 text-rose-500 border border-rose-500/20",
  outline:
    "bg-transparent text-zinc-500 border border-zinc-700 font-medium",
  red: 
    "bg-red-500 text-white",
};

export default function Badge({
  children,
  className = "",
  variant = "default",
  ...props
}: BadgeProps) {
  const classes = [
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
