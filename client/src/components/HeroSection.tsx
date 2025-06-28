import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();
  const projectsCount = useCounterAnimation(25, isVisible);
  const technologiesCount = useCounterAnimation(15, isVisible);
  const yearsCount = useCounterAnimation(2, isVisible);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 gradient-bg opacity-10" />
      
      <motion.div 
        ref={ref}
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div className="mb-8" variants={fadeInUp}>
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-gradient">Creative</span><br />
            <motion.span 
              className="typewriter"
              initial={{ width: 0 }}
              animate={isVisible ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 4, delay: 1 }}
            >
              AIML Developer
            </motion.span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            18-year-old B.Tech student at Thapar University, building the future with AI & creativity 🤯
          </p>
        </motion.div>
        
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-3 gap-8 mb-12"
          variants={fadeInUp}
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[var(--purple-primary)] counter">
              {projectsCount}
            </div>
            <div className="text-gray-400">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[var(--blue-primary)] counter">
              {technologiesCount}
            </div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[var(--emerald-accent)] counter">
              {yearsCount}
            </div>
            <div className="text-gray-400">Years Coding</div>
          </div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeInUp}
        >
          <motion.button
            onClick={scrollToProjects}
            className="magnetic-hover px-8 py-3 bg-[var(--purple-primary)] hover:bg-[var(--purple-primary)]/80 rounded-lg font-semibold glow-effect transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            className="magnetic-hover px-8 py-3 border border-[var(--purple-primary)] text-[var(--purple-primary)] hover:bg-[var(--purple-primary)] hover:text-white rounded-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-[var(--purple-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
