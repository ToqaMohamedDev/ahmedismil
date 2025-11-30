"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import VideoCard from "@/components/videos/VideoCard";
import SearchBar from "@/components/ui/SearchBar";
import EmptyState from "@/components/ui/EmptyState";
import Pagination from "@/components/ui/Pagination";
import { Video, EducationLevel, educationLevels } from "@/types";

// بيانات تجريبية - يمكن استبدالها ببيانات من Firestore
const mockVideos: Video[] = [
  {
    id: "1",
    title: "شرح تاريخ مصر القديمة",
    thumbnail: "/assets/ahmedismail.png",
    duration: "15:30",
    level: "first-prep",
    category: "تاريخ مصر",
    url: "#",
  },
  {
    id: "2",
    title: "جغرافيا العالم العربي",
    thumbnail: "/assets/ahmedismail.png",
    duration: "20:45",
    level: "second-prep",
    category: "جغرافيا العالم",
    url: "#",
  },
  {
    id: "3",
    title: "تاريخ الحضارات القديمة",
    thumbnail: "/assets/ahmedismail.png",
    duration: "18:20",
    level: "third-prep",
    category: "تاريخ العالم",
    url: "#",
  },
];

const ITEMS_PER_PAGE = 9;

export default function VideosPage() {
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // الحصول على التصنيفات المتاحة بناءً على المرحلة المختارة
  const availableCategories = useMemo(() => {
    if (!selectedLevel) {
      return [];
    }
    // الحصول على التصنيفات التي لها فيديوهات في المرحلة المختارة
    const categoriesInLevel = new Set<string>();
    mockVideos.forEach((video) => {
      if (video.level === selectedLevel) {
        categoriesInLevel.add(video.category);
      }
    });
    return Array.from(categoriesInLevel);
  }, [selectedLevel]);

  // إعادة تعيين التصنيف عند تغيير المرحلة
  useEffect(() => {
    if (selectedLevel) {
      setSelectedCategory(null);
      setCurrentPage(1);
    }
  }, [selectedLevel]);

  // إعادة تعيين الصفحة عند تغيير التصنيف
  useEffect(() => {
    if (selectedCategory) {
      setCurrentPage(1);
    }
  }, [selectedCategory]);

  const filteredVideos = useMemo(() => {
    if (!selectedLevel || !selectedCategory) {
      return [];
    }
    return mockVideos.filter((video) => {
      const levelMatch = video.level === selectedLevel;
      const categoryMatch = video.category === selectedCategory;
      const searchMatch =
        searchQuery === "" ||
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.category.toLowerCase().includes(searchQuery.toLowerCase());
      return levelMatch && categoryMatch && searchMatch;
    });
  }, [selectedLevel, selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE);
  const paginatedVideos = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredVideos.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredVideos, currentPage]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedLevel, selectedCategory, searchQuery]);

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
              الفيديوهات التعليمية
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground font-medium"
          >
            اختر المرحلة التعليمية لعرض التصنيفات المتاحة
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
                اضغط لعرض التصنيفات
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  // إذا تم اختيار مرحلة ولكن لم يتم اختيار تصنيف - عرض التصنيفات
  if (selectedLevel && !selectedCategory) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
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
            اختر التصنيف لعرض الفيديوهات
          </motion.p>
        </motion.div>

        {availableCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {availableCategories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.08, y: -8, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-card border-2 border-border rounded-2xl p-8 text-center card-hover shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors relative z-10">
                  {category}
                </h3>
                <p className="text-sm text-muted-foreground font-medium relative z-10">
                  اضغط لعرض الفيديوهات
                </p>
              </motion.button>
            ))}
          </div>
        ) : (
          <EmptyState
            title="لا توجد تصنيفات"
            message={`لا توجد تصنيفات متاحة في ${educationLevels[selectedLevel]}`}
          />
        )}
      </div>
    );
  }

  // إذا تم اختيار المرحلة والتصنيف - عرض الفيديوهات
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <div className="flex items-center flex-wrap gap-3 space-x-4 space-x-reverse mb-6">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(null)}
            className="flex items-center space-x-2 space-x-reverse text-muted-foreground hover:text-primary transition-colors font-semibold bg-muted/50 px-4 py-2 rounded-xl border border-border"
          >
            <span>← العودة للتصنيفات</span>
          </motion.button>
          <span className="text-muted-foreground text-xl">/</span>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ x: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedLevel(null);
              setSelectedCategory(null);
            }}
            className="text-muted-foreground hover:text-primary transition-colors font-semibold bg-muted/50 px-4 py-2 rounded-xl border border-border"
          >
            العودة للمراحل
          </motion.button>
        </div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 text-foreground"
        >
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            {selectedCategory}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-muted-foreground font-medium"
        >
          {educationLevels[selectedLevel]}
        </motion.p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-10"
      >
        <SearchBar
          placeholder="ابحث في الفيديوهات..."
          onSearch={setSearchQuery}
        />
      </motion.div>

      {/* Videos Grid */}
      {paginatedVideos.length > 0 ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10"
          >
            {paginatedVideos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </motion.div>
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </motion.div>
          )}
        </>
      ) : (
        <EmptyState
          title="لا توجد فيديوهات"
          message="لم يتم العثور على فيديوهات في هذا التصنيف"
        />
      )}
    </div>
  );
}

