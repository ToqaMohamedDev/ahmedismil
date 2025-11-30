"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiYoutube, FiInstagram, FiFacebook, FiMail, FiMapPin, FiBook, FiVideo, FiFileText, FiUsers, FiArrowLeft } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { SOCIAL_LINKS, STATS } from "@/lib/utils/constants";

export default function Footer() {
  return (
    <footer className="bg-footer text-foreground border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          {/* About */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                  <span className="text-2xl font-bold text-primary">م</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">المشير</h3>
                  <p className="text-sm text-white">أحمد إسماعيل</p>
                </div>
              </div>
              <p className="text-sm text-white mb-6 leading-relaxed">
                منصة تعليمية متخصصة في التاريخ والجغرافيا للمراحل الإعدادية والثانوية
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 space-x-reverse text-sm text-white">
                  <FiMapPin className="w-4 h-4 text-primary" />
                  <span>مصر</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse text-sm text-white">
                  <FiMail className="w-4 h-4 text-primary" />
                  <span>info@almushir.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <h4 className="font-bold text-lg mb-6 text-white relative inline-block">
                روابط سريعة
                <span className="absolute bottom-0 right-0 w-full h-0.5 bg-primary"></span>
              </h4>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "الرئيسية" },
                  { href: "/videos", label: "الفيديوهات" },
                  { href: "/courses", label: "الكورسات" },
                  { href: "/tests", label: "الاختبارات" },
                  { href: "/profile", label: "الملف الشخصي" },
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-white hover:text-primary transition-all duration-300 flex items-center space-x-2 space-x-reverse group"
                    >
                      <FiArrowLeft className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Statistics */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <h4 className="font-bold text-lg mb-6 text-white relative inline-block">
                الإحصائيات
                <span className="absolute bottom-0 right-0 w-full h-0.5 bg-primary"></span>
              </h4>
              <div className="space-y-4">
                {[
                  { icon: FiVideo, value: STATS.videos, label: "فيديو", color: "text-red-500" },
                  { icon: FiBook, value: STATS.courses, label: "كورس", color: "text-blue-500" },
                  { icon: FiFileText, value: STATS.tests, label: "اختبار", color: "text-green-500" },
                  { icon: FiUsers, value: STATS.students, label: "طالب", color: "text-yellow-500" },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ amount: 0.3 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 space-x-reverse group"
                    >
                      <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors border border-primary/20">
                        <Icon className={`w-5 h-5 text-primary`} />
                      </div>
                      <div>
                        <div className="font-bold text-lg text-white">{stat.value}+</div>
                        <div className="text-xs text-white">{stat.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Social Media */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <h4 className="font-bold text-lg mb-6 text-white relative inline-block">
                وسائل التواصل
                <span className="absolute bottom-0 right-0 w-full h-0.5 bg-primary"></span>
              </h4>
              <p className="text-sm text-white mb-6 leading-relaxed">
                تابعنا للحصول على آخر التحديثات والمحتوى التعليمي
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: FiYoutube, href: SOCIAL_LINKS.youtube, name: "YouTube", color: "hover:bg-red-500/10 hover:border-red-500/30" },
                  { icon: FiInstagram, href: SOCIAL_LINKS.instagram, name: "Instagram", color: "hover:bg-pink-500/10 hover:border-pink-500/30" },
                  { icon: FaTiktok, href: SOCIAL_LINKS.tiktok, name: "TikTok", color: "hover:bg-black/10 hover:border-black/30" },
                  { icon: FiFacebook, href: SOCIAL_LINKS.facebook, name: "Facebook", color: "hover:bg-blue-500/10 hover:border-blue-500/30" },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ amount: 0.3 }}
                      transition={{ 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 bg-primary/10 hover:bg-primary/20 rounded-xl flex items-center justify-center transition-all duration-300 border border-border hover:border-primary/50 shadow-md hover:shadow-lg ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="pt-8 border-t border-border"
        >
          <div className="flex justify-center items-center">
            <div className="text-center">
              <p className="text-sm text-white">
                © 2025 <span className="text-primary font-semibold">AlaaTaha</span>. جميع الحقوق محفوظة.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

