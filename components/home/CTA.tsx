"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiPlay, FiBook } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.3, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-card-foreground relative z-10">
                ابدأ رحلتك التعليمية اليوم
              </h2>
              <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            انضم إلى آلاف الطلاب الناجحين واستمتع بتجربة تعليمية شاملة ومميزة
            مع المشير
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/courses"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg group"
            >
              <FiBook className="w-5 h-5 ml-2" />
              <span>استكشف الكورسات</span>
              <FiArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/videos"
              className="inline-flex items-center px-8 py-4 border-2 border-primary hover:bg-primary/10 text-foreground rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg group"
            >
              <FiPlay className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              <span>شاهد الفيديوهات</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

