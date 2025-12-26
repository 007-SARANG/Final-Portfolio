import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls, Float } from '@react-three/drei'
import * as THREE from 'three'

const skillCategories = [
  {
    title: "Languages & Core",
    color: "#8b5cf6", // purple
    skills: ["Python", "JavaScript", "C/C++", "HTML/CSS", "TypeScript", "SQL"]
  },
  {
    title: "AI & ML",
    color: "#3b82f6", // blue
    skills: ["OpenCV", "scikit-learn", "pandas", "numpy", "PyTorch", "TensorFlow"]
  },
  {
    title: "Web",
    color: "#10b981", // emerald
    skills: ["ReactJS", "Flask", "Node.js", "Framer Motion", "Three.js", "Next.js"]
  },
  {
    title: "Tools",
    color: "#f59e0b", // amber
    skills: ["Git", "GitHub", "Tailwind", "Vercel", "Docker", "Linux"]
  }
];

function Word({ children, ...props }: any) {
  const color = new THREE.Color()
  const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef<any>()
  const [hovered, setHovered] = useState(false)
  const over = (e: any) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)

  // Change the mouse cursor on hover
  useFrame(({ camera }) => {
    // ref.current.quaternion.copy(camera.quaternion)
    if(ref.current) {
        ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : props.color), 0.1)
    }
  })

  return (
    <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps}>
      {children}
    </Text>
  )
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a spherical distribution of words
  const words = useMemo(() => {
    const temp: any[] = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (skillCategories.length * skillCategories[0].skills.length + 1)
    const thetaSpan = (Math.PI * 2) / (skillCategories.length * skillCategories[0].skills.length)

    let i = 0;
    for (const category of skillCategories) {
        for (const skill of category.skills) {
            // Random spherical coordinates
             spherical.set(
                radius,
                Math.acos( -1 + ( 2 * i ) / 25 ), // phi
                Math.sqrt( 25 * Math.PI ) * Math.acos( -1 + ( 2 * i ) / 25 ) // theta
             );
            const pos = new THREE.Vector3().setFromSpherical(spherical)
            temp.push([pos, skill, category.color])
            i++;
        }
    }
    return temp
  }, [count, radius])

  return (
    <>
      {words.map(([pos, word, color], index) => (
        <Word key={index} position={pos} color={color}>
          {word}
        </Word>
      ))}
    </>
  )
}

export default function Skills3D() {
  return (
    <div className="h-[500px] w-full cursor-grab active:cursor-grabbing">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={['#202025', 0, 80]} />
        <Cloud count={8} radius={20} />
        <TrackballControls noZoom />
      </Canvas>
    </div>
  )
}
