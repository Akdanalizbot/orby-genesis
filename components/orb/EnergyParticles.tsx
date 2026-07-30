"use client";

import { usePortal } from "@/components/transitions/PortalContext";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function EnergyParticles() {
  const points = useRef<THREE.Points>(null);
  const { progress } = usePortal();

  const positions = useMemo(() => {
    const arr = new Float32Array(220 * 3);

    for (let i = 0; i < 220; i++) {
      const r = 1.75 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }

    return arr;
  }, []);

  useFrame((state) => {
    if (!points.current) return;

    const t = state.clock.elapsedTime;

    // Quantum Pulse
    const quantumPulse =
      Math.pow((Math.sin(t * 0.9) + 1) * 0.5, 6);

    // Çok yavaş uzay hareketi
    points.current.rotation.y =
  t * (0.04 + quantumPulse * 0.01 + progress * 0.12);
    points.current.rotation.x = Math.sin(t * 0.15) * 0.05;
    points.current.rotation.z = Math.cos(t * 0.12) * 0.03;

    // Hafif nefes
    const scale =
      1 +
      Math.sin(t * 0.8) * 0.01 +
      quantumPulse * 0.02;
      progress * 0.25;

    points.current.scale.setScalar(scale);

    // Opacity (PointMaterial için güvenli)
    const material = points.current.material as THREE.Material;

    if ("opacity" in material) {
      material.opacity =
        0.72 +
        Math.sin(t * 2) * 0.08 +
        quantumPulse * 0.15;
        progress * 0.12
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#8fefff"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}