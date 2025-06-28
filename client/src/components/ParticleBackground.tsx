import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = [
      { top: "10%", left: "10%", delay: "0s" },
      { top: "20%", left: "80%", delay: "1s" },
      { top: "40%", left: "20%", delay: "2s" },
      { top: "60%", left: "70%", delay: "3s" },
      { top: "80%", left: "30%", delay: "4s" },
      { top: "30%", left: "90%", delay: "5s" }
    ];

    particles.forEach((particle, index) => {
      const div = document.createElement("div");
      div.className = "particle";
      div.style.top = particle.top;
      div.style.left = particle.left;
      div.style.animationDelay = particle.delay;
      container.appendChild(div);
    });

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const particleElements = container.querySelectorAll('.particle');
      
      particleElements.forEach((particle, index) => {
        const speed = (index + 1) * 0.1;
        (particle as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
