"use client";

import { motion } from "framer-motion";
import { FiInbox } from "react-icons/fi";

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
}

export default function EmptyState({
  title = "لا توجد نتائج",
  message = "لم يتم العثور على أي نتائج",
  icon,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-16"
    >
      <div className="flex justify-center mb-4">
        {icon || (
          <div className="p-4 bg-primary/10 rounded-full border border-border">
            <FiInbox className="w-12 h-12 text-primary" />
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{message}</p>
    </motion.div>
  );
}

