import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    color: "var(--purple-primary)",
    skills: [
      { name: "Python", icon: "🐍", level: "Advanced" },
      { name: "PyTorch", icon: "🔥", level: "Advanced" },
      { name: "TensorFlow", icon: "📊", level: "Intermediate" },
      { name: "Computer Vision", icon: "👁️", level: "Intermediate" }
    ]
  },
  {
    title: "Web Development",
    color: "var(--blue-primary)",
    skills: [
      { name: "JavaScript", icon: "⚡", level: "Advanced" },
      { name: "React", icon: "⚛️", level: "Advanced" },
      { name: "Node.js", icon: "🟢", level: "Intermediate" },
      { name: "MongoDB", icon: "🍃", level: "Intermediate" }
    ]
  },
  {
    title: "Creative Tools",
    color: "var(--emerald-accent)",
    skills: [
      { name: "Three.js", icon: "🎮", level: "Intermediate" },
      { name: "WebGL", icon: "🎨", level: "Beginner" },
      { name: "OpenCV", icon: "📹", level: "Intermediate" },
      { name: "p5.js", icon: "🎵", level: "Intermediate" }
    ]
  },
  {
    title: "Tools & Platforms",
    color: "var(--amber-accent)",
    skills: [
      { name: "Git", icon: "📝", level: "Advanced" },
      { name: "Docker", icon: "🐳", level: "Beginner" },
      { name: "AWS", icon: "☁️", level: "Beginner" },
      { name: "VS Code", icon: "💻", level: "Expert" }
    ]
  }
];

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 px-6">
      <motion.div 
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-xl text-gray-300">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              custom={categoryIndex}
            >
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: category.color }}
              >
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-bubble bg-[var(--dark-secondary)]/50 rounded-lg p-3 border transition-all duration-300 hover:border-opacity-50"
                    style={{ 
                      borderColor: `${category.color}20`,
                      '--hover-border-color': `${category.color}50`
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: 2,
                      borderColor: category.color + "50"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{skill.icon}</span>
                      <span>{skill.name}</span>
                      <div className="ml-auto text-sm text-gray-400">
                        {skill.level}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
