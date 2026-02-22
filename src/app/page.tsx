import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
// import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LatestPosts from "@/components/sections/LatestPosts";
import ServicesSection from "@/components/sections/ServicesSection";
import TechStackSection from "@/components/sections/TechStackSection";

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechStackSection />
      <PortfolioSection />
      {/* <TestimonialsSection /> */}
      <LatestPosts />
    </>
  );
}
