"use client";

export default function EnergyCore() {
  return (
    <mesh>

      <sphereGeometry args={[1, 128, 128]} />

      <meshPhysicalMaterial
  color="#8F4DFF"
  emissive="#7B2CFF"
  emissiveIntensity={4}
  roughness={0.02}
  metalness={0}
  transmission={0.45}
  thickness={2}
  clearcoat={1}
  clearcoatRoughness={0}
/>

    </mesh>
  );
}