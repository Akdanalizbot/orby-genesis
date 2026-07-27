"use client";

export default function Pupils() {
  return (
    <>
      {/* Sol göz bebeği */}
      <mesh position={[-0.28, 0.15, 0.98]}>
        <sphereGeometry args={[0.075, 32, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Sağ göz bebeği */}
      <mesh position={[0.28, 0.15, 0.98]}>
        <sphereGeometry args={[0.075, 32, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Sol parlama */}
      <mesh position={[-0.24, 0.20, 1.02]}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshBasicMaterial color="white" />
      </mesh>

      {/* Sağ parlama */}
      <mesh position={[0.32, 0.20, 1.02]}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </>
  );
}