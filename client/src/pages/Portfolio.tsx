import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import ParticleBackground from "@/components/ParticleBackground";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio - AIML Developer & Creative Builder";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        '18-year-old B.Tech AIML student at Thapar University. Building the future with AI, machine learning, and creative technology. Explore my projects and innovations.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = '18-year-old B.Tech AIML student at Thapar University. Building the future with AI, machine learning, and creative technology. Explore my projects and innovations.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="relative bg-[var(--dark-primary)] text-white min-h-screen">
      <ParticleBackground />
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedProjects />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 AIML Developer Portfolio. Built with passion and lots of caffeine ☕
          </p>
        </div>
      </footer>
    </div>
  );
}
