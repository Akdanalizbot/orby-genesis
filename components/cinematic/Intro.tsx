"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Glow */}
          <motion.div
            className="absolute h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.4, 1.8, 3],
            }}
            transition={{
              duration: 2.6,
              ease: "easeOut",
            }}
          />

          {/* Shockwave */}
          <motion.div
            className="absolute h-4 w-4 rounded-full border border-cyan-300"
            initial={{
              scale: 1,
              opacity: 0,
            }}
            animate={{
              scale: [1, 10],
              opacity: [0.7, 0],
            }}
            transition={{
              duration: 2.2,
              ease: "easeOut",
            }}
          />

          {/* Energy Core */}
          <motion.div
            className="h-4 w-4 rounded-full bg-cyan-400"
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 4, 10],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.5,
              ease: "easeOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}