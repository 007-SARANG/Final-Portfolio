import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Float, Stars, Cloud, Sparkles, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

export default function Experience() {
  const scroll = useScroll();
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  // Background color ref to avoid recreation
  const bgColors = useMemo(() => ({
    start: new THREE.Color("#020205"),
    mid: new THREE.Color("#1a0b2e"),
    end: new THREE.Color("#0f172a")
  }), []);

  // Frame loop for camera rig and background
  useFrame((state, delta) => {
    const offset = scroll.offset; // 0 to 1

    // --- Dynamic Background ---
    if (offset < 0.5) {
      state.scene.background = bgColors.start.clone().lerp(bgColors.mid, offset * 2);
    } else {
      state.scene.background = bgColors.mid.clone().lerp(bgColors.end, (offset - 0.5) * 2);
    }

    // --- Camera Rig (Fly-through) ---
    // We define a curve or simply interpolate positions

    // Position Waypoints:
    // 0.0 (Hero): [0, 0, 5] looking at [0,0,0]
    // 0.33 (Projects): [0, -10, 8] looking at [0, -10, 0] (Slightly further back, looking down)
    // 0.66 (Skills): [-5, -20, 5] looking at [-5, -20, 0] (Side view)
    // 1.0 (Contact): [0, -30, 4] looking at [0, -30, 0]

    const pos = state.camera.position;
    const targetPos = new THREE.Vector3();
    const lookAtTarget = new THREE.Vector3();

    if (offset < 0.33) {
        // From Hero to Projects
        const t = offset / 0.33;
        // Move from [0, 0, 5] to [0, -10, 10]
        targetPos.set(
            THREE.MathUtils.lerp(0, 0, t),
            THREE.MathUtils.lerp(0, -10, t),
            THREE.MathUtils.lerp(5, 10, t)
        );
        lookAtTarget.set(0, THREE.MathUtils.lerp(0, -10, t), 0);

    } else if (offset < 0.66) {
        // From Projects to Skills
        const t = (offset - 0.33) / 0.33;
        // Move from [0, -10, 10] to [-5, -20, 5]
        targetPos.set(
             THREE.MathUtils.lerp(0, -5, t),
             THREE.MathUtils.lerp(-10, -20, t),
             THREE.MathUtils.lerp(10, 5, t)
        );
        lookAtTarget.set(
            THREE.MathUtils.lerp(0, -5, t),
            THREE.MathUtils.lerp(-10, -20, t),
            0
        );
    } else {
        // From Skills to Contact
        const t = (offset - 0.66) / 0.34;
        // Move from [-5, -20, 5] to [0, -30, 4]
        targetPos.set(
            THREE.MathUtils.lerp(-5, 0, t),
            THREE.MathUtils.lerp(-20, -30, t),
            THREE.MathUtils.lerp(5, 4, t)
        );
        lookAtTarget.set(
            THREE.MathUtils.lerp(-5, 0, t),
            THREE.MathUtils.lerp(-20, -30, t),
            0
        );
    }

    // Smooth camera movement
    state.camera.position.lerp(targetPos, 0.1);
    state.camera.lookAt(lookAtTarget); // We might want to slerp quaternion for smoother rotation but lookAt every frame with small position changes is usually fine here.

    // Slight rotation/wobble for immersion
    state.camera.rotation.z = THREE.MathUtils.lerp(state.camera.rotation.z, (offset - 0.5) * 0.1, 0.1);

  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Immersive Background Elements */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={500} scale={40} size={5} speed={0.4} opacity={0.5} color="#8b5cf6" />

      {/*
         SCENE OBJECTS
         Placed at absolute Y coordinates corresponding to the camera path
      */}

      {/* Hero Section (Y=0) */}
      <HeroGroup />

      {/* Projects Section (Y=-10) */}
      <ProjectsGroup />

      {/* Skills Section (Y=-20) */}
      <SkillsGroup />

      {/* Contact Section (Y=-30) */}
      <ContactGroup />

    </>
  );
}

function HeroGroup() {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <group position={[0, 0, 0]}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh ref={meshRef}>
                    <torusKnotGeometry args={[1, 0.3, 128, 16]} />
                    <meshStandardMaterial
                        color="#8b5cf6"
                        roughness={0.1}
                        metalness={0.8}
                        emissive="#2e1065"
                        emissiveIntensity={0.5}
                    />
                </mesh>
            </Float>
            <Cloud opacity={0.5} speed={0.4} width={10} depth={1.5} segments={20} position={[0, 0, -5]} color="#4c1d95" />
        </group>
    )
}

function ProjectsGroup() {
     // Floating Cubes representing projects
    return (
        <group position={[0, -10, 0]}>
             {/* Main decorative object */}
             <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                 <mesh position={[4, 0, -2]} rotation={[0, 0.5, 0]}>
                    <icosahedronGeometry args={[2, 0]} />
                    <meshStandardMaterial color="#3b82f6" wireframe />
                 </mesh>
             </Float>

             {/* Small floating particles/cubes */}
             {Array.from({ length: 5 }).map((_, i) => (
                 <Float key={i} speed={1 + Math.random()} rotationIntensity={2} floatIntensity={1} position={[
                     (Math.random() - 0.5) * 15,
                     (Math.random() - 0.5) * 10,
                     (Math.random() - 0.5) * 5 - 5
                 ]}>
                     <mesh>
                         <boxGeometry args={[0.5, 0.5, 0.5]} />
                         <meshStandardMaterial color="#60a5fa" transparent opacity={0.6} />
                     </mesh>
                 </Float>
             ))}
        </group>
    )
}

function SkillsGroup() {
    // A techy wireframe sphere surrounding the area
     const meshRef = useRef<THREE.Mesh>(null);
     useFrame((state, delta) => {
         if (meshRef.current) {
             meshRef.current.rotation.y -= delta * 0.1;
         }
     });

    return (
        <group position={[-5, -20, 0]}>
             <mesh ref={meshRef} scale={[8, 8, 8]}>
                 <sphereGeometry args={[1, 64, 64]} />
                 <meshBasicMaterial color="#10b981" wireframe transparent opacity={0.1} />
             </mesh>

             {/* Floating tech icons represented by geometric shapes for now */}
             <Float speed={2} rotationIntensity={1}>
                 <mesh position={[2, 2, 0]}>
                     <octahedronGeometry args={[1, 0]} />
                     <meshStandardMaterial color="#34d399" />
                 </mesh>
             </Float>
              <Float speed={3} rotationIntensity={1} position={[-2, -2, 2]}>
                 <mesh>
                     <dodecahedronGeometry args={[0.8, 0]} />
                     <meshStandardMaterial color="#059669" />
                 </mesh>
             </Float>
        </group>
    )
}

function ContactGroup() {
    return (
        <group position={[0, -30, 0]}>
            <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
                <mesh position={[0, 0, -5]}>
                    <ringGeometry args={[3, 5, 32]} />
                    <meshStandardMaterial color="#f43f5e" wireframe side={THREE.DoubleSide} />
                </mesh>
            </Float>
            <Sparkles count={200} scale={10} size={10} speed={0.2} opacity={0.8} color="#fca5a5" position={[0, 0, -2]} />
        </group>
    )
}
