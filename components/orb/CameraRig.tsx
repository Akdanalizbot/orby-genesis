"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";
import { usePortal } from "@/components/transitions/PortalContext";

export default function CameraRig() {
  const { camera, pointer } = useThree();
  const { progress } = usePortal();

  useFrame(() => {
    // Mouse hareketi
    // Biraz daha belirgin ama hâlâ yumuşak
    const targetX = pointer.x * 0.45;
    const targetY = pointer.y * 0.30;

    camera.position.x = MathUtils.lerp(
      camera.position.x,
      targetX,
      0.08
    );

    camera.position.y = MathUtils.lerp(
      camera.position.y,
      targetY,
      0.08
    );

    // Portal açılırken hafif yaklaş
    const targetZ = 4 - progress * 0.4;

    camera.position.z = MathUtils.lerp(
      camera.position.z,
      targetZ,
      0.05
    );

    // Portal sırasında çok hafif FOV değişimi
    camera.fov = MathUtils.lerp(
      camera.fov,
      35 - progress * 3,
      0.05
    );

    camera.updateProjectionMatrix();

    // Kamera her zaman ORBI merkezine baksın
    camera.lookAt(0, 0, 0);
  });

  return null;
}