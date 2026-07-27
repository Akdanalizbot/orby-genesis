"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Rings() {
  const ring = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ring.current) return;

    ring.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={ring} rotation={[Math.PI / 2.8, 0, 0]}>
      <torusGeometry args={[1.35, 0.035, 32, 180]} />

      <meshStandardMaterial
        color="#7C4DFF"
        emissive="#66D9FF"
        emissiveIntensity={4}
      />
    </mesh>
  );
}