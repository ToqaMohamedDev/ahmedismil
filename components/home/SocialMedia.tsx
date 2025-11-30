"use client";

import { SOCIAL_LINKS } from "@/lib/utils/constants";
import { FiYoutube, FiInstagram, FiFacebook } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialMedia() {
  const socialLinks = [
    {
      name: "YouTube",
      url: SOCIAL_LINKS.youtube,
      icon: FiYoutube,
    },
    {
      name: "Instagram",
      url: SOCIAL_LINKS.instagram,
      icon: FiInstagram,
    },
    {
      name: "TikTok",
      url: SOCIAL_LINKS.tiktok,
      icon: FaTiktok,
    },
    {
      name: "Facebook",
      url: SOCIAL_LINKS.facebook,
      icon: FiFacebook,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
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
              وسائل التواصل
            </h2>
            <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </motion.div>
        <div className="flex justify-center flex-wrap gap-4 md:gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            const colors = {
              YouTube: "hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-500",
              Instagram: "hover:bg-pink-500/10 hover:border-pink-500/30 hover:text-pink-500",
              TikTok: "hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/30 dark:hover:border-white/30 hover:text-black dark:hover:text-white",
              Facebook: "hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-500",
            };
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.3, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ amount: 0.3, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-card border-2 border-border flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl ${colors[social.name as keyof typeof colors] || ""}`}
                aria-label={social.name}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Icon className="relative z-10 w-7 h-7 md:w-9 md:h-9 text-primary group-hover:scale-110 transition-transform duration-300" />
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute inset-0 rounded-2xl border-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

