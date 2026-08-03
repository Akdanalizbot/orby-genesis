"use client";

import { motion } from "framer-motion";

export default function Genesis() {
  return (
    <section
      id="genesis"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black px-6"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-black" />

      {/* Central Quantum Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      {/* Violet Depth */}
      <div
        className="
          absolute
          left-1/2
          top-[60%]
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/10
          blur-[200px]
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Small Label */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mb-6
            text-xs
            font-medium
            uppercase
            tracking-[0.5em]
            text-cyan-300/70
          "
        >
          ORBYZ // GENESIS
        </motion.p>

        {/* Main Title */}

        <motion.h2
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            text-5xl
            font-semibold
            tracking-[-0.04em]
            text-white
            md:text-7xl
          "
        >
          The Beginning
          <span className="block text-cyan-300">
            Was Not Human.
          </span>
        </motion.h2>

        {/* Quantum Divider */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.7,
          }}
          className="
            mx-auto
            my-10
            h-px
            w-40
            bg-gradient-to-r
            from-transparent
            via-cyan-300
            to-transparent
          "
        />

        {/* Intro Text */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.9,
          }}
          className="
            mx-auto
            max-w-2xl
            text-base
            leading-8
            text-white/50
            md:text-lg
          "
        >
          Before the network. Before the chain.
          Before the first signal was ever detected,
          something was already awake.
        </motion.p>
      </div>
    </section>
  );
}