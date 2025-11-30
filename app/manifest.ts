import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "أحمد إسماعيل - المشير | مدرس تاريخ وجغرافيا",
    short_name: "المشير",
    description: "موقع تعليمي لـ أحمد إسماعيل (المشير) - مدرس تاريخ وجغرافيا",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6B7280",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

