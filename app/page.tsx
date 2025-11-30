import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Features from "@/components/home/Features";
import SocialMedia from "@/components/home/SocialMedia";
import CoursesSection from "@/components/home/CoursesSection";
import HowItWorks from "@/components/home/HowItWorks";
import AboutTeacher from "@/components/home/AboutTeacher";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="relative bg-background">
      <Hero />
      <Stats />
      <Features />
      <SocialMedia />
      <CoursesSection />
      <HowItWorks />
      <AboutTeacher />
      <Testimonials />
      <CTA />
    </div>
  );
}

