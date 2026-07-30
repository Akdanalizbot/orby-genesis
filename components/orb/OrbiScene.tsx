"use client";

import EnergyParticles from "./EnergyParticles";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import OrbiCore from "./OrbiCore";
import GlowRing from "./GlowRing";
import CameraRig from "./CameraRig";

export default function OrbiScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4],
        fov: 35,
      }}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <ambientLight intensity={1.2} />

      <pointLight
        position={[2, 2, 3]}
        intensity={22}
        color="#66d8ff"
      />

      <pointLight
        position={[-2, -2, -3]}
        intensity={15}
        color="#7b4dff"
      />

     <Environment preset="city" />

<CameraRig />

<OrbiCore />
<GlowRing />
<EnergyParticles />
    </Canvas>
  );
}