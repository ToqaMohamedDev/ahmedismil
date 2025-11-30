"use client";

import Image from "next/image";
import { FiUser } from "react-icons/fi";
import { cn } from "@/lib/utils/cn";

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function Avatar({
  src,
  alt,
  name,
  size = "md",
  className = "",
}: AvatarProps) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg",
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={cn(
        "relative rounded-full bg-primary/10 flex items-center justify-center overflow-hidden",
        sizes[size],
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || name || "Avatar"}
          fill
          className="object-cover"
        />
      ) : name ? (
        <span className="text-primary font-medium">{getInitials(name)}</span>
      ) : (
        <FiUser className="w-1/2 h-1/2 text-primary" />
      )}
    </div>
  );
}

