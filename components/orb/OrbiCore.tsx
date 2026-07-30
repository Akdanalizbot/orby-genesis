"use client";

import { MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function OrbiCore() {
  const group = useRef<THREE.Group>(null);

  const { pointer } = useThree();

  const core = useRef<THREE.Mesh>(null);
  const energy = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    const intro = THREE.MathUtils.clamp((t - 1) / 1.2, 0, 1);

    // Quantum Pulse (yaşayan çekirdek hissi)
    const quantumPulse =
      Math.pow((Math.sin(t * 0.9) + 1) * 0.5, 6);

    // Kamera / Mouse Takibi
    const targetX =
      Math.sin(t * 0.35) * 0.05 +
      pointer.y * 0.08;

    const targetY =
      t * 0.25 * intro +
      pointer.x * 0.08;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      0.05
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY,
      0.05
    );

    // Float
    group.current.position.y =
      Math.sin(t * 1.2) * 0.05 * intro;

    // Quantum Breathing
    const breath =
      1 +
      Math.sin(t * 1.3) * 0.018 +
      quantumPulse * 0.01;

    group.current.scale.setScalar(
      breath * intro
    );

    // Kristal Çekirdek
    if (core.current) {
      core.current.rotation.y = -t * 0.8 * intro;
      core.current.rotation.x = t * 0.35 * intro;

      const mat =
        core.current.material as THREE.MeshPhysicalMaterial;

      mat.emissiveIntensity =
        10 +
        Math.sin(t * 3) * 2 +
        quantumPulse * 6;
    }

    // Enerji Çekirdeği
    if (energy.current) {
      energy.current.rotation.y = t * 2 * intro;
      energy.current.rotation.x = -t * 1.4 * intro;

      const pulse =
        0.22 +
        Math.sin(t * 4) * 0.015 +
        quantumPulse * 0.03;

      energy.current.scale.setScalar(pulse);

      const mat =
        energy.current.material as THREE.MeshPhysicalMaterial;

      mat.emissiveIntensity =
        18 +
        Math.sin(t * 6) * 3 +
        quantumPulse * 10;
    }
  });

  return (
    <group ref={group}>
      {/* Cam Küre */}
      <mesh>
        <icosahedronGeometry args={[1, 64]} />

        <MeshTransmissionMaterial
          thickness={0.42}
          roughness={0}
          transmission={1}
          ior={1.35}
          chromaticAberration={0.02}
          anisotropy={0.45}
          distortion={0.02}
          distortionScale={0.08}
          temporalDistortion={0.08}
          backside
        />
      </mesh>

      {/* Kristal Çekirdek */}
      <mesh ref={core} scale={0.46}>
        <icosahedronGeometry args={[1, 24]} />

        <meshPhysicalMaterial
          color="#8ee7ff"
          emissive="#63d4ff"
          emissiveIntensity={10}
          roughness={0}
          metalness={0.08}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>

      {/* Quantum Enerji Çekirdeği */}
      <mesh ref={energy}>
        <icosahedronGeometry args={[1, 8]} />

        <meshPhysicalMaterial
          color="#ffffff"
          emissive="#b7f8ff"
          emissiveIntensity={20}
          roughness={0}
          metalness={0}
          clearcoat={1}
        />
      </mesh>
    </group>
  );
}