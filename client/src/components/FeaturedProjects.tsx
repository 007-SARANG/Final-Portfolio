import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const projects = [
  {
    id: 1,
    title: "AI Code Generator",
    description: "An intelligent code generation tool using transformers that can generate functional code from natural language descriptions.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "AI/ML Project",
    categoryIcon: "🤖",
    categoryColor: "var(--purple-primary)",
    tech: ["Python", "PyTorch", "Transformers"],
    liveDemo: "#",
    github: "#"
  },
  {
    id: 2,
    title: "3D Analytics Dashboard",
    description: "Interactive 3D data visualization platform with real-time analytics and immersive data exploration capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Data Viz",
    categoryIcon: "📊",
    categoryColor: "var(--blue-primary)",
    tech: ["React", "Three.js", "D3.js"],
    liveDemo: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Neural Art Generator",
    description: "A creative AI tool that generates unique artwork using GANs, combining style transfer with original content creation.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Creative AI",
    categoryIcon: "🎨",
    categoryColor: "var(--emerald-accent)",
    tech: ["TensorFlow", "GANs", "OpenCV"],
    liveDemo: "#",
    github: "#"
  }
];

export default function FeaturedProjects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 px-6 relative">
      <motion.div 
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300">
            Here are some of my crazy and creative builds
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card rounded-xl p-6 card-hover"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{project.categoryIcon}</span>
                <span 
                  className="font-semibold"
                  style={{ color: project.categoryColor }}
                >
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: `${project.categoryColor}20`,
                      color: project.categoryColor
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <motion.a
                  href={project.liveDemo}
                  className="text-[var(--purple-primary)] hover:text-[var(--purple-primary)]/80 transition-colors flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.github}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
