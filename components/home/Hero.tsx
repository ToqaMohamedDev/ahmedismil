"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiPlay, FiArrowLeft, FiAward, FiBookOpen } from "react-icons/fi";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 relative z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="info" className="mb-4 bg-primary/10 text-primary border border-border">
                <FiAward className="w-4 h-4 ml-2" />
                مدرس معتمد
              </Badge>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground"
              >
                <span className="block">أحمد إسماعيل</span>
                <span className="block text-primary mt-2">المشير</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-4 space-x-reverse text-lg md:text-xl text-muted-foreground"
              >
                <FiBookOpen className="w-5 h-5" />
                <span>مدرس تاريخ وجغرافيا</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4 text-foreground/80 text-base md:text-lg leading-relaxed"
            >
              <p className="font-medium">
                أهلاً بك في منصة التعليم التفاعلية. أنا أحمد إسماعيل، مدرس
                متخصص في التاريخ والجغرافيا مع سنوات من الخبرة في تدريس المراحل
                الإعدادية والثانوية.
              </p>
              <p>
                أقدم محتوى تعليمي شامل يشمل فيديوهات شرح، كورسات مكثفة، واختبارات
                تفاعلية لمساعدتك في تحقيق أفضل النتائج.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-2 space-x-reverse">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <p className="text-sm text-muted-foreground">
                    منهج تعليمي متكامل يغطي جميع المناهج الدراسية
                  </p>
                </div>
                <div className="flex items-start space-x-2 space-x-reverse">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <p className="text-sm text-muted-foreground">
                    تبسيط المعلومات المعقدة وربطها بالواقع المعاصر
                  </p>
                </div>
                <div className="flex items-start space-x-2 space-x-reverse">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <p className="text-sm text-muted-foreground">
                    متابعة مستمرة وتقارير تفصيلية عن التقدم الدراسي
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/courses"
                  className="inline-flex items-center px-6 py-3 text-lg rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <span>استكشف الكورسات</span>
                  <FiArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/videos"
                  className="inline-flex items-center px-6 py-3 text-lg rounded-lg font-medium border-2 border-primary hover:bg-primary/10 text-foreground transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <FiPlay className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                  <span>شاهد الفيديوهات</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center space-x-6 space-x-reverse pt-8 border-t border-border"
            >
              <div>
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">سنة خبرة</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground">5000+</div>
                <div className="text-sm text-muted-foreground">طالب</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">فيديو</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl dark:shadow-glow-dark group border border-border"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 dark:from-black/50 to-transparent z-10" />
            
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-accent-200/30 dark:bg-accent-800/20 rounded-full blur-2xl z-0" />
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-accent-100/20 dark:bg-accent-900/20 rounded-full blur-3xl z-0" />
            
            <Image
              src="/assets/ahmedismail.png"
              alt="أحمد إسماعيل - المشير"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-border z-20"
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-border">
                  <FiAward className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-sm text-card-foreground">مدرس معتمد</div>
                  <div className="text-xs text-muted-foreground">15+ سنة خبرة</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

