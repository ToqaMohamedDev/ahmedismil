/**
 * التحقق من صحة الإيميل
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * التحقق من صحة رقم الهاتف المصري
 */
export function isValidEgyptianPhone(phone: string): boolean {
  const phoneRegex = /^(01)[0-2,5]{1}[0-9]{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

/**
 * التحقق من قوة كلمة المرور
 */
export function isStrongPassword(password: string): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("كلمة المرور يجب أن تكون 8 أحرف على الأقل");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("يجب أن تحتوي على حرف كبير واحد على الأقل");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("يجب أن تحتوي على حرف صغير واحد على الأقل");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("يجب أن تحتوي على رقم واحد على الأقل");
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push("يجب أن تحتوي على رمز خاص واحد على الأقل");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

