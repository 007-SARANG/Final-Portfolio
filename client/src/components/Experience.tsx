import { useRef, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Text, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

export default function Experience() {
  const scroll = useScroll();
  const cameraRef = useRef<THREE.Group>(null);
  const heroObj = useRef<THREE.Mesh>(null);

  // Scene timeline
  useFrame((state, delta) => {
    // Current scroll offset (0 to 1)
    const r1 = scroll.range(0 / 4, 1 / 4);
    const r2 = scroll.range(1 / 4, 1 / 4);
    const r3 = scroll.range(2 / 4, 1 / 4);
    const r4 = scroll.range(3 / 4, 1 / 4);

    if (heroObj.current) {
        // Rotate hero object consistently
        heroObj.current.rotation.x += delta * 0.2;
        heroObj.current.rotation.y += delta * 0.3;

        // Morph hero object based on scroll
        // Move hero object
        // 0 -> center
        // 1 -> left
        // 2 -> down
        // 3 -> away

        // Simple interpolation
        const scrollOffset = scroll.offset;

        // This is a quick way to handle camera movement based on scroll
        // We can interpolate positions
        // Section 1: (0, 0, 0)
        // Section 2: (-2, -5, 0)
        // Section 3: (0, -10, 0)
        // Section 4: (0, -15, 2)

        // Using libraries like GSAP is better for complex timelines, but we can do simple lerps here
        // or just rely on the scroll ranges to trigger changes
    }

    // Camera movement
    // const offset = 1 - scroll.offset;
    // state.camera.position.set(0, offset * 10, 5);
  });

  // Use GSAP for smoother scroll-linked animations
  useLayoutEffect(() => {
    if (!heroObj.current) return;

    // Connect scroll.offset to GSAP timeline?
    // Actually, simply using the useScroll hook values in useFrame is often easier for R3F

    // But let's set up the GSAP timeline linked to the scroll offset if we want advanced control.
    // However, since we are inside R3F, let's stick to useFrame with scroll.curve / scroll.range

  }, []);

  // Dynamic Background Color
  useFrame((state) => {
      const offset = scroll.offset;
      // Interpolate background color
      // Start: #0a0a0a (Black/Dark)
      // Middle: #1a0b2e (Purpleish)
      // End: #000000

      const c1 = new THREE.Color("#050505");
      const c2 = new THREE.Color("#1a0b2e");
      const c3 = new THREE.Color("#0f172a");

      if (offset < 0.5) {
          state.scene.background = c1.lerp(c2, offset * 2);
      } else {
          state.scene.background = c2.lerp(c3, (offset - 0.5) * 2);
      }
  });

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={2} />

      {/* Stars that move with scroll */}
      <group>
        {/* We can put stars here */}
      </group>

      {/* The "Core" Object - Persists through the journey */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={heroObj} position={[0, 0, 0]}>
          <torusKnotGeometry args={[1, 0.3, 128, 16]} />
          <MeshDistortMaterial
             color="#8b5cf6"
             attach="material"
             distort={0.5}
             speed={2}
             roughness={0.2}
             metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Scroll-based logic inside useFrame will move the camera or this group */}
      <SceneContent scroll={scroll} />
    </>
  );
}

function SceneContent({ scroll }: { scroll: any }) {
    const group = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (!group.current) return;

        // Move the whole scene up as we scroll down to simulate travel
        // 4 pages -> scroll.offset goes 0 to 1
        // We want to move Y from 0 to -30 (approx height of viewport * 3)

        const y = scroll.offset * -25;
        // Dampen the movement for smoothness
        // THREE.MathUtils.damp(group.current.position, 'y', y, 4, delta);
        // Or direct mapping
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, y, 0.1);
    });

    return (
        <group ref={group}>
            {/* Section 1: Hero (at Y=0) */}
            <group position={[0, 0, 0]}>
               {/* Hero Content is mostly HTML, but we can add 3D flair */}
            </group>

            {/* Section 2: Projects (at Y=-7) */}
            <group position={[3, -7, 0]}>
                <mesh rotation={[0, -0.5, 0]}>
                    <boxGeometry args={[3, 4, 0.2]} />
                    <meshStandardMaterial color="#3b82f6" wireframe />
                </mesh>
                 <Text
                    position={[-2, 2, 0]}
                    fontSize={0.5}
                    color="white"
                    anchorX="right"
                >
                    FEATURED PROJECTS
                </Text>
            </group>

            {/* Section 3: Skills (at Y=-15) */}
            <group position={[-3, -15, 0]}>
                {/* We can re-use the word cloud here? */}
                <Text
                    position={[2, 2, 0]}
                    fontSize={0.5}
                    color="white"
                    anchorX="left"
                >
                    SKILLS & TECH
                </Text>
                 <mesh rotation={[0, 0.5, 0]}>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshStandardMaterial color="#10b981" wireframe />
                </mesh>
            </group>

             {/* Section 4: Contact (at Y=-22) */}
             <group position={[0, -23, 0]}>
                <mesh>
                    <octahedronGeometry args={[2, 0]} />
                    <meshStandardMaterial color="#f43f5e" wireframe />
                </mesh>
            </group>
        </group>
    )
}
