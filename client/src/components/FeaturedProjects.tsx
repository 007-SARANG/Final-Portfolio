import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const projects = [
  {
    id: 1,
    title: "Gesture-Controlled Pong Game",
    description: "Real-time hand movement detection using OpenCV to control game paddle. Features custom contour and threshold logic for precise gesture recognition.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Computer Vision",
    categoryIcon: "🎮",
    categoryColor: "var(--purple-primary)",
    tech: ["Python", "OpenCV", "Game Development"],
    github: "https://github.com/007-SARANG/gesture_pong"
  },
  {
    id: 2,
    title: "SarangBot — Personal Chatbot",
    description: "A fun and human-style chatbot based on my personality. Features memory between chats, typing animation, roast replies, themes, and chat history.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "AI Chatbot",
    categoryIcon: "🤖",
    categoryColor: "var(--blue-primary)",
    tech: ["React", "JavaScript", "Logic Modules"],
    github: "https://github.com/007-SARANG/chatbot"
  },
  {
    id: 3,
    title: "SarangOS — Creative Portfolio",
    description: "OS-style creative portfolio site with animations, boot intro, sidebar, and draggable cards. Built to make people say 'Wait... what?!'",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Creative UI",
    categoryIcon: "💻",
    categoryColor: "var(--emerald-accent)",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#"
  },
  {
    id: 4,
    title: "Diabetes Prediction Bot",
    description: "SVM classifier trained on patient health data to predict diabetes risk. Focused on accuracy with a simple, intuitive user interface.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "ML Health",
    categoryIcon: "💉",
    categoryColor: "var(--amber-accent)",
    tech: ["Python", "SVM", "scikit-learn"],
    github: "https://github.com/007-SARANG/Diabetes_Prediction_Bot"
  },
  {
    id: 5,
    title: "Mood-Based Song Recommender",
    description: "Suggests Bollywood & Hollywood songs based on user-selected mood (Happy, Sad, Chill). Pure frontend logic without external APIs.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Web App",
    categoryIcon: "🎵",
    categoryColor: "var(--purple-primary)",
    tech: ["JavaScript", "Frontend Logic", "Music"],
    github: "https://github.com/007-SARANG/Mood-Song-Recommend"
  },
  {
    id: 6,
    title: "WhatsApp Chat Summarizer",
    description: "Parses .txt chat files to analyze word usage, activity patterns, and message trends. Used for society recruitment analysis.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Data Analysis",
    categoryIcon: "📊",
    categoryColor: "var(--blue-primary)",
    tech: ["Python", "Data Analysis", "Text Processing"],
    github: "https://github.com/007-SARANG/Whatsapp-Summarizer"
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
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 mr-3 px-4 py-2 bg-[var(--purple-primary)] hover:bg-[var(--purple-primary)]/80 text-white text-center rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Get Code
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="View on GitHub"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
