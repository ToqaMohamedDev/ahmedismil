"use client";

import { Test } from "@/types";
import { educationLevels } from "@/types";
import { motion } from "framer-motion";
import { FiFileText, FiClock, FiCheckCircle } from "react-icons/fi";

interface TestCardProps {
  test: Test;
  index: number;
}

export default function TestCard({ test, index }: TestCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-card border-2 border-border rounded-2xl p-6 card-hover cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
      <div className="flex items-start justify-between mb-5 relative z-10">
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          className="p-4 bg-primary/10 rounded-xl border-2 border-primary/20 group-hover:bg-primary/20 transition-colors"
        >
          <FiFileText className="w-7 h-7 text-primary" />
        </motion.div>
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="text-sm text-primary bg-primary/10 px-4 py-2 rounded-xl font-bold border-2 border-primary/20"
        >
          {educationLevels[test.level]}
        </motion.span>
      </div>
      <h3 className="text-xl font-bold mb-5 text-card-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 relative z-10">
        {test.title}
      </h3>
      <div className="flex items-center justify-between pt-5 border-t-2 border-border relative z-10">
        <motion.div
          whileHover={{ scale: 1.05, x: -5 }}
          className="flex items-center space-x-2 space-x-reverse text-muted-foreground bg-muted/50 px-4 py-2 rounded-lg border border-border"
        >
          <FiCheckCircle className="w-5 h-5 text-primary" />
          <span className="font-bold">{test.questionsCount} سؤال</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, x: 5 }}
          className="flex items-center space-x-2 space-x-reverse text-muted-foreground bg-muted/50 px-4 py-2 rounded-lg border border-border"
        >
          <FiClock className="w-5 h-5 text-primary" />
          <span className="font-bold">{test.estimatedDuration} دقيقة</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

