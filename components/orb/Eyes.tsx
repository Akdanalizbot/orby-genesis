"use client";

export default function Eyes() {
  return (
    <>
      {/* Sol göz */}
      <mesh position={[-0.28, 0.15, 0.82]}>
        <sphereGeometry args={[0.18, 64, 64]} />

        <meshPhysicalMaterial
          color="white"
          emissive="white"
          emissiveIntensity={1}
          roughness={0}
        />
      </mesh>

      {/* Sağ göz */}
      <mesh position={[0.28, 0.15, 0.82]}>
        <sphereGeometry args={[0.18, 64, 64]} />

        <meshPhysicalMaterial
          color="white"
          emissive="white"
          emissiveIntensity={1}
          roughness={0}
        />
      </mesh>
    </>
  );
}