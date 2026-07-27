"use client";

export default function EnergyCore() {
  return (
    <mesh>

      <sphereGeometry args={[1, 128, 128]} />

      <meshPhysicalMaterial
  color="#8A3FFC"
  roughness={0.02}
  metalness={0}
  transmission={0.35}
  thickness={1.5}
  clearcoat={1}
  clearcoatRoughness={0}
  emissive="#6D28FF"
  emissiveIntensity={2.8}
/>

    </mesh>
  );
}