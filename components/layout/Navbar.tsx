"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiUser, FiLogOut, FiSettings } from "react-icons/fi";
import { useAuth } from "@/contexts/AuthContext";
import { signOut } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Avatar from "@/components/ui/Avatar";
import Dropdown from "@/components/ui/Dropdown";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, userData, isAdmin, loading } = useAuth();
  const scrollPosition = useScrollPosition();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setScrolled(scrollPosition > 20);
  }, [scrollPosition]);

  const navLinks = [
    { href: "/", label: "الرئيسية", icon: null },
    { href: "/videos", label: "الفيديوهات", icon: null },
    { href: "/courses", label: "الكورسات", icon: null },
    { href: "/tests", label: "الاختبارات", icon: null },
    ...(isAdmin ? [{ href: "/admin", label: "لوحة التحكم", icon: <FiSettings /> }] : []),
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const userMenuItems = [
    {
      label: "الملف الشخصي",
      value: "profile",
      icon: <FiUser className="w-4 h-4" />,
      onClick: () => router.push("/profile"),
    },
    {
      label: "تسجيل الخروج",
      value: "logout",
      icon: <FiLogOut className="w-4 h-4" />,
      onClick: handleSignOut,
    },
  ];

  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20" />
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      initial={false}
      animate={{
        boxShadow: scrolled
          ? (theme === "dark"
              ? "0 8px 16px -4px rgba(0, 0, 0, 0.4), 0 4px 8px -2px rgba(0, 0, 0, 0.3)"
              : "0 8px 16px -4px rgba(0, 0, 0, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.08)")
          : "none",
        backdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
      }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-4 space-x-reverse"
          >
            <Link
              href="/"
              className="flex items-center space-x-3 space-x-reverse group"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center border border-primary/20 shadow-sm group-hover:shadow-md flex-shrink-0"
              >
                <span className="text-2xl font-bold text-primary">م</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  المشير
                </span>
                <span className="text-xs text-muted-foreground group-hover:text-primary/80 transition-colors leading-tight">
                  أحمد إسماعيل
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-muted/40 dark:bg-muted/20 rounded-2xl p-1.5 border border-border/60 shadow-[inset_0_3px_6px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_3px_6px_rgba(255,255,255,0.05)] backdrop-blur-sm">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative px-5 py-2.5 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-background text-primary shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]"
                          : "text-foreground/70 group-hover:text-primary group-hover:bg-background/30"
                      } ${index !== navLinks.length - 1 ? "ml-1.5" : ""}`}
                    >
                      <span className="relative z-10 font-semibold text-sm whitespace-nowrap">
                        {link.label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active-bg"
                          className="absolute inset-0 bg-background rounded-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center space-x-3 space-x-reverse">
            {/* Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-lg hover:bg-muted transition-all duration-300 text-foreground"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiSun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMoon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Auth Links */}
            {!loading && (
              <>
                {user ? (
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Dropdown
                      items={userMenuItems}
                      placeholder={userData?.name || "المستخدم"}
                      className="hidden md:block min-w-[150px]"
                    />
                    <Link
                      href="/profile"
                      className="md:hidden"
                    >
                      <Avatar
                        name={userData?.name || user.email || ""}
                        size="sm"
                      />
                    </Link>
                  </div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/login"
                      className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg"
                    >
                      تسجيل الدخول
                    </Link>
                  </motion.div>
                )}
              </>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2.5 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-md shadow-lg"
            >
              <div className="py-4 space-y-2 px-2">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -30, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ delay: index * 0.08, type: "spring", stiffness: 200 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-3.5 px-5 mx-2 rounded-xl transition-all duration-300 font-semibold ${
                          isActive
                            ? "bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-r-4 border-primary shadow-md"
                            : "text-foreground hover:bg-muted/80 hover:text-primary hover:translate-x-[-4px]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                {user && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -30, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ delay: navLinks.length * 0.08, type: "spring", stiffness: 200 }}
                    >
                      <Link
                        href="/profile"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-3.5 px-5 mx-2 rounded-xl text-foreground hover:bg-muted/80 hover:text-primary hover:translate-x-[-4px] transition-all duration-300 font-semibold"
                      >
                        الملف الشخصي
                      </Link>
                    </motion.div>
                    {isAdmin && (
                      <motion.div
                        initial={{ opacity: 0, x: -30, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ delay: (navLinks.length + 1) * 0.08, type: "spring", stiffness: 200 }}
                      >
                        <Link
                          href="/admin"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-3.5 px-5 mx-2 rounded-xl text-primary bg-primary/10 hover:bg-primary/20 hover:translate-x-[-4px] transition-all duration-300 font-semibold border-r-4 border-primary"
                        >
                          لوحة التحكم
                        </Link>
                      </motion.div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

