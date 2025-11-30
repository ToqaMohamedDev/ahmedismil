"use client";

import { STATS } from "@/lib/utils/constants";
import { FiVideo, FiBook, FiFileText, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      label: "الفيديوهات",
      value: STATS.videos,
      icon: FiVideo,
    },
    {
      label: "الكورسات",
      value: STATS.courses,
      icon: FiBook,
    },
    {
      label: "الاختبارات",
      value: STATS.tests,
      icon: FiFileText,
    },
    {
      label: "الطلاب",
      value: STATS.students,
      icon: FiUsers,
    },
  ];

  return (
    <section className="bg-background py-16 md:py-20 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: index % 2 === 0 ? 30 : -30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ amount: 0.3, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="bg-card border border-border rounded-xl p-6 md:p-8 text-center card-hover shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="inline-block mb-4"
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                </motion.div>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-3xl md:text-4xl font-bold mb-2 text-card-foreground"
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground text-sm md:text-base font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

