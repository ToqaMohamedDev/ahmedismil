"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { signOut } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiCalendar, FiLogOut, FiEdit2 } from "react-icons/fi";
import { useState } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

function ProfileContent() {
  const { user, userData } = useAuth();
  const toast = useToast();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("تم تسجيل الخروج بنجاح");
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("حدث خطأ أثناء تسجيل الخروج");
    }
  };

  return (
    <div className="min-h-screen bg-muted/50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden"
        >
          {/* Header */}
          <div className="bg-primary/10 px-8 py-6 border-b border-border">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2 text-card-foreground">الملف الشخصي</h1>
                <p className="text-muted-foreground">إدارة معلومات حسابك</p>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="p-3 rounded-lg bg-background hover:bg-muted transition-colors border border-border"
              >
                <FiEdit2 className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="p-8 space-y-6">
            <div className="flex items-center space-x-4 space-x-reverse mb-8">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border-2 border-border">
                <FiUser className="w-12 h-12 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-card-foreground">{userData?.name || "المستخدم"}</h2>
                <p className="text-muted-foreground">{user?.email}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-foreground mb-2">
                  <FiUser className="w-4 h-4 ml-2" />
                  الاسم
                </label>
                <div className="p-4 bg-muted rounded-lg border border-border">
                  {isEditing ? (
                    <input
                      type="text"
                      defaultValue={userData?.name || ""}
                      className="w-full bg-transparent focus:outline-none text-foreground"
                    />
                  ) : (
                    <p className="text-muted-foreground">{userData?.name || "غير محدد"}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-foreground mb-2">
                  <FiMail className="w-4 h-4 ml-2" />
                  الإيميل
                </label>
                <div className="p-4 bg-muted rounded-lg border border-border">
                  <p className="text-muted-foreground">{user?.email || "غير محدد"}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-foreground mb-2">
                  <FiPhone className="w-4 h-4 ml-2" />
                  التليفون
                </label>
                <div className="p-4 bg-muted rounded-lg border border-border">
                  {isEditing ? (
                    <input
                      type="tel"
                      defaultValue={userData?.phone || ""}
                      className="w-full bg-transparent focus:outline-none text-foreground"
                    />
                  ) : (
                    <p className="text-muted-foreground">{userData?.phone || "غير محدد"}</p>
                  )}
                </div>
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-foreground mb-2">
                  <FiCalendar className="w-4 h-4 ml-2" />
                  تاريخ الميلاد
                </label>
                <div className="p-4 bg-muted rounded-lg border border-border">
                  {isEditing ? (
                    <input
                      type="date"
                      defaultValue={userData?.dateOfBirth || ""}
                      className="w-full bg-transparent focus:outline-none text-foreground"
                    />
                  ) : (
                    <p className="text-muted-foreground">{userData?.dateOfBirth || "غير محدد"}</p>
                  )}
                </div>
              </div>
            </div>

            {isEditing && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex space-x-4 space-x-reverse pt-4"
              >
                <button className="btn-primary">حفظ التغييرات</button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors text-foreground"
                >
                  إلغاء
                </button>
              </motion.div>
            )}

            {/* Sign Out Button */}
            <div className="pt-6 border-t border-border">
              <motion.button
                onClick={handleSignOut}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto flex items-center justify-center space-x-2 space-x-reverse px-6 py-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors font-medium"
              >
                <FiLogOut className="w-5 h-5" />
                <span>تسجيل الخروج</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
}

