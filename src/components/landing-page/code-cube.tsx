"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function CodeParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const generateParticles = () => {
    const temp: THREE.Vector3[] = [];
    for (let i = 0; i < 500; i++) {
      // mais partículas
      temp.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        )
      );
    }
    return temp;
  };

  const [particles] = useState<THREE.Vector3[]>(generateParticles);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x += 0.001;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={new Float32Array(particles.map((p) => p.toArray()).flat())}
      stride={3}
      frustumCulled
    >
      <PointMaterial color="#C8F904" size={0.1} sizeAttenuation />
    </Points>
  );
}

export default function CodeCubeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <CodeParticles />
    </Canvas>
  );
}
