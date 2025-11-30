"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  signInWithGoogle,
  signUpWithEmail,
  UserData,
} from "@/lib/firebase/auth";
import { useToast } from "@/contexts/ToastContext";
import { FiMail, FiLock, FiUser, FiPhone, FiCalendar, FiAlertCircle } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export default function SignUpPage() {
  const router = useRouter();
  const toast = useToast();
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSignUp = async () => {
    try {
      setLoading(true);
      setError("");
      await signInWithGoogle();
      toast.success("تم إنشاء الحساب بنجاح!");
      router.push("/");
    } catch (err: any) {
      const errorMessage = err.message || "حدث خطأ أثناء إنشاء الحساب";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      const errorMessage = "كلمات المرور غير متطابقة";
      setError(errorMessage);
      toast.error(errorMessage);
      return;
    }

    if (password.length < 6) {
      const errorMessage = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
      setError(errorMessage);
      toast.error(errorMessage);
      return;
    }

    try {
      setLoading(true);
      setError("");
      await signUpWithEmail(formData.email, password, formData);
      toast.success("تم إنشاء الحساب بنجاح!");
      router.push("/");
    } catch (err: any) {
      const errorMessage = err.message || "حدث خطأ أثناء إنشاء الحساب";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-background via-muted/30 to-background">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="max-w-md w-full space-y-8 bg-card p-10 rounded-3xl shadow-2xl border-2 border-border relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full -ml-24 -mb-24" />
        
        <div className="text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold mb-3 text-card-foreground"
          >
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              إنشاء حساب جديد
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground font-medium"
          >
            ابدأ رحلتك التعليمية معنا
          </motion.p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-4 flex items-center space-x-2 space-x-reverse relative z-10"
          >
            <FiAlertCircle className="text-red-600 dark:text-red-400 w-5 h-5 flex-shrink-0" />
            <p className="text-red-600 dark:text-red-400 text-sm font-medium">{error}</p>
          </motion.div>
        )}

        {/* Google Sign Up */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={handleGoogleSignUp}
          disabled={loading}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center space-x-2 space-x-reverse px-6 py-4 border-2 border-border rounded-xl hover:bg-muted/50 transition-all duration-300 disabled:opacity-50 font-semibold text-foreground shadow-lg hover:shadow-xl relative z-10"
        >
          <FcGoogle className="w-6 h-6" />
          <span>إنشاء حساب بـ Google</span>
        </motion.button>

        <div className="relative z-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-card text-muted-foreground font-medium">أو</span>
          </div>
        </div>

        {/* Email Sign Up */}
        <form onSubmit={handleEmailSignUp} className="space-y-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label htmlFor="name" className="block text-sm font-bold mb-3 text-foreground">
              الاسم
            </label>
            <div className="relative">
              <FiUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="input-field pr-12 text-lg py-4 border-2 border-border rounded-xl focus:border-primary transition-colors"
                placeholder="أدخل اسمك"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 }}
          >
            <label htmlFor="email" className="block text-sm font-bold mb-3 text-foreground">
              الإيميل
            </label>
            <div className="relative">
              <FiMail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="input-field pr-12 text-lg py-4 border-2 border-border rounded-xl focus:border-primary transition-colors"
                placeholder="example@email.com"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label htmlFor="phone" className="block text-sm font-bold mb-3 text-foreground">
              التليفون
            </label>
            <div className="relative">
              <FiPhone className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="input-field pr-12 text-lg py-4 border-2 border-border rounded-xl focus:border-primary transition-colors"
                placeholder="01XXXXXXXXX"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65 }}
          >
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-bold mb-3 text-foreground"
            >
              تاريخ الميلاد
            </label>
            <div className="relative">
              <FiCalendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                id="dateOfBirth"
                type="date"
                required
                value={formData.dateOfBirth}
                onChange={(e) =>
                  setFormData({ ...formData, dateOfBirth: e.target.value })
                }
                className="input-field pr-12 text-lg py-4 border-2 border-border rounded-xl focus:border-primary transition-colors"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <label
              htmlFor="password"
              className="block text-sm font-bold mb-3 text-foreground"
            >
              كلمة المرور
            </label>
            <div className="relative">
              <FiLock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field pr-12 text-lg py-4 border-2 border-border rounded-xl focus:border-primary transition-colors"
                placeholder="••••••••"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75 }}
          >
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-bold mb-3 text-foreground"
            >
              تأكيد كلمة المرور
            </label>
            <div className="relative">
              <FiLock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                id="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input-field pr-12 text-lg py-4 border-2 border-border rounded-xl focus:border-primary transition-colors"
                placeholder="••••••••"
              />
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-4 btn-primary disabled:opacity-50 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {loading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="text-center text-sm text-muted-foreground relative z-10"
        >
          لديك حساب بالفعل؟{" "}
          <Link href="/login" className="text-primary hover:text-primary/80 transition-colors font-bold underline underline-offset-4">
            تسجيل الدخول
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}

