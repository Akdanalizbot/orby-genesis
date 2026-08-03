"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { usePortal } from "./PortalContext";

export default function QuantumFlowParticles() {
  const { progress } = usePortal();

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        angle: (360 / 28) * index + Math.random() * 12,
        distance: 120 + Math.random() * 90,
        size: 2 + Math.random() * 3,
        duration: 1.4 + Math.random() * 1.4,
        delay: Math.random() * 1.5,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible">
      {particles.map((particle) => {
        const angle = (particle.angle * Math.PI) / 180;

        const startX = Math.cos(angle) * particle.distance;
        const startY = Math.sin(angle) * particle.distance;

        return (
          <motion.span
            key={particle.id}
            className="absolute left-1/2 top-1/2 rounded-full bg-cyan-200"
            style={{
              width: particle.size,
              height: particle.size,
              boxShadow:
                "0 0 8px rgba(103,232,249,0.9), 0 0 16px rgba(34,211,238,0.5)",
            }}
            initial={{
              x: startX,
              y: startY,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: [startX, startX * 0.55, 0],
              y: [startY, startY * 0.55, 0],

              opacity: [
                0,
                0.15 + progress * 0.85,
                0,
              ],

              scale: [
                0.4,
                0.8 + progress * 0.5,
                0.1,
              ],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeIn",
            }}
          />
        );
      })}
    </div>
  );
}