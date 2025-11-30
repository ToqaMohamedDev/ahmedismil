"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutTeacher() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="relative inline-block mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground relative z-10">
              عن المدرس
            </h2>
            <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-border"
          >
            <Image
              src="/assets/infoahmed.png"
              alt="أحمد إسماعيل - المشير"
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text Content */}
          <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              أحمد إسماعيل، المعروف بلقب &quot;المشير&quot;، هو مدرس متخصص في التاريخ
              والجغرافيا مع سنوات طويلة من الخبرة في مجال التعليم. يتميز بأسلوب
              تدريس فريد يجمع بين الدقة العلمية والسهولة في الشرح.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              يهدف المشير إلى تبسيط المواد التعليمية المعقدة وجعلها في متناول
              جميع الطلاب، بغض النظر عن مستواهم الدراسي. يعتمد في منهجه على ربط
              المعلومات التاريخية والجغرافية بالواقع المعاصر لتسهيل الفهم
              والاستيعاب.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              مع آلاف الطلاب الناجحين والنتائج المتميزة، يعد المشير خياراً
              موثوقاً للطلاب الذين يسعون للتميز في مادتي التاريخ والجغرافيا.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

