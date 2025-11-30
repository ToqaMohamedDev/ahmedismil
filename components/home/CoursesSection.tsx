"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiBook, FiArrowLeft } from "react-icons/fi";

export default function CoursesSection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="relative inline-block mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground relative z-10">
              الكورسات التعليمية
            </h2>
            <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            اكتشف مجموعة شاملة من الكورسات المصممة خصيصاً لمساعدتك في فهم
            التاريخ والجغرافيا بشكل أعمق وأسهل
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* الإعدادي */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-card border border-border rounded-xl p-8 card-hover shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="p-3 bg-primary/10 rounded-xl ml-4 border border-primary/20 shadow-sm"
              >
                <FiBook className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-extrabold text-card-foreground">المرحلة الإعدادية</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              ثلاث سنوات من التعليم المكثف تغطي جميع جوانب التاريخ والجغرافيا
              للمرحلة الإعدادية
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-primary">
                <span className="ml-3 w-2 h-2 bg-primary rounded-full"></span>
                <span>أولى إعدادي</span>
              </li>
              <li className="flex items-center text-primary">
                <span className="ml-3 w-2 h-2 bg-primary rounded-full"></span>
                <span>ثانية إعدادي</span>
              </li>
              <li className="flex items-center text-primary">
                <span className="ml-3 w-2 h-2 bg-primary rounded-full"></span>
                <span>ثالثة إعدادي</span>
              </li>
            </ul>
            <Link
              href="/courses?level=prep"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300 group font-medium shadow-sm hover:shadow-md"
            >
              <span>عرض الكورسات</span>
              <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* الثانوي */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-card border border-border rounded-xl p-8 card-hover shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="p-3 bg-primary/10 rounded-xl ml-4 border border-primary/20 shadow-sm"
              >
                <FiBook className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-extrabold text-card-foreground">المرحلة الثانوية</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              تحضير شامل للمرحلة الثانوية مع التركيز على الامتحانات النهائية
              والجامعة
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-primary">
                <span className="ml-3 w-2 h-2 bg-primary rounded-full"></span>
                <span>أولى ثانوي</span>
              </li>
              <li className="flex items-center text-primary">
                <span className="ml-3 w-2 h-2 bg-primary rounded-full"></span>
                <span>ثانية ثانوي</span>
              </li>
              <li className="flex items-center text-primary">
                <span className="ml-3 w-2 h-2 bg-primary rounded-full"></span>
                <span>ثالثة ثانوي</span>
              </li>
            </ul>
            <Link
              href="/courses?level=secondary"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300 group font-medium shadow-sm hover:shadow-md"
            >
              <span>عرض الكورسات</span>
              <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

