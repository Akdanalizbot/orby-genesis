"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function GlowRing() {
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ring.current) return;

    const t = state.clock.elapsedTime;

    ring.current.rotation.x = Math.PI / 2;
    ring.current.rotation.y = Math.sin(t * 0.3) * 0.15;
    ring.current.rotation.z = t * 0.22;
  });

  return (
    <mesh ref={ring}>
      <torusGeometry args={[1.72, 0.015, 48, 320]} />

      <meshBasicMaterial
        color="#6fd8ff"
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}