import { Scroll } from '@react-three/drei';
import { motion } from 'framer-motion';

const Section = (props: any) => {
  return (
    <section className={`h-screen flex flex-col justify-center p-10 ${props.right ? "items-end text-right" : "items-start text-left"}`}
             style={{
                opacity: props.opacity
             }}>
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-xl w-full">
          <div className="bg-[rgba(0,0,0,0.6)] backdrop-blur-sm rounded-lg p-8">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  return (
    <Scroll html>
        {/* Section 1: Hero */}
      <div className="w-screen">
        <section className="h-screen flex flex-col justify-center items-center p-10 text-center">
             <div className="max-w-5xl mx-auto">
                <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none text-white">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                        Creative
                    </span>
                    <span className="block text-white">AIML</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                        Developer
                    </span>
                </h1>
                 <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                    18-year-old B.Tech student at <span className="text-purple-400 font-semibold">Thapar University</span>,
                    building projects that make people say <span className="text-green-400 font-semibold">"Wait... what?!"</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white transition-all duration-300"
                    >
                        View My Work
                    </button>
                    <button
                        className="px-8 py-3 border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-lg font-semibold transition-all duration-300"
                    >
                        Get In Touch
                    </button>
                </div>
             </div>
        </section>

        {/* Section 2: Projects */}
        <Section right>
          <h1 className="text-5xl font-semibold text-white">Featured Projects</h1>
          <p className="text-gray-300 mt-4 text-xl">
             Here are some of my crazy and creative builds
          </p>
          <ul className="mt-8 space-y-4 text-left h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
            <li className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white">Gesture-Controlled Pong Game</h3>
                    <span className="text-xl">🎮</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">Real-time hand movement detection using OpenCV to control game paddle.</p>
                <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">Python</span>
                    <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">OpenCV</span>
                </div>
            </li>
            <li className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                <div className="flex justify-between items-start">
                     <h3 className="text-xl font-bold text-white">SarangBot — Personal Chatbot</h3>
                     <span className="text-xl">🤖</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">A fun and human-style chatbot based on my personality. Features memory, roasting, and typing animations.</p>
                <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">Logic Modules</span>
                </div>
            </li>
            <li className="bg-gray-800 p-4 rounded-lg border-l-4 border-emerald-500">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white">SarangOS — Creative Portfolio</h3>
                    <span className="text-xl">💻</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">OS-style creative portfolio site with animations, boot intro, sidebar, and draggable cards.</p>
                <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-emerald-900/50 text-emerald-300 px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-emerald-900/50 text-emerald-300 px-2 py-1 rounded">Framer Motion</span>
                </div>
            </li>
             <li className="bg-gray-800 p-4 rounded-lg border-l-4 border-amber-500">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white">Diabetes Prediction Bot</h3>
                    <span className="text-xl">💉</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">SVM classifier trained on patient health data to predict diabetes risk.</p>
                <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-amber-900/50 text-amber-300 px-2 py-1 rounded">Python</span>
                    <span className="text-xs bg-amber-900/50 text-amber-300 px-2 py-1 rounded">SVM</span>
                </div>
            </li>
          </ul>
        </Section>

        {/* Section 3: Skills */}
        <Section>
          <h1 className="text-5xl font-semibold text-white">Skills & TechStack</h1>
          <p className="text-gray-300 mt-4">
             The tools and technologies I use to bring ideas to life.
          </p>
          <div className="mt-8 space-y-6">
            <div>
                <h4 className="text-purple-400 font-bold mb-2">Languages & Core</h4>
                <div className="flex flex-wrap gap-2">
                    {['Python', 'JavaScript', 'C/C++', 'HTML/CSS'].map(s => (
                        <span key={s} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">{s}</span>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="text-blue-400 font-bold mb-2">AI & Machine Learning</h4>
                <div className="flex flex-wrap gap-2">
                    {['OpenCV', 'scikit-learn', 'pandas', 'numpy'].map(s => (
                        <span key={s} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">{s}</span>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="text-emerald-400 font-bold mb-2">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-2">
                    {['ReactJS', 'Flask', 'Node.js', 'Framer Motion'].map(s => (
                        <span key={s} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">{s}</span>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="text-amber-400 font-bold mb-2">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                    {['Git & GitHub', 'Tailwind CSS', 'Netlify/Vercel', 'Jupyter/Colab'].map(s => (
                        <span key={s} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">{s}</span>
                    ))}
                </div>
            </div>
          </div>
        </Section>

         {/* Section 4: Contact */}
         <section className="h-screen flex flex-col justify-center items-center p-10 text-center">
             <div className="max-w-2xl w-full bg-[rgba(0,0,0,0.7)] backdrop-blur-md p-10 rounded-2xl border border-gray-800">
                <h1 className="text-5xl font-bold text-white mb-8">Ready to Collaborate?</h1>
                <p className="text-xl text-gray-300 mb-8">
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a href="mailto:sarangarora@engineer.com" className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all">
                    Say Hello
                </a>
                <div className="mt-12 flex justify-center space-x-8 text-gray-400">
                    <a href="https://github.com/007-SARANG" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                        <span className="text-2xl">💻</span> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/sarang-arora" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                        <span className="text-2xl">💼</span> LinkedIn
                    </a>
                    <a href="mailto:sarangarora@engineer.com" className="hover:text-white transition-colors flex items-center gap-2">
                         <span className="text-2xl">✉️</span> Email
                    </a>
                </div>
             </div>
         </section>
      </div>
    </Scroll>
  );
};
