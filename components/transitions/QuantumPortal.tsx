"use client";

import QuantumFlowParticles from "./QuantumFlowParticles";
import QuantumEnergyLines from "./QuantumEnergyLines";
import { motion } from "framer-motion";
import { usePortal } from "./PortalContext";
import usePortalProgress from "./usePortalProgress";

export default function QuantumPortal() {
  usePortalProgress();

  const { progress } = usePortal();

  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2"
      animate={{
        opacity: progress,
        scale: 0.2 + progress * 3,
      }}
      transition={{
        duration: 0,
      }}
    >
      {/* ================= ENERGY LINES ================= */}

     <QuantumEnergyLines />
     <QuantumFlowParticles />
      {/* ================= OUTER GLOW ================= */}

      <motion.div
        className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-[55px]"
        animate={{
          opacity: 0.15 + progress * 0.65,
          scale: 1 + progress * 0.25,
        }}
        transition={{
          duration: 0.2,
        }}
      />

      {/* ================= OUTER RING ================= */}

      <motion.div
        className="absolute inset-0 rounded-full border border-cyan-400/30"
        animate={{
          rotate: progress * 360,
          boxShadow: `0 0 ${
            15 + progress * 45
          }px rgba(34,211,238,${0.15 + progress * 0.35})`,
        }}
        transition={{
          duration: 0,
        }}
      />

      {/* ================= SECOND RING ================= */}

      <motion.div
        className="absolute inset-3 rounded-full border border-cyan-300/20"
        animate={{
          rotate: -progress * 540,
          scale: 1 + progress * 0.04,
        }}
        transition={{
          duration: 0,
        }}
      />

      {/* ================= INNER RING ================= */}

      <motion.div
        className="absolute inset-7 rounded-full border border-cyan-200/30"
        animate={{
          rotate: progress * 720,
          scale: 1 + progress * 0.08,
        }}
        transition={{
          duration: 0,
        }}
      />

      {/* ================= ENERGY GLOW ================= */}

      <motion.div
        className="absolute inset-8 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{
          opacity: 0.25 + progress * 0.65,
          scale: 0.9 + progress * 0.35,
        }}
        transition={{
          duration: 0.15,
        }}
      />

      {/* ================= QUANTUM CORE ================= */}

      <motion.div
        className="absolute inset-14 rounded-full bg-cyan-300/20 blur-2xl"
        animate={{
          scale: [
            1 + progress * 0.35,
            1.08 + progress * 0.5,
            1 + progress * 0.35,
          ],
          opacity: [
            0.45 + progress * 0.3,
            0.75 + progress * 0.25,
            0.45 + progress * 0.3,
          ],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================= CENTER LIGHT ================= */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-xl"
        animate={{
          opacity: 0.15 + progress * 0.85,
          scale: [
            0.7 + progress,
            1 + progress * 1.3,
            0.7 + progress,
          ],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}