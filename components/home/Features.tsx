"use client";

import { motion } from "framer-motion";
import {
  FiVideo,
  FiBook,
  FiFileText,
  FiUsers,
  FiAward,
  FiClock,
  FiSmartphone,
  FiTrendingUp,
} from "react-icons/fi";

export default function Features() {
  const features = [
    {
      icon: FiVideo,
      title: "فيديوهات تعليمية عالية الجودة",
      description:
        "محتوى فيديو احترافي مع شرح واضح ومبسط لجميع الدروس، متاح في أي وقت ومن أي مكان",
    },
    {
      icon: FiBook,
      title: "كورسات شاملة ومنظمة",
      description:
        "كورسات مكثفة تغطي جميع المناهج الدراسية مع مواد إضافية وتمارين تفاعلية",
    },
    {
      icon: FiFileText,
      title: "اختبارات تفاعلية",
      description:
        "اختبارات متنوعة لقياس مستوى الفهم مع نتائج فورية وتقارير تفصيلية",
    },
    {
      icon: FiUsers,
      title: "مجتمع تعليمي نشط",
      description:
        "انضم إلى آلاف الطلاب الناجحين واحصل على الدعم والمساعدة من المدرس والمجتمع",
    },
    {
      icon: FiAward,
      title: "شهادات معتمدة",
      description:
        "احصل على شهادات إتمام عند إكمال الكورسات والاختبارات بنجاح",
    },
    {
      icon: FiClock,
      title: "تعلم في الوقت المناسب",
      description:
        "تعلم في الوقت الذي يناسبك مع إمكانية الوصول للمحتوى 24/7 من أي جهاز",
    },
    {
      icon: FiSmartphone,
      title: "متوافق مع جميع الأجهزة",
      description:
        "استمتع بتجربة تعليمية سلسة على الهاتف، التابلت، أو الكمبيوتر",
    },
    {
      icon: FiTrendingUp,
      title: "تتبع التقدم",
      description:
        "راقب تقدمك الدراسي مع إحصائيات مفصلة عن أدائك في الاختبارات والكورسات",
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
              لماذا تختار منصة المشير؟
            </h2>
            <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            منصة تعليمية شاملة تجمع بين الجودة والسهولة لتحقيق أفضل النتائج
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: isEven ? 30 : -30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ amount: 0.3, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  ease: "easeOut"
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card border border-border rounded-xl p-6 card-hover shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 border border-primary/20 shadow-sm"
                >
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-lg font-bold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

