"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language/LanguageContext";

export default function Story() {
  const { language } = useLanguage();

  return (
    <section
      id="story"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-6 py-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-black" />

      {/* Cyan Atmosphere */}
      <div
        className="
          absolute
          left-1/2
          top-[45%]
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[190px]
        "
      />

      {/* Violet Depth */}
      <div
        className="
          absolute
          left-1/2
          top-[75%]
          h-[450px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/10
          blur-[220px]
        "
      />

      {/* ================= SIGNAL ================= */}

      <div
        className="
          absolute
          left-1/2
          top-[27%]
          z-10
          h-[200px]
          w-[200px]
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        {/* Ring 1 */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[80px]
            w-[80px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-200/40
          "
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.4, 1.5, 2.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Ring 2 */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[80px]
            w-[80px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-300/30
          "
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0.4, 1.5, 2.5],
          }}
          transition={{
            duration: 3,
            delay: 1,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Ring 3 */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[80px]
            w-[80px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-300/20
          "
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.4, 1.5, 2.5],
          }}
          transition={{
            duration: 3,
            delay: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Core Glow */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-20
            w-20
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-300/10
            blur-2xl
          "
          animate={{
            opacity: [0.25, 0.8, 0.25],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Core */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-3
            w-3
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-100
            shadow-[0_0_30px_rgba(103,232,249,1)]
          "
          animate={{
            scale: [0.8, 1.5, 0.8],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-20 mx-auto mt-[180px] max-w-4xl text-center">

        {/* Label */}
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mb-5
            text-xs
            uppercase
            tracking-[0.5em]
            text-cyan-300/60
          "
        >
          ORBYZ // ORIGIN
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 1.2,
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
          {language === "en"
            ? "THE FIRST"
            : "İLK"}

          <span className="block text-cyan-300">
            {language === "en"
              ? "SIGNAL"
              : "SİNYAL"}
          </span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            delay: 0.2,
          }}
          className="
            mx-auto
            my-8
            h-px
            w-32
            bg-gradient-to-r
            from-transparent
            via-cyan-300/70
            to-transparent
          "
        />

        {/* Story */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 1.2,
            delay: 0.3,
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
          {language === "en" ? (
            <>
              It did not arrive from a server.
              It did not belong to a machine.
              Somewhere beyond the known network,
              a signal began to repeat.
            </>
          ) : (
            <>
              Bir sunucudan gelmedi.
              Bir makineye ait değildi.
              Bilinen ağın ötesinde bir yerde,
              bir sinyal tekrarlanmaya başladı.
            </>
          )}
        </motion.p>
      </div>
    </section>
  );
}