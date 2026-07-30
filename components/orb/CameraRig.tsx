"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";
import { usePortal } from "@/components/transitions/PortalContext";

export default function CameraRig() {
  const { camera, pointer } = useThree();
  const { progress } = usePortal();

  useFrame(() => {
    // Mouse hareketi
    const targetX = pointer.x * 0.18;
    const targetY = pointer.y * 0.12;

    camera.position.x = MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = MathUtils.lerp(camera.position.y, targetY, 0.05);

    // Portal açılırken hafif yaklaş
    const targetZ = 4 - progress * 0.4;

    camera.position.z = MathUtils.lerp(
      camera.position.z,
      targetZ,
      0.05
    );

    // Çok hafif FOV değişimi
    camera.fov = MathUtils.lerp(
      camera.fov,
      35 - progress * 3,
      0.05
    );

    camera.updateProjectionMatrix();

    camera.lookAt(0, 0, 0);
  });

  return null;
}