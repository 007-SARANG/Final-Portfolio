import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

function Stars(props: any) {
  const ref = useRef<any>()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

function FloatingShapes() {
    const meshRef = useRef<any>(null)

    useFrame((state) => {
        if(meshRef.current) {
             const t = state.clock.getElapsedTime()
             meshRef.current.rotation.x = Math.cos(t / 4) / 2
             meshRef.current.rotation.y = Math.sin(t / 4) / 2
             meshRef.current.position.y = Math.sin(t / 1.5) / 10
        }
    })

    return (
        <group ref={meshRef}>
             <mesh position={[1, 1, 0]}>
                <dodecahedronGeometry args={[0.2, 0]} />
                <meshStandardMaterial color="#8b5cf6" wireframe />
             </mesh>
             <mesh position={[-1, -1, 0]}>
                <icosahedronGeometry args={[0.2, 0]} />
                <meshStandardMaterial color="#3b82f6" wireframe />
             </mesh>
             <mesh position={[1, -1, 0]}>
                <octahedronGeometry args={[0.2, 0]} />
                <meshStandardMaterial color="#10b981" wireframe />
             </mesh>
             <mesh position={[-1, 1, 0]}>
                <tetrahedronGeometry args={[0.2, 0]} />
                <meshStandardMaterial color="#f59e0b" wireframe />
             </mesh>
        </group>
    )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <Stars />
        <FloatingShapes />
      </Canvas>
    </div>
  )
}
