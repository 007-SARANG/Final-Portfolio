import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();
  const projectsCount = useCounterAnimation(6, isVisible);
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, hsl(263, 85%, 68%), hsl(217, 91%, 60%))`,
              borderRadius: i % 2 === 0 ? '50%' : '0%',
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 gradient-bg opacity-15" />
      
      <motion.div 
        ref={ref}
        className="relative z-10 text-center max-w-5xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Hero badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--purple-primary)]/20 border border-[var(--purple-primary)]/30 mb-8"
          variants={fadeInUp}
          whileHover={{ scale: 1.05, borderColor: "var(--purple-primary)" }}
        >
          <span className="w-2 h-2 bg-[var(--emerald-accent)] rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300">Available for exciting projects</span>
        </motion.div>

        <motion.div className="mb-12" variants={fadeInUp}>
          <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none">
            <motion.span 
              className="text-gradient block"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Creative
            </motion.span>
            <motion.span 
              className="block relative overflow-hidden"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="text-white">AIML</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[var(--purple-primary)] to-[var(--blue-primary)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1.5 }}
                style={{ mixBlendMode: 'difference' }}
              />
            </motion.span>
            <motion.span 
              className="text-gradient block"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Developer
            </motion.span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            18-year-old B.Tech student at <span className="text-[var(--purple-primary)] font-semibold">Thapar University</span>, 
            building projects that make people say <span className="text-[var(--emerald-accent)] font-semibold">"Wait... what?!"</span>
          </motion.p>
        </motion.div>
        
        {/* Interactive Stats Cards */}
        <motion.div 
          className="grid grid-cols-3 gap-6 mb-12"
          variants={fadeInUp}
        >
          <motion.div 
            className="relative p-6 rounded-2xl bg-gradient-to-br from-[var(--purple-primary)]/20 to-transparent border border-[var(--purple-primary)]/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: "var(--purple-primary)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-2 right-2 w-2 h-2 bg-[var(--purple-primary)] rounded-full animate-pulse"></div>
            <div className="text-4xl md:text-5xl font-bold text-[var(--purple-primary)] counter mb-2">
              {projectsCount}
            </div>
            <div className="text-gray-400 text-sm">Projects Built</div>
          </motion.div>
          
          <motion.div 
            className="relative p-6 rounded-2xl bg-gradient-to-br from-[var(--blue-primary)]/20 to-transparent border border-[var(--blue-primary)]/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: "var(--blue-primary)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-2 right-2 w-2 h-2 bg-[var(--blue-primary)] rounded-full animate-pulse"></div>
            <div className="text-4xl md:text-5xl font-bold text-[var(--blue-primary)] counter mb-2">
              {technologiesCount}
            </div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </motion.div>
          
          <motion.div 
            className="relative p-6 rounded-2xl bg-gradient-to-br from-[var(--emerald-accent)]/20 to-transparent border border-[var(--emerald-accent)]/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: "var(--emerald-accent)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-2 right-2 w-2 h-2 bg-[var(--emerald-accent)] rounded-full animate-pulse"></div>
            <div className="text-4xl md:text-5xl font-bold text-[var(--emerald-accent)] counter mb-2">
              {yearsCount}
            </div>
            <div className="text-gray-400 text-sm">Years Coding</div>
          </motion.div>
        </motion.div>

        {/* Code terminal effect */}
        <motion.div 
          className="relative max-w-2xl mx-auto mb-12 p-6 bg-black/50 rounded-xl border border-gray-700/50 backdrop-blur-sm"
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-400 ml-2">~/sarang/projects</span>
          </div>
          <div className="font-mono text-sm">
            <div className="text-green-400">$ whoami</div>
            <div className="text-gray-300">Sarang - AIML Developer & Creative Builder</div>
            <div className="text-green-400 mt-2">$ ls skills/</div>
            <div className="text-blue-400">AI_ML/ Computer_Vision/ Web_Dev/ Creative_Coding/</div>
            <div className="text-green-400 mt-2">$ git status</div>
            <div className="text-gray-300">Currently working on: <span className="text-yellow-400">6+ amazing projects</span></div>
            <motion.div 
              className="text-green-400 mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              $ ready_for_collaboration ●
            </motion.div>
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
