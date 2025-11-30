"use client";

import { motion } from "framer-motion";
import { FiAlertCircle, FiCheckCircle, FiInfo, FiAlertTriangle, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils/cn";

interface AlertProps {
  children: React.ReactNode;
  variant?: "success" | "error" | "warning" | "info";
  title?: string;
  onClose?: () => void;
  className?: string;
}

export default function Alert({
  children,
  variant = "info",
  title,
  onClose,
  className = "",
}: AlertProps) {
  const variants = {
    success: {
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-800",
      text: "text-green-800 dark:text-green-200",
      icon: FiCheckCircle,
    },
    error: {
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-200 dark:border-red-800",
      text: "text-red-800 dark:text-red-200",
      icon: FiAlertCircle,
    },
    warning: {
      bg: "bg-yellow-50 dark:bg-yellow-900/20",
      border: "border-yellow-200 dark:border-yellow-800",
      text: "text-yellow-800 dark:text-yellow-200",
      icon: FiAlertTriangle,
    },
    info: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-800",
      text: "text-blue-800 dark:text-blue-200",
      icon: FiInfo,
    },
  };

  const Icon = variants[variant].icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-lg border p-4",
        variants[variant].bg,
        variants[variant].border,
        className
      )}
    >
      <div className="flex items-start space-x-3 space-x-reverse">
        <Icon className={cn("w-5 h-5 flex-shrink-0 mt-0.5", variants[variant].text)} />
        <div className="flex-1">
          {title && (
            <h4 className={cn("font-semibold mb-1", variants[variant].text)}>
              {title}
            </h4>
          )}
          <div className={cn("text-sm", variants[variant].text)}>{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={cn("flex-shrink-0 hover:opacity-70", variants[variant].text)}
          >
            <FiX className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
}

