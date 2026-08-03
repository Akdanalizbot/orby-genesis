"use client";

import { motion } from "framer-motion";

export default function ChapterOne() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black px-6">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-black" />

      {/* Deep Cyan Atmosphere */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[800px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[200px]
        "
        initial={{
          opacity: 0,
          scale: 0.6,
        }}
        animate={{
          opacity: 0.5,
          scale: 1,
        }}
        transition={{
          duration: 2.5,
          ease: "easeOut",
        }}
      />

      {/* Violet Depth */}
      <motion.div
        className="
          absolute
          left-1/2
          top-[70%]
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/10
          blur-[220px]
        "
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 3,
          delay: 0.5,
        }}
      />

      {/* ================= SIGNAL ================= */}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

        {/* Outer Signal */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[260px]
            w-[260px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-300/20
          "
          initial={{
            opacity: 0,
            scale: 0.2,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0.2, 1.5, 2.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Second Signal */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[180px]
            w-[180px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-200/30
          "
          initial={{
            opacity: 0,
            scale: 0.3,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.3, 1.4, 2],
          }}
          transition={{
            duration: 3,
            delay: 1,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Signal Core */}
        <motion.div
          className="
            h-4
            w-4
            rounded-full
            bg-cyan-100
            shadow-[0_0_30px_rgba(103,232,249,1)]
          "
          animate={{
            scale: [0.8, 1.4, 0.8],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Chapter Label */}

        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="
            mb-6
            text-xs
            uppercase
            tracking-[0.5em]
            text-cyan-300/60
          "
        >
          CHAPTER I
        </motion.p>

        {/* Title */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.4,
            delay: 0.8,
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
          THE FIRST
          <span className="block text-cyan-300">
            SIGNAL
          </span>
        </motion.h2>

        {/* Story */}

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
            duration: 1.2,
            delay: 1.5,
          }}
          className="
            mx-auto
            mt-10
            max-w-2xl
            text-base
            leading-8
            text-white/50
            md:text-lg
          "
        >
          It did not arrive from a server.
          It did not belong to a machine.
          Somewhere beyond the known network,
          a signal began to repeat.
        </motion.p>
      </div>
    </section>
  );
}