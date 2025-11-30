export interface User {
  uid: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
}

export type EducationLevel =
  | "first-prep"
  | "second-prep"
  | "third-prep"
  | "first-secondary"
  | "second-secondary"
  | "third-secondary";

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  level: EducationLevel;
  category: string;
  url: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  level: EducationLevel;
  category: string;
  lessonsCount: number;
}

export interface Test {
  id: string;
  title: string;
  level: EducationLevel;
  questionsCount: number;
  estimatedDuration: number; // بالدقائق
}

export const educationLevels = {
  "first-prep": "أولى إعدادي",
  "second-prep": "ثانية إعدادي",
  "third-prep": "ثالثة إعدادي",
  "first-secondary": "أولى ثانوي",
  "second-secondary": "ثانية ثانوي",
  "third-secondary": "ثالثة ثانوي",
} as const;

