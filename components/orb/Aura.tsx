"use client";

export default function Aura() {
  return (
    <mesh scale={1.18}>
      <sphereGeometry args={[1, 64, 64]} />

      <meshBasicMaterial
        color="#8F4DFF"
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}