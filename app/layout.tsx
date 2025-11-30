import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "أحمد إسماعيل - المشير | مدرس تاريخ وجغرافيا",
    template: "%s | المشير",
  },
  description: "موقع تعليمي لـ أحمد إسماعيل (المشير) - مدرس تاريخ وجغرافيا. فيديوهات، كورسات، واختبارات تفاعلية لجميع المراحل التعليمية",
  keywords: ["تاريخ", "جغرافيا", "تعليم", "مدرس", "المشير", "أحمد إسماعيل"],
  authors: [{ name: "علاء طه" }],
  creator: "علاء طه",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    siteName: "المشير",
    title: "أحمد إسماعيل - المشير | مدرس تاريخ وجغرافيا",
    description: "موقع تعليمي لـ أحمد إسماعيل (المشير) - مدرس تاريخ وجغرافيا",
  },
  twitter: {
    card: "summary_large_image",
    title: "أحمد إسماعيل - المشير",
    description: "موقع تعليمي لـ أحمد إسماعيل (المشير) - مدرس تاريخ وجغرافيا",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className={cairo.variable}>
      <body>
        <ErrorBoundary>
          <ThemeProvider>
            <ToastProvider>
              <AuthProvider>
                <Navbar />
                <main className="min-h-screen">{children}</main>
                <Footer />
                <ScrollToTop />
              </AuthProvider>
            </ToastProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
