"use client";

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
      transition={{ duration: 0 }}
    >
      {/* Outer Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-cyan-400/20"
        animate={{
          rotate: progress * 360,
        }}
        transition={{
          duration: 0,
        }}
      />

      {/* Inner Ring */}
      <motion.div
        className="absolute inset-5 rounded-full border border-cyan-300/30"
        animate={{
          rotate: -progress * 720,
        }}
        transition={{
          duration: 0,
        }}
      />

      {/* Glow */}
      <div className="absolute inset-8 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Core */}
      <motion.div
        className="absolute inset-14 rounded-full bg-cyan-300/20 blur-2xl"
        animate={{
          scale: 1 + progress * 0.5,
        }}
        transition={{
          duration: 0,
        }}
      />
    </motion.div>
  );
}