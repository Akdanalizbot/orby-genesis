"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import Orbi from "./Orbi";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4],
        fov: 40,
      }}
    >
      {/* Lights */}
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[3, 3, 3]}
        intensity={3}
      />

      <pointLight
        position={[0, 2, 2]}
        intensity={8}
        color="#8A3FFC"
      />

      <Orbi />

      <EffectComposer>
        <Bloom
          intensity={1.6}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}