"use client";

import { useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";

export default function EnergyParticles() {
  const positions = useMemo(() => {
    const arr = new Float32Array(180 * 3);

    for (let i = 0; i < 180; i++) {
      const r = 1.7 + Math.random() * 0.7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }

    return arr;
  }, []);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#78dfff"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}