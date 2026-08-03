"use client";

import { motion } from "framer-motion";
import { usePortal } from "./PortalContext";

const lines = Array.from({ length: 12 });

export default function QuantumEnergyLines() {
  const { progress } = usePortal();

  return (
    <div className="pointer-events-none absolute inset-0">
      {lines.map((_, index) => {
        const angle = index * 30;

        return (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 h-[2px] w-[150px] origin-left"
            style={{
              rotate: `${angle}deg`,
              background:
                "linear-gradient(90deg, rgba(103,232,249,0.9), rgba(103,232,249,0))",
            }}
            animate={{
              opacity: 0.05 + progress * 0.55,
              scaleX: [
                0.25 + progress * 0.3,
                0.7 + progress * 0.5,
                0.25 + progress * 0.3,
              ],
            }}
            transition={{
              duration: 1.4 + index * 0.04,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.05,
            }}
          />
        );
      })}
    </div>
  );
}