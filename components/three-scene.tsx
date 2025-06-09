"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3)

    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }

    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#d4a574" size={0.02} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
    </Points>
  )
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <dodecahedronGeometry args={[0.8]} />
      <meshStandardMaterial color="#c49b61" wireframe transparent opacity={0.3} />
    </mesh>
  )
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ParticleField />
        <FloatingGeometry />
      </Canvas>
    </div>
  )
}
