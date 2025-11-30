"use client";

import { Course } from "@/types";
import { educationLevels } from "@/types";
import { FiBook, FiBookOpen } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";

interface CourseCardProps {
  course: Course;
  index?: number;
}

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-card border-2 border-border rounded-2xl overflow-hidden card-hover shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
    >
      <div className="relative h-56 group overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-bold border border-white/20 shadow-lg flex items-center space-x-2 space-x-reverse">
          <FiBook className="w-5 h-5" />
          <span>كورس</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-5 line-clamp-3 leading-relaxed">
          {course.description}
        </p>
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-primary bg-primary/10 px-3 py-1.5 rounded-lg text-sm font-semibold border-2 border-primary/20"
          >
            {educationLevels[course.level]}
          </motion.span>
          <span className="text-muted-foreground text-sm font-medium bg-muted/50 px-3 py-1.5 rounded-lg border border-border">
            {course.category}
          </span>
        </div>
        <motion.div
          whileHover={{ scale: 1.05, x: -5 }}
          className="flex items-center space-x-2 space-x-reverse text-primary bg-primary/10 px-4 py-3 rounded-xl border-2 border-primary/20 font-semibold"
        >
          <FiBookOpen className="w-5 h-5" />
          <span className="font-bold">{course.lessonsCount} درس</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

