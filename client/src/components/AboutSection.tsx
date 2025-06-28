import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="absolute inset-0 gradient-bg opacity-5" />
      
      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={slideInLeft}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              I'm an 18-year-old B.Tech student at Thapar University, currently in my 2nd year, 
              specializing in Artificial Intelligence & Machine Learning (AIML). I'm someone who 
              loves building projects that are not just functional, but also creative, interactive, 
              and sometimes downright crazy 🤯.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              From AI-based apps to computational creativity projects, I enjoy pushing the boundaries 
              of what's possible with code. My goal is to create technology that not only solves 
              problems but also inspires and amazes people.
            </p>
            
            {/* Achievement Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                className="bg-[var(--dark-secondary)]/50 rounded-lg p-4 border border-[var(--purple-primary)]/20"
                whileHover={{ scale: 1.05, borderColor: "var(--purple-primary)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl text-[var(--purple-primary)] mb-2">🎓</div>
                <div className="font-semibold">University</div>
                <div className="text-gray-400">Thapar University</div>
              </motion.div>
              
              <motion.div 
                className="bg-[var(--dark-secondary)]/50 rounded-lg p-4 border border-[var(--blue-primary)]/20"
                whileHover={{ scale: 1.05, borderColor: "var(--blue-primary)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl text-[var(--blue-primary)] mb-2">🧠</div>
                <div className="font-semibold">Specialization</div>
                <div className="text-gray-400">AI & ML</div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={slideInRight}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 gradient-bg rounded-2xl blur-xl opacity-30" />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
                alt="Young developer working on AI projects"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl glow-effect"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
