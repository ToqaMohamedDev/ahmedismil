"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface BackButtonProps {
  label?: string;
  className?: string;
}

export default function BackButton({ label = "العودة", className = "" }: BackButtonProps) {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.back()}
      whileHover={{ x: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center space-x-2 space-x-reverse text-muted-foreground hover:text-primary transition-colors ${className}`}
    >
      <FiArrowRight className="w-5 h-5" />
      <span>{label}</span>
    </motion.button>
  );
}

