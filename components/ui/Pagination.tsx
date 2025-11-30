"use client";

import { motion } from "framer-motion";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-2 space-x-reverse mt-8">
      <motion.button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-foreground"
      >
        <FiChevronRight className="w-5 h-5" />
      </motion.button>

      {pages.map((page) => {
        if (
          page === 1 ||
          page === totalPages ||
          (page >= currentPage - 1 && page <= currentPage + 1)
        ) {
          return (
            <motion.button
              key={page}
              onClick={() => onPageChange(page)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                currentPage === page
                  ? "bg-primary text-primary-foreground border-primary font-medium"
                  : "border-border hover:bg-muted text-foreground"
              }`}
            >
              {page}
            </motion.button>
          );
        } else if (page === currentPage - 2 || page === currentPage + 2) {
          return <span key={page} className="px-2 text-muted-foreground">...</span>;
        }
        return null;
      })}

      <motion.button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-foreground"
      >
        <FiChevronLeft className="w-5 h-5" />
      </motion.button>
    </div>
  );
}

