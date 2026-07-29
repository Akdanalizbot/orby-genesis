"use client";

import { MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function OrbiCore() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    group.current.rotation.y = t * 0.35;
    group.current.rotation.x = Math.sin(t * 0.4) * 0.08;

    group.current.position.y = Math.sin(t * 1.4) * 0.06;

    group.current.scale.setScalar(
      1 + Math.sin(t * 2) * 0.015
    );
  });

  return (
    <group ref={group}>
      {/* Dış cam küre */}
      <mesh>
        <icosahedronGeometry args={[1, 64]} />

        <MeshTransmissionMaterial
          thickness={0.5}
          roughness={0}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.04}
          anisotropy={0.2}
          distortion={0.05}
          distortionScale={0.15}
          temporalDistortion={0.2}
          backside
        />
      </mesh>

      {/* İç enerji çekirdeği */}
      <mesh
        scale={0.42}
        rotation={[0.4, 0.8, 0]}
      >
        <icosahedronGeometry args={[1, 8]} />

        <meshPhysicalMaterial
          color="#74d7ff"
          emissive="#45bfff"
          emissiveIntensity={10}
          roughness={0}
          metalness={0.15}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>
    </group>
  );
}