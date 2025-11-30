"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hover = false,
  onClick,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      onClick={onClick}
      className={cn(
        "bg-card border border-border rounded-xl p-6",
        hover && "cursor-pointer card-hover",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

