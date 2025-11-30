"use client";

import { cn } from "@/lib/utils/cn";

interface DividerProps {
  text?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export default function Divider({
  text,
  className = "",
  orientation = "horizontal",
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div className={cn("w-px h-full bg-border", className)} aria-hidden="true" />
    );
  }

  if (text) {
    return (
      <div className={cn("relative flex items-center py-4", className)}>
        <div className="flex-1 border-t border-border" />
        <span className="px-4 text-sm text-muted-foreground">{text}</span>
        <div className="flex-1 border-t border-border" />
      </div>
    );
  }

  return (
    <div
      className={cn("border-t border-border", className)}
      aria-hidden="true"
    />
  );
}

