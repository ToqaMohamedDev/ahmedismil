"use client";

import { motion } from "framer-motion";
import ProtectedAdminRoute from "@/components/auth/ProtectedAdminRoute";
import {
  FiVideo,
  FiBook,
  FiFileText,
  FiUsers,
  FiSettings,
  FiBarChart2,
  FiMessageSquare,
  FiShield,
} from "react-icons/fi";

function AdminDashboard() {
  const stats = [
    {
      title: "الفيديوهات",
      value: "0",
      icon: FiVideo,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      title: "الكورسات",
      value: "0",
      icon: FiBook,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "الاختبارات",
      value: "0",
      icon: FiFileText,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "المستخدمين",
      value: "0",
      icon: FiUsers,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  const quickActions = [
    {
      title: "إدارة الفيديوهات",
      description: "إضافة وتعديل وحذف الفيديوهات",
      icon: FiVideo,
      href: "/admin/videos",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      hoverColor: "hover:bg-red-500/20",
    },
    {
      title: "إدارة الكورسات",
      description: "إضافة وتعديل وحذف الكورسات",
      icon: FiBook,
      href: "/admin/courses",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      hoverColor: "hover:bg-blue-500/20",
    },
    {
      title: "إدارة الاختبارات",
      description: "إضافة وتعديل وحذف الاختبارات",
      icon: FiFileText,
      href: "/admin/tests",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      hoverColor: "hover:bg-green-500/20",
    },
    {
      title: "إدارة المستخدمين",
      description: "عرض وإدارة المستخدمين",
      icon: FiUsers,
      href: "/admin/users",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      hoverColor: "hover:bg-purple-500/20",
    },
    {
      title: "الاشتراكات",
      description: "إدارة اشتراكات المستخدمين",
      icon: FiShield,
      href: "/admin/subscriptions",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      hoverColor: "hover:bg-orange-500/20",
    },
    {
      title: "الرسائل",
      description: "عرض وإدارة الرسائل",
      icon: FiMessageSquare,
      href: "/admin/messages",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      hoverColor: "hover:bg-pink-500/20",
    },
    {
      title: "الإحصائيات",
      description: "عرض إحصائيات الموقع",
      icon: FiBarChart2,
      href: "/admin/statistics",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      hoverColor: "hover:bg-cyan-500/20",
    },
    {
      title: "الإعدادات",
      description: "إعدادات الموقع العامة",
      icon: FiSettings,
      href: "/admin/settings",
      color: "text-gray-500",
      bgColor: "bg-gray-500/10",
      hoverColor: "hover:bg-gray-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-foreground">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              لوحة التحكم
            </span>
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            إدارة الموقع والمحتوى
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`${stat.bgColor} ${stat.color} p-3 rounded-xl`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-card-foreground mb-2">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground font-medium">{stat.title}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            الإجراءات السريعة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.a
                  key={action.title}
                  href={action.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 block group cursor-pointer"
                >
                  <div
                    className={`${action.bgColor} ${action.color} p-4 rounded-xl mb-4 w-fit group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {action.description}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  return (
    <ProtectedAdminRoute>
      <AdminDashboard />
    </ProtectedAdminRoute>
  );
}

