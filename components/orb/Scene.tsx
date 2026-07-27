"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Orbi from "./Orbi";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4],
        fov: 40,
      }}
    >
      <ambientLight intensity={1.8} />

      <directionalLight
        position={[3, 3, 3]}
        intensity={3}
      />

      <Orbi />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}