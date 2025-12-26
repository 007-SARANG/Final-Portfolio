import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text3D, Center, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'

function HeroScene() {
    const meshRef = useRef<any>(null)

    useFrame((state) => {
        if(meshRef.current) {
            meshRef.current.rotation.y += 0.005
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) * 0.1
        }
    })

    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh ref={meshRef}>
                    <torusKnotGeometry args={[1.5, 0.4, 100, 16]} />
                    <meshStandardMaterial
                        color="#2a2a2a"
                        roughness={0.1}
                        metalness={0.8}
                        emissive="#8b5cf6"
                        emissiveIntensity={0.2}
                        wireframe
                    />
                </mesh>
            </Float>

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </group>
    )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <HeroScene />
      </Canvas>
    </div>
  )
}
