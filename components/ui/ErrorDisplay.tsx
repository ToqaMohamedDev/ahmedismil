"use client";

import { motion } from "framer-motion";
import { FiAlertCircle, FiRefreshCw } from "react-icons/fi";
import { handleFirebaseError } from "@/lib/utils/errors";
import Button from "./Button";

interface ErrorDisplayProps {
  error: Error | unknown;
  onRetry?: () => void;
  title?: string;
}

export default function ErrorDisplay({
  error,
  onRetry,
  title = "حدث خطأ",
}: ErrorDisplayProps) {
  const errorMessage =
    error instanceof Error
      ? handleFirebaseError(error)
      : "حدث خطأ غير متوقع";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-[400px] p-8"
    >
      <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-full mb-4">
        <FiAlertCircle className="w-12 h-12 text-red-600 dark:text-red-400" />
      </div>
      <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-center mb-6 max-w-md">{errorMessage}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="primary">
          <FiRefreshCw className="w-4 h-4 ml-2" />
          إعادة المحاولة
        </Button>
      )}
    </motion.div>
  );
}

