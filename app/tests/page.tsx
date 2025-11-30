"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestCard from "@/components/tests/TestCard";
import EmptyState from "@/components/ui/EmptyState";
import { Test, EducationLevel, educationLevels } from "@/types";

// بيانات تجريبية - يمكن استبدالها ببيانات من Firestore
const mockTests: Test[] = [
  {
    id: "1",
    title: "اختبار تاريخ مصر القديمة",
    level: "first-prep",
    questionsCount: 20,
    estimatedDuration: 30,
  },
  {
    id: "2",
    title: "اختبار جغرافيا العالم العربي",
    level: "second-prep",
    questionsCount: 25,
    estimatedDuration: 35,
  },
  {
    id: "3",
    title: "اختبار تاريخ الحضارات",
    level: "third-prep",
    questionsCount: 30,
    estimatedDuration: 40,
  },
  {
    id: "4",
    title: "اختبار شامل للثانوية العامة",
    level: "third-secondary",
    questionsCount: 50,
    estimatedDuration: 60,
  },
];

export default function TestsPage() {
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel | null>(null);

  const filteredTests = useMemo(() => {
    if (!selectedLevel) {
      return [];
    }
    return mockTests.filter((test) => {
      return test.level === selectedLevel;
    });
  }, [selectedLevel]);

  const levels: EducationLevel[] = [
    "first-prep",
    "second-prep",
    "third-prep",
    "first-secondary",
    "second-secondary",
    "third-secondary",
  ];

  // إذا لم يتم اختيار مرحلة - عرض المراحل
  if (!selectedLevel) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-foreground"
          >
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              الاختبارات التفاعلية
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground font-medium"
          >
            اختر المرحلة التعليمية لعرض الاختبارات المتاحة
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {levels.map((level, index) => (
            <motion.button
              key={level}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring" }}
              onClick={() => setSelectedLevel(level)}
              whileHover={{ scale: 1.08, y: -10, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-card border-2 border-border rounded-3xl p-10 text-center card-hover shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-5xl font-extrabold text-primary mb-6 relative z-10"
              >
                {educationLevels[level].split(" ")[0]}
              </motion.div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors relative z-10">
                {educationLevels[level]}
              </h3>
              <p className="text-sm text-muted-foreground font-medium relative z-10">
                اضغط لعرض الاختبارات
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  // إذا تم اختيار مرحلة - عرض الاختبارات
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedLevel(null)}
          className="flex items-center space-x-2 space-x-reverse text-muted-foreground hover:text-primary transition-colors mb-6 font-semibold text-lg bg-muted/50 px-4 py-2 rounded-xl border border-border"
        >
          <span>← العودة للمراحل</span>
        </motion.button>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-foreground"
        >
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            {educationLevels[selectedLevel]}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground font-medium"
        >
          اختبارات {educationLevels[selectedLevel]}
        </motion.p>
      </motion.div>

      {/* Tests Grid */}
      <AnimatePresence mode="wait">
        {filteredTests.length > 0 ? (
          <motion.div
            key="tests-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTests.map((test, index) => (
              <TestCard key={test.id} test={test} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="no-tests"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <EmptyState
              title="لا توجد اختبارات"
              message={`لا توجد اختبارات متاحة في ${educationLevels[selectedLevel]}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

