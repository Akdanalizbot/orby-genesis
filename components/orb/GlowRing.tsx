"use client";

import { usePortal } from "@/components/transitions/PortalContext";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function GlowRing() {
  const ring = useRef<THREE.Mesh>(null);
  const { progress } = usePortal();

  useFrame((state) => {
    if (!ring.current) return;

    const t = state.clock.elapsedTime;

    // Quantum Pulse
    const quantumPulse =
      Math.pow((Math.sin(t * 0.9) + 1) * 0.5, 6);

    // Sinematik dönüş
    ring.current.rotation.x =
      Math.PI / 2 +
      Math.sin(t * 0.28) * 0.08;

    ring.current.rotation.y =
      Math.sin(t * 0.18) * 0.18;

    ring.current.rotation.z =
      t * 0.22;

    // Quantum Breathing
    const scale =
      1.18 +
      Math.sin(t * 1.2) * 0.01 +
      quantumPulse * 0.03;
      progress * 0.45;

    ring.current.scale.setScalar(scale);

    const material =
      ring.current.material as THREE.MeshBasicMaterial;

    material.opacity =
      0.78 +
      Math.sin(t * 2.2) * 0.04 +
      quantumPulse * 0.18;
      progress * 0.15;

    material.color.setRGB(
      0.62 + quantumPulse * 0.08 + progress * 0.12,
      0.93 + quantumPulse * 0.03 + progress * 0.04,
      1
    );
  });

  return (
    <mesh ref={ring}>
      <torusGeometry args={[1.58, 0.025, 64, 320]} />

      <meshBasicMaterial
        color="#9feeff"
        transparent
        opacity={0.8}
        toneMapped={false}
      />
    </mesh>
  );
}