"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language/LanguageContext";

export default function Universe() {
  const { language } = useLanguage();

  return (
    <section
      id="universe"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-6 py-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-black" />

      {/* Central Atmosphere */}
      <div
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
          blur-[220px]
        "
      />

      {/* Violet Depth */}
      <div
        className="
          absolute
          left-1/2
          top-[70%]
          h-[500px]
          w-[1000px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/10
          blur-[240px]
        "
      />

      {/* ================= ORBIT SYSTEM ================= */}

      <div
        className="
          absolute
          left-1/2
          top-[32%]
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        {/* Outer Orbit */}
        <motion.div
          className="
            absolute
            inset-0
            rounded-full
            border
            border-cyan-300/10
          "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="
              absolute
              left-1/2
              top-[-4px]
              h-2
              w-2
              -translate-x-1/2
              rounded-full
              bg-cyan-200
              shadow-[0_0_18px_rgba(103,232,249,.9)]
            "
          />
        </motion.div>

        {/* Middle Orbit */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[220px]
            w-[220px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-violet-300/10
          "
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="
              absolute
              right-[20px]
              top-[30px]
              h-1.5
              w-1.5
              rounded-full
              bg-violet-200
              shadow-[0_0_15px_rgba(196,181,253,.8)]
            "
          />
        </motion.div>

        {/* Inner Orbit */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[130px]
            w-[130px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-200/15
          "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Core Glow */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-28
            w-28
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-300/10
            blur-3xl
          "
          animate={{
            opacity: [0.25, 0.7, 0.25],
            scale: [0.85, 1.3, 0.85],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Universe Core */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-4
            w-4
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-100
            shadow-[0_0_35px_rgba(103,232,249,1)]
          "
          animate={{
            scale: [0.9, 1.3, 0.9],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto mt-[250px] max-w-5xl text-center">

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
            mb-6
            text-xs
            font-medium
            uppercase
            tracking-[0.5em]
            text-cyan-300/60
          "
        >
          MORDYZ // UNIVERSE
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
            amount: 0.4,
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
            ? "A WORLD BEYOND"
            : "ZİNCİRİN ÖTESİNDE"}

          <span className="block text-cyan-300">
            {language === "en"
              ? "THE CHAIN."
              : "BİR DÜNYA."}
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
            w-40
            bg-gradient-to-r
            from-transparent
            via-cyan-300/70
            to-transparent
          "
        />

        {/* Description */}
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
            max-w-3xl
            text-base
            leading-8
            text-white/50
            md:text-lg
          "
        >
          {language === "en" ? (
            <>
              MORDYZ is more than a signal, a character,
              or a point on a network. It is a growing digital
              universe shaped by story, community and
              the worlds that emerge between them.
            </>
          ) : (
            <>
              MORDYZ bir sinyalden, bir karakterden veya
              bir ağ üzerindeki noktadan daha fazlasıdır.
              Hikâye, topluluk ve onların arasında doğan
              dünyalarla şekillenen, büyüyen dijital bir evrendir.
            </>
          )}
        </motion.p>

        {/* Three Principles */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.2,
            delay: 0.5,
          }}
          className="
            mx-auto
            mt-12
            grid
            max-w-3xl
            grid-cols-1
            gap-4
            md:grid-cols-3
          "
        >
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-5">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/60">
              {language === "en" ? "STORY" : "HİKÂYE"}
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-5">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/60">
              {language === "en" ? "COMMUNITY" : "TOPLULUK"}
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-5">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/60">
              {language === "en" ? "EVOLUTION" : "EVRİM"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}