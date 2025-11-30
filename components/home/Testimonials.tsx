"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import Avatar from "@/components/ui/Avatar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "محمد أحمد",
      level: "ثالثة ثانوي",
      rating: 5,
      comment:
        "المشير غير طريقة فهمي للتاريخ والجغرافيا تماماً. الشرح واضح جداً والكورسات منظمة بشكل رائع. أنصح به بشدة!",
    },
    {
      name: "فاطمة علي",
      level: "ثانية إعدادي",
      rating: 5,
      comment:
        "أفضل مدرس صادفته! الفيديوهات ممتعة والاختبارات تساعدني في فهم نقاط ضعفي. النتائج تحسنت بشكل كبير.",
    },
    {
      name: "علي محمود",
      level: "أولى ثانوي",
      rating: 5,
      comment:
        "المنصة سهلة الاستخدام والمحتوى غني جداً. استطعت تحسين درجاتي من خلال المتابعة المستمرة للكورسات.",
    },
    {
      name: "سارة خالد",
      level: "ثالثة إعدادي",
      rating: 5,
      comment:
        "أسلوب الشرح بسيط وممتع. الاختبارات التفاعلية ساعدتني في التحضير للامتحانات. شكراً للمشير!",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground relative z-10">
              ماذا يقول طلابنا؟
            </h2>
            <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            آلاف الطلاب الناجحين يثقون بمنصة المشير لتحقيق أفضل النتائج
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => {
            const isEven = index % 2 === 0;
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: isEven ? 40 : -40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.3, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card border border-border rounded-xl p-6 card-hover shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="ml-4"
                >
                  <Avatar
                    name={testimonial.name}
                    size="md"
                  />
                </motion.div>
                <div>
                  <h4 className="font-bold text-lg text-card-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.level}
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <FiStar
                      className="w-5 h-5 text-primary fill-primary ml-1"
                    />
                  </motion.div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {testimonial.comment}
              </p>
            </motion.div>
          );
          })}
        </div>
      </div>
    </section>
  );
}

