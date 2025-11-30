"use client";

import { FiAlertTriangle } from "react-icons/fi";
import Modal from "./Modal";
import Button from "./Button";

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "danger" | "warning" | "info";
  isLoading?: boolean;
}

export default function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "تأكيد",
  cancelText = "إلغاء",
  variant = "warning",
  isLoading = false,
}: ConfirmDialogProps) {
  const handleConfirm = () => {
    onConfirm();
    if (!isLoading) {
      onClose();
    }
  };

  const variantStyles = {
    danger: "text-red-600 dark:text-red-400",
    warning: "text-yellow-600 dark:text-yellow-400",
    info: "text-blue-600 dark:text-blue-400",
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="md">
      <div className="space-y-6">
        <div className="flex items-start space-x-4 space-x-reverse">
          <div className={`p-3 rounded-full bg-${variant}-50 dark:bg-${variant}-900/20 flex-shrink-0`}>
            <FiAlertTriangle className={`w-6 h-6 ${variantStyles[variant]}`} />
          </div>
          <p className="text-black/80 dark:text-white/80 leading-relaxed">{message}</p>
        </div>

        <div className="flex items-center justify-end space-x-3 space-x-reverse">
          <Button
            onClick={onClose}
            variant="outline"
            disabled={isLoading}
          >
            {cancelText}
          </Button>
          <Button
            onClick={handleConfirm}
            variant={variant === "danger" ? "primary" : "primary"}
            isLoading={isLoading}
            className={variant === "danger" ? "bg-red-600 hover:bg-red-700 text-white" : ""}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

