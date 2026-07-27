"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import Aura from "./Aura";
import EnergyCore from "./EnergyCore";
import Rings from "./Rings";
import Eyes from "./Eyes";
import Pupils from "./Pupils";

export default function Orbi() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.getElapsedTime();

    group.current.position.y = Math.sin(t * 1.5) * 0.12;
    group.current.rotation.y += 0.003;
  });

  return (
    <group ref={group}>
      <Aura />
      <EnergyCore />
      <Rings />
      <Eyes />
      <Pupils />
    </group>
  );
}