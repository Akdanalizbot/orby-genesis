"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language/LanguageContext";

const nodes = [
  { left: "12%", top: "35%", delay: 0 },
  { left: "24%", top: "62%", delay: 0.4 },
  { left: "37%", top: "25%", delay: 0.8 },
  { left: "50%", top: "52%", delay: 1.2 },
  { left: "63%", top: "30%", delay: 1.6 },
  { left: "76%", top: "64%", delay: 2 },
  { left: "88%", top: "38%", delay: 2.4 },
];

export default function Community() {
  const { language } = useLanguage();

  return (
    <section
      id="community"
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-black
        px-6
        py-32
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-black" />

      {/* Cyan Atmosphere */}

      <div
        className="
          absolute
          left-1/2
          top-[45%]
          h-[850px]
          w-[850px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/[0.08]
          blur-[230px]
        "
      />

      {/* Violet Depth */}

      <div
        className="
          absolute
          left-1/2
          top-[80%]
          h-[600px]
          w-[1000px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/[0.08]
          blur-[250px]
        "
      />

      {/* ================= COMMUNITY NETWORK ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[34%]
          h-[300px]
          w-full
          max-w-5xl
          -translate-x-1/2
          -translate-y-1/2
          opacity-70
        "
      >
        {/* Horizontal Signal */}

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
            duration: 2.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            left-[10%]
            right-[10%]
            top-1/2
            h-px
            origin-center
            bg-gradient-to-r
            from-transparent
            via-cyan-300/20
            to-transparent
          "
        />

        {/* Nodes */}

        {nodes.map((node, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: node.left,
              top: node.top,
            }}
          >
            {/* Pulse */}

            <motion.div
              className="
                absolute
                left-1/2
                top-1/2
                h-12
                w-12
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-cyan-300/20
              "
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0.4, 1.4, 2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: node.delay,
                ease: "easeOut",
              }}
            />

            {/* Glow */}

            <motion.div
              className="
                absolute
                left-1/2
                top-1/2
                h-10
                w-10
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-300/10
                blur-xl
              "
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.4, 0.8],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: node.delay,
                ease: "easeInOut",
              }}
            />

            {/* Core */}

            <motion.div
              className="
                relative
                h-2
                w-2
                rounded-full
                bg-cyan-100
                shadow-[0_0_18px_rgba(103,232,249,.9)]
              "
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.25, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: node.delay,
                ease: "easeInOut",
              }}
            />
          </div>
        ))}

        {/* Central Node */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              h-32
              w-32
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-300/10
              blur-3xl
            "
            animate={{
              opacity: [0.25, 0.7, 0.25],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="
              relative
              h-4
              w-4
              rounded-full
              bg-white
              shadow-[0_0_35px_rgba(103,232,249,1)]
            "
            animate={{
              opacity: [0.7, 1, 0.7],
              scale: [0.9, 1.35, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-[250px]
          max-w-5xl
          text-center
        "
      >
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
          MORDYZ // COMMUNITY
        </motion.p>

        {/* Main Title */}

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
            tracking-[-0.05em]
            text-white
            md:text-7xl
          "
        >
          {language === "en"
            ? "THE UNIVERSE"
            : "EVREN"}

          <span className="block text-cyan-300">
            {language === "en"
              ? "GROWS WITH YOU."
              : "SENİNLE BÜYÜR."}
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
              MORDYZ is not built for an audience.
              It is built with a community.
              Every voice, every idea and every explorer
              becomes part of the universe as it evolves.
            </>
          ) : (
            <>
              MORDYZ bir izleyici kitlesi için inşa edilmez.
              Bir toplulukla birlikte inşa edilir.
              Her ses, her fikir ve her kaşif,
              evren geliştikçe onun bir parçası olur.
            </>
          )}
        </motion.p>

        {/* ================= PRINCIPLES ================= */}

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
          {/* CONNECT */}

          <div
            className="
              rounded-2xl
              border
              border-white/5
              bg-white/[0.02]
              px-6
              py-6
              backdrop-blur-xl
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-cyan-300/60
              "
            >
              {language === "en"
                ? "CONNECT"
                : "BAĞLAN"}
            </p>
          </div>

          {/* CONTRIBUTE */}

          <div
            className="
              rounded-2xl
              border
              border-white/5
              bg-white/[0.02]
              px-6
              py-6
              backdrop-blur-xl
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-cyan-300/60
              "
            >
              {language === "en"
                ? "CONTRIBUTE"
                : "KATKI SAĞLA"}
            </p>
          </div>

          {/* EVOLVE */}

          <div
            className="
              rounded-2xl
              border
              border-white/5
              bg-white/[0.02]
              px-6
              py-6
              backdrop-blur-xl
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-cyan-300/60
              "
            >
              {language === "en"
                ? "EVOLVE"
                : "BİRLİKTE EVRİL"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}