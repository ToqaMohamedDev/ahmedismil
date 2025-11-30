export const STATS = {
  videos: 150,
  courses: 25,
  tests: 80,
  students: 5000,
};

export const SOCIAL_LINKS = {
  youtube: "https://youtube.com",
  instagram: "https://instagram.com",
  tiktok: "https://tiktok.com",
  facebook: "https://facebook.com",
};

export const VIDEO_CATEGORIES = [
  "تاريخ مصر",
  "تاريخ العالم",
  "جغرافيا مصر",
  "جغرافيا العالم",
  "مراجعات",
  "شرح منهج",
];

export const COURSE_CATEGORIES = [
  "كورسات مكثفة",
  "مراجعات نهائية",
  "شرح منهج",
  "تدريبات",
  "امتحانات سابقة",
];

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const ANIMATION_DURATION = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 9,
  MAX_PAGE_SIZE: 50,
} as const;
