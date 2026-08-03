"use client";

import { motion } from "framer-motion";
import { usePortal } from "./PortalContext";

export default function GenesisTransition() {
  const { progress } = usePortal();

  // Geçiş portalın son %15'inde başlasın
  const transitionProgress = Math.max(
    0,
    Math.min(1, (progress - 0.85) / 0.15)
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden">
      {/* ================= QUANTUM FLASH ================= */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100 blur-[60px]"
        animate={{
          opacity: transitionProgress,
          scale: 1 + transitionProgress * 12,
        }}
        transition={{
          duration: 0.1,
        }}
      />

      {/* ================= WHITE CORE FLASH ================= */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-2xl"
        animate={{
          opacity: transitionProgress,
          scale: 1 + transitionProgress * 18,
        }}
        transition={{
          duration: 0.1,
        }}
      />

      {/* ================= SCREEN WASH ================= */}

      <motion.div
        className="absolute inset-0 bg-cyan-50"
        animate={{
          opacity: transitionProgress * 0.85,
        }}
        transition={{
          duration: 0.1,
        }}
      />

      {/* ================= FINAL DARKNESS ================= */}

      <motion.div
        className="absolute inset-0 bg-black"
        animate={{
          opacity:
            transitionProgress > 0.75
              ? (transitionProgress - 0.75) / 0.25
              : 0,
        }}
        transition={{
          duration: 0.1,
        }}
      />
    </div>
  );
}