"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiShare2, FiCheck } from "react-icons/fi";
import { useToast } from "@/contexts/ToastContext";

interface ShareButtonProps {
  title?: string;
  url?: string;
  className?: string;
}

export default function ShareButton({
  title = "موقع المشير",
  url,
  className = "",
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const toast = useToast();
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: shareUrl,
        });
        toast.success("تم المشاركة بنجاح!");
      } catch (error) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("تم نسخ الرابط!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.button
      onClick={handleShare}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors ${className}`}
      aria-label="مشاركة"
    >
      {copied ? (
        <FiCheck className="w-5 h-5 text-green-600" />
      ) : (
        <FiShare2 className="w-5 h-5 text-primary" />
      )}
    </motion.button>
  );
}

