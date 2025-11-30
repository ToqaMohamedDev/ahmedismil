/**
 * فئة الخطأ المخصصة
 */
export class AppError extends Error {
  constructor(
    message: string,
    public code?: string,
    public statusCode?: number
  ) {
    super(message);
    this.name = "AppError";
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * رسائل الأخطاء الشائعة
 */
export const ERROR_MESSAGES = {
  AUTH: {
    INVALID_CREDENTIALS: "بيانات الدخول غير صحيحة",
    USER_NOT_FOUND: "المستخدم غير موجود",
    EMAIL_ALREADY_EXISTS: "هذا الإيميل مستخدم بالفعل",
    WEAK_PASSWORD: "كلمة المرور ضعيفة",
    NETWORK_ERROR: "خطأ في الاتصال بالشبكة",
  },
  VALIDATION: {
    REQUIRED: "هذا الحقل مطلوب",
    INVALID_EMAIL: "الإيميل غير صحيح",
    INVALID_PHONE: "رقم الهاتف غير صحيح",
    PASSWORD_MISMATCH: "كلمات المرور غير متطابقة",
  },
  GENERAL: {
    NOT_FOUND: "الصفحة غير موجودة",
    UNAUTHORIZED: "غير مصرح لك بالوصول",
    FORBIDDEN: "غير مسموح لك بهذا الإجراء",
    SERVER_ERROR: "حدث خطأ في الخادم",
  },
} as const;

/**
 * معالجة الأخطاء من Firebase
 */
export function handleFirebaseError(error: any): string {
  const errorCode = error?.code || "";
  const errorMessage = error?.message || "";

  switch (errorCode) {
    case "auth/user-not-found":
      return ERROR_MESSAGES.AUTH.USER_NOT_FOUND;
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS;
    case "auth/email-already-in-use":
      return ERROR_MESSAGES.AUTH.EMAIL_ALREADY_EXISTS;
    case "auth/weak-password":
      return ERROR_MESSAGES.AUTH.WEAK_PASSWORD;
    case "auth/network-request-failed":
      return ERROR_MESSAGES.AUTH.NETWORK_ERROR;
    default:
      return errorMessage || ERROR_MESSAGES.GENERAL.SERVER_ERROR;
  }
}

