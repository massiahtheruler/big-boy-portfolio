import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/home/HeroSection";
import TechMarquee from "../components/home/TechMarquee";
import FeaturedProjectsSection from "../components/home/FeaturedProjectsSection";
import CurrentWorkSection from "../components/home/CurrentWorkSection";
import AboutValueSection from "../components/home/AboutValueSection";

function HomePage({ onOpenContact }) {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const element = document.querySelector(location.hash);
    if (!element) {
      return;
    }

    requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  return (
    <>
      <HeroSection onOpenContact={onOpenContact} />
      <TechMarquee />
      <FeaturedProjectsSection />
      <CurrentWorkSection />
      <AboutValueSection />
    </>
  );
}

export default HomePage;
