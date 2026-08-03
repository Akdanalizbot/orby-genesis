"use client";

import { motion } from "framer-motion";
import OrbiScene from "@/components/orb/OrbiScene";

export default function Orbi() {
  return (
    <section
      id="orbi"
      className="relative min-h-screen w-full overflow-hidden bg-black px-6 py-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-black" />

      {/* Cyan Atmosphere */}
      <div
        className="
          absolute
          left-[25%]
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[200px]
        "
      />

      {/* Violet Depth */}
      <div
        className="
          absolute
          right-[-10%]
          top-[55%]
          h-[600px]
          w-[700px]
          rounded-full
          bg-violet-600/10
          blur-[220px]
        "
      />

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[calc(100vh-12rem)]
          max-w-7xl
          items-center
          gap-12
          lg:grid-cols-2
        "
      >
        {/* =================================================
            ORBI VISUAL
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            order-2
            flex
            h-[320px]
            items-center
            justify-center
            lg:order-1
            lg:h-[520px]
          "
        >
          {/* Outer Glow */}
          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              h-[280px]
              w-[280px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-300/10
              blur-[80px]
              lg:h-[420px]
              lg:w-[420px]
            "
            animate={{
              opacity: [0.25, 0.55, 0.25],
              scale: [0.9, 1.08, 0.9],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Signal Ring */}
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
              border-cyan-300/10
              lg:h-[360px]
              lg:w-[360px]
            "
            animate={{
              opacity: [0.15, 0.5, 0.15],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* ORBI 3D */}
          <div
            className="
              relative
              z-10
              h-[260px]
              w-full
              max-w-[620px]
              lg:h-[420px]
            "
          >
            <OrbiScene scale={0.65} />
          </div>
        </motion.div>

        {/* =================================================
            STORY
        ================================================= */}

        <div
          className="
            order-1
            text-center
            lg:order-2
            lg:text-left
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
            ORBI // THE OBSERVER
          </motion.p>

          {/* Main Title */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
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
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              text-5xl
              font-semibold
              tracking-[-0.04em]
              text-white
              md:text-6xl
              lg:text-7xl
            "
          >
            IT HEARD

            <span className="block text-cyan-300">
              THE SIGNAL.
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
              duration: 1.1,
              delay: 0.25,
            }}
            className="
              mx-auto
              my-8
              h-px
              w-32
              origin-center
              bg-gradient-to-r
              from-transparent
              via-cyan-300/70
              to-transparent
              lg:mx-0
              lg:origin-left
            "
          />

          {/* Story Text */}

          <motion.div
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
              delay: 0.35,
            }}
            className="
              mx-auto
              max-w-xl
              space-y-2
              text-base
              leading-8
              text-white/50
              md:text-lg
              lg:mx-0
            "
          >
            <p>Not as data.</p>

            <p>Not as code.</p>

            <p className="text-white/75">
              But as something familiar.
            </p>
          </motion.div>

          {/* Secondary Lore */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.5,
              delay: 0.7,
            }}
            className="
              mx-auto
              mt-8
              max-w-xl
              text-sm
              leading-7
              text-white/30
              lg:mx-0
            "
          >
            Across the silence, ORBI listened.
            The signal repeated.
            And with every pulse, the distance
            between observer and origin began to disappear.
          </motion.p>
        </div>
      </div>
    </section>
  );
}