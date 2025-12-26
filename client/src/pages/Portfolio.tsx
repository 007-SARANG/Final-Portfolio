import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import { Suspense, useEffect } from 'react';
import Experience from '@/components/Experience';
import { Overlay } from '@/components/Overlay';
import Navigation from '@/components/Navigation';

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio - AIML Developer & Creative Builder";
    
    // Add meta tags...
  }, []);

  return (
    <div className="relative bg-[var(--dark-primary)] text-white h-screen w-full overflow-hidden">
      <Navigation />

      {/*
        Canvas needs to fill the screen.
        ScrollControls will handle the scrolling behavior.
      */}
      <Canvas
        camera={{
            position: [0, 0, 5],
            fov: 30
        }}
      >
         <Suspense fallback={null}>
            <ScrollControls pages={4} damping={0.25}>
                <Experience />
                <Overlay />
            </ScrollControls>
         </Suspense>
      </Canvas>

      {/*
         Loader?
         <Loader />
      */}
    </div>
  );
}
