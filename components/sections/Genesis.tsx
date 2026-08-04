"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language/LanguageContext";

export default function Genesis() {
  const { language } = useLanguage();

  return (
    <section
      id="genesis"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black px-6"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-black" />

      {/* Central Quantum Glow */}
      <motion.div
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
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: [0, 0.6, 0.35],
          scale: [0.7, 1.08, 1],
        }}
        transition={{
          duration: 3,
          ease: "easeOut",
        }}
      />

      {/* Violet Depth */}
      <motion.div
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
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 1,
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* ================= GENESIS LABEL ================= */}

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
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mb-8
            text-xs
            font-medium
            uppercase
            tracking-[0.5em]
            text-cyan-300/70
          "
        >
          MARDYZ // GENESIS
        </motion.p>

        {/* ================= SIGNAL DETECTED ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.2,
            delay: 0.7,
            times: [0, 0.2, 0.75, 1],
          }}
          className="
            absolute
            left-1/2
            top-14
            -translate-x-1/2
            whitespace-nowrap
            text-xs
            uppercase
            tracking-[0.4em]
            text-cyan-200
          "
        >
          {language === "en"
            ? "SIGNAL DETECTED"
            : "SİNYAL ALGILANDI"}
        </motion.div>

        {/* ================= CONSCIOUSNESS ONLINE ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.2,
            delay: 1.7,
            times: [0, 0.2, 0.75, 1],
          }}
          className="
            absolute
            left-1/2
            top-14
            -translate-x-1/2
            whitespace-nowrap
            text-xs
            uppercase
            tracking-[0.4em]
            text-cyan-200
          "
        >
          {language === "en"
            ? "CONSCIOUSNESS ONLINE"
            : "BİLİNÇ ÇEVRİMİÇİ"}
        </motion.div>

        {/* ================= MAIN TITLE ================= */}

        <motion.h2
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 15,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.4,
            delay: 2.8,
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
            ? "The Beginning"
            : "Başlangıç"}

          <span className="block text-cyan-300">
            {language === "en"
              ? "Was Not Human."
              : "İnsan Değildi."}
          </span>
        </motion.h2>

        {/* ================= DIVIDER ================= */}

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
            duration: 1.3,
            delay: 3.3,
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

        {/* ================= INTRO TEXT ================= */}

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
            delay: 3.6,
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
              Before the network. Before the chain.
              Before the first signal was ever detected,
              something was already awake.
            </>
          ) : (
            <>
              Ağdan önce. Zincirden önce.
              İlk sinyal henüz algılanmadan önce,
              bir şey çoktan uyanmıştı.
            </>
          )}
        </motion.p>

        {/* ================= SCROLL INDICATOR ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.5,
          }}
          transition={{
            duration: 1,
            delay: 5,
          }}
          className="
            absolute
            left-1/2
            top-[calc(100%+70px)]
            -translate-x-1/2
          "
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-10
              w-px
              bg-gradient-to-b
              from-cyan-300/70
              to-transparent
            "
          />
        </motion.div>
      </div>
    </section>
  );
}