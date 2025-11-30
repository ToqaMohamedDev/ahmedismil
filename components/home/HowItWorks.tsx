"use client";

import { motion } from "framer-motion";
import { FiUserPlus, FiSearch, FiPlay, FiAward } from "react-icons/fi";

export default function HowItWorks() {
  const steps = [
    {
      icon: FiUserPlus,
      title: "أنشئ حسابك",
      description:
        "سجل حسابك مجاناً في ثوانٍ باستخدام البريد الإلكتروني أو حساب Google",
      step: "01",
    },
    {
      icon: FiSearch,
      title: "استكشف المحتوى",
      description:
        "تصفح الفيديوهات والكورسات والاختبارات المتاحة لمرحلتك التعليمية",
      step: "02",
    },
    {
      icon: FiPlay,
      title: "ابدأ التعلم",
      description:
        "شاهد الفيديوهات، أكمل الكورسات، واختبر معرفتك مع الاختبارات التفاعلية",
      step: "03",
    },
    {
      icon: FiAward,
      title: "احصل على النتائج",
      description:
        "تابع تقدمك واحصل على شهادات الإتمام عند إكمال الكورسات بنجاح",
      step: "04",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
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
              كيف تبدأ رحلتك التعليمية؟
            </h2>
            <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            أربع خطوات بسيطة تفصلك عن تحقيق أهدافك التعليمية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: isEven ? 40 : -40, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ amount: 0.3, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-xl p-6 card-hover shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shadow-sm"
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <span className="text-5xl font-bold text-primary/15">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-border border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

