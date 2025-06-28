import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Enhanced particle system with more dynamic effects
    const particles = [
      { top: "10%", left: "10%", delay: "0s", size: "4px", opacity: "0.6" },
      { top: "20%", left: "80%", delay: "1s", size: "6px", opacity: "0.4" },
      { top: "40%", left: "20%", delay: "2s", size: "3px", opacity: "0.8" },
      { top: "60%", left: "70%", delay: "3s", size: "5px", opacity: "0.5" },
      { top: "80%", left: "30%", delay: "4s", size: "4px", opacity: "0.7" },
      { top: "30%", left: "90%", delay: "5s", size: "7px", opacity: "0.3" },
      { top: "15%", left: "60%", delay: "6s", size: "3px", opacity: "0.9" },
      { top: "75%", left: "15%", delay: "7s", size: "5px", opacity: "0.4" },
      { top: "45%", left: "85%", delay: "8s", size: "4px", opacity: "0.6" },
      { top: "65%", left: "45%", delay: "9s", size: "6px", opacity: "0.5" }
    ];

    // Create enhanced particles
    particles.forEach((particle, index) => {
      const div = document.createElement("div");
      div.className = "particle";
      div.style.top = particle.top;
      div.style.left = particle.left;
      div.style.animationDelay = particle.delay;
      div.style.width = particle.size;
      div.style.height = particle.size;
      div.style.opacity = particle.opacity;
      
      // Add some variation to particle colors
      const colors = [
        "linear-gradient(45deg, hsl(263, 85%, 68%), hsl(217, 91%, 60%))",
        "linear-gradient(45deg, hsl(217, 91%, 60%), hsl(151, 81%, 36%))",
        "linear-gradient(45deg, hsl(151, 81%, 36%), hsl(43, 96%, 56%))"
      ];
      div.style.background = colors[index % 3];
      
      container.appendChild(div);
    });

    // Create connection lines between particles
    const createConnectionLines = () => {
      const particleElements = container.querySelectorAll('.particle');
      
      particleElements.forEach((particle1, i) => {
        particleElements.forEach((particle2, j) => {
          if (i < j && Math.random() > 0.7) { // Only create some connections
            const line = document.createElement("div");
            line.className = "particle-line";
            line.style.position = "absolute";
            line.style.height = "1px";
            line.style.background = "linear-gradient(90deg, transparent, hsla(263, 85%, 68%, 0.2), transparent)";
            line.style.transformOrigin = "left center";
            line.style.opacity = "0.3";
            line.style.animation = "line-pulse 4s ease-in-out infinite";
            line.style.animationDelay = `${Math.random() * 2}s`;
            
            const rect1 = particle1.getBoundingClientRect();
            const rect2 = particle2.getBoundingClientRect();
            const distance = Math.sqrt(
              Math.pow(rect2.left - rect1.left, 2) + Math.pow(rect2.top - rect1.top, 2)
            );
            const angle = Math.atan2(rect2.top - rect1.top, rect2.left - rect1.left);
            
            line.style.width = `${distance}px`;
            line.style.left = (particle1 as HTMLElement).style.left;
            line.style.top = (particle1 as HTMLElement).style.top;
            line.style.transform = `rotate(${angle}rad)`;
            
            container.appendChild(line);
          }
        });
      });
    };

    // Delay line creation until particles are positioned
    setTimeout(createConnectionLines, 100);

    // Enhanced parallax effect with mouse movement
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const particleElements = container.querySelectorAll('.particle');
      
      particleElements.forEach((particle, index) => {
        const speed = (index + 1) * 0.05;
        (particle as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const particleElements = container.querySelectorAll('.particle');
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      particleElements.forEach((particle, index) => {
        const factor = (index + 1) * 0.01;
        const moveX = (clientX - centerX) * factor;
        const moveY = (clientY - centerY) * factor;
        
        (particle as HTMLElement).style.transform += ` translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      container.innerHTML = '';
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
