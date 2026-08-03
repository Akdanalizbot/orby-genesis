"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative min-h-screen w-full overflow-hidden bg-black px-6 py-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-black" />

      {/* Cyan Atmosphere */}
      <div
        className="
          absolute
          left-[20%]
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[220px]
        "
      />

      {/* Violet Atmosphere */}
      <div
        className="
          absolute
          right-[-15%]
          top-[55%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-violet-600/10
          blur-[240px]
        "
      />

      {/* ================= AMBIENT LINES ================= */}

      <motion.div
        className="
          absolute
          left-[10%]
          top-[25%]
          h-px
          w-[35%]
          bg-gradient-to-r
          from-transparent
          via-cyan-300/20
          to-transparent
        "
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          absolute
          bottom-[20%]
          right-[8%]
          h-px
          w-[30%]
          bg-gradient-to-r
          from-transparent
          via-violet-300/20
          to-transparent
        "
        animate={{
          opacity: [0.15, 0.5, 0.15],
          scaleX: [1, 0.8, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
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
          gap-16
          lg:grid-cols-[1.1fr_0.9fr]
        "
      >
        {/* =================================================
            LEFT — VISION
        ================================================= */}

        <div className="text-center lg:text-left">

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
            ORBYZ // VISION
          </motion.p>

          {/* Main Title */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 1.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              text-5xl
              font-semibold
              tracking-[-0.05em]
              text-white
              md:text-7xl
              xl:text-8xl
            "
          >
            BUILD THE

            <span className="block text-cyan-300">
              UNIVERSE.
            </span>

            <span className="block text-white/40">
              TOGETHER.
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
              my-9
              h-px
              w-40
              origin-center
              bg-gradient-to-r
              from-transparent
              via-cyan-300/70
              to-transparent
              lg:mx-0
              lg:origin-left
            "
          />

          {/* Vision Text */}

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
              lg:mx-0
            "
          >
            ORBYZ is built as a universe before it becomes
            an ecosystem. A world with identity, story and
            purpose — shaped over time by the community
            that enters it.
          </motion.p>
        </div>

        {/* =================================================
            RIGHT — VISION PRINCIPLES
        ================================================= */}

        <div className="relative mx-auto w-full max-w-xl">

          {/* Vertical Energy Line */}

          <motion.div
            initial={{
              scaleY: 0,
              opacity: 0,
            }}
            whileInView={{
              scaleY: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1.5,
              delay: 0.3,
            }}
            className="
              absolute
              bottom-0
              left-[7px]
              top-0
              hidden
              w-px
              origin-top
              bg-gradient-to-b
              from-cyan-300/50
              via-cyan-300/10
              to-transparent
              md:block
            "
          />

          <div className="space-y-6">

            {/* 01 — IDENTITY */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="
                relative
                rounded-2xl
                border
                border-white/5
                bg-white/[0.025]
                p-7
                backdrop-blur-xl
                md:ml-10
              "
            >
              <div
                className="
                  absolute
                  -left-[39px]
                  top-9
                  hidden
                  h-3
                  w-3
                  rounded-full
                  border
                  border-cyan-300/50
                  bg-black
                  shadow-[0_0_20px_rgba(103,232,249,.4)]
                  md:block
                "
              />

              <p className="mb-3 text-xs tracking-[0.35em] text-cyan-300/50">
                01 // IDENTITY
              </p>

              <h3 className="mb-3 text-xl font-medium text-white">
                A World With Its Own Identity
              </h3>

              <p className="text-sm leading-7 text-white/40">
                ORBYZ begins with a recognizable universe,
                visual language and story that can grow far
                beyond a single moment.
              </p>
            </motion.div>

            {/* 02 — COMMUNITY */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              className="
                relative
                rounded-2xl
                border
                border-white/5
                bg-white/[0.025]
                p-7
                backdrop-blur-xl
                md:ml-10
              "
            >
              <div
                className="
                  absolute
                  -left-[39px]
                  top-9
                  hidden
                  h-3
                  w-3
                  rounded-full
                  border
                  border-cyan-300/50
                  bg-black
                  shadow-[0_0_20px_rgba(103,232,249,.4)]
                  md:block
                "
              />

              <p className="mb-3 text-xs tracking-[0.35em] text-cyan-300/50">
                02 // COMMUNITY
              </p>

              <h3 className="mb-3 text-xl font-medium text-white">
                Built With Its Community
              </h3>

              <p className="text-sm leading-7 text-white/40">
                The community is not placed around ORBYZ.
                It becomes part of how the universe expands,
                evolves and finds its direction.
              </p>
            </motion.div>

            {/* 03 — EVOLUTION */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 1,
                delay: 0.6,
              }}
              className="
                relative
                rounded-2xl
                border
                border-white/5
                bg-white/[0.025]
                p-7
                backdrop-blur-xl
                md:ml-10
              "
            >
              <div
                className="
                  absolute
                  -left-[39px]
                  top-9
                  hidden
                  h-3
                  w-3
                  rounded-full
                  border
                  border-cyan-300/50
                  bg-black
                  shadow-[0_0_20px_rgba(103,232,249,.4)]
                  md:block
                "
              />

              <p className="mb-3 text-xs tracking-[0.35em] text-cyan-300/50">
                03 // EVOLUTION
              </p>

              <h3 className="mb-3 text-xl font-medium text-white">
                Designed To Evolve
              </h3>

              <p className="text-sm leading-7 text-white/40">
                Story, technology and community form the
                foundation. What ORBYZ becomes next is built
                from that foundation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}