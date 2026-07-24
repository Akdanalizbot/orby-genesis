"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#050816] pt-32"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[170px]" />

        <div className="absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row">

        {/* LEFT */}

        <div className="flex-1 text-center lg:text-left">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300">
              🚀 Born on Robinhood Chain
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-10 text-7xl font-black leading-[0.9] md:text-[110px]"
          >
            ORBY

            <span className="block bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              GENESIS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-xl text-xl leading-9 text-zinc-300"
          >
            More than a token.
            <br />
            A living universe powered by community,
            imagination and long-term vision.
          </motion.p>
                    <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-12 flex flex-col gap-5 sm:flex-row"
          >
            <Link
              href="#universe"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">
                Explore Universe →
              </span>

              <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
            </Link>

            <Link
              href="#vision"
              className="rounded-2xl border border-cyan-400/30 px-8 py-4 font-semibold transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:scale-105"
            >
              Read Vision
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="orby-card mt-12 max-w-lg rounded-3xl p-6"
          >
            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-3xl">
                👾
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Meet Orbi
                </h3>

                <p className="mt-2 leading-7 text-zinc-400">
                  The first cosmic guardian of the ORBY Universe.
                  Built to guide explorers into a new digital future.
                </p>
              </div>

            </div>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-zinc-400">

            <div>
              <span className="text-2xl font-black text-cyan-300">
                Web3
              </span>

              <p>Ecosystem</p>
            </div>

            <div>
              <span className="text-2xl font-black text-purple-300">
                AI
              </span>

              <p>Future Ready</p>
            </div>

            <div>
              <span className="text-2xl font-black text-cyan-300">
                ∞
              </span>

              <p>Long Vision</p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative flex flex-1 items-center justify-center"
        >
                  {/* Glow */}

          <div className="absolute h-[650px] w-[650px] rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/25 to-pink-500/20 blur-[140px]" />

          {/* Rings */}

          <div className="absolute h-[540px] w-[540px] rounded-full border border-cyan-400/20" />

          <div className="absolute h-[420px] w-[420px] rounded-full border border-purple-400/20" />

          {/* ORBI */}

          <motion.div
            animate={{
              y: [0, -18, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20"
          >
            <Image
              src="/images/orbi.webp"
              alt="Orbi"
              width={650}
              height={650}
              priority
              className="drop-shadow-[0_0_80px_rgba(124,58,237,0.65)]"
            />
          </motion.div>

          {/* Community Card */}

          <div className="orby-card absolute left-0 top-10 rounded-2xl px-5 py-4 backdrop-blur-xl">

            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
              Community
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              100%
            </h3>

          </div>

          {/* Vision Card */}

          <div className="orby-card absolute right-0 top-40 rounded-2xl px-5 py-4 backdrop-blur-xl">

            <p className="text-xs uppercase tracking-[0.25em] text-purple-300">
              Vision
            </p>

            <h3 className="mt-2 text-xl font-bold">
              Long Term
            </h3>

          </div>

          {/* Powered By */}

          <div className="orby-card absolute bottom-10 left-10 rounded-2xl px-5 py-4 backdrop-blur-xl">

            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
              Powered By
            </p>

            <h3 className="mt-2 text-xl font-bold">
              Robinhood Chain
            </h3>

          </div>

        </motion.div>

      </div>
            {/* Bottom Feature Cards */}

      <div className="relative z-10 mx-auto mt-12 grid max-w-7xl gap-6 px-6 pb-24 sm:grid-cols-2 xl:grid-cols-4">

        {[
          {
            icon: "🌌",
            title: "Community",
            text: "A loyal community building ORBY together.",
          },
          {
            icon: "🚀",
            title: "Innovation",
            text: "Designed as a Web3 brand, not just another token.",
          },
          {
            icon: "🤖",
            title: "AI Future",
            text: "Ready for intelligent tools and next-generation utilities.",
          },
          {
            icon: "💎",
            title: "Long Vision",
            text: "Built patiently with sustainable long-term growth.",
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            className="group orby-card rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
          >
            <div className="mb-5 text-5xl transition-transform duration-500 group-hover:scale-110">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              {item.text}
            </p>
          </motion.div>
        ))}

      </div>

      {/* Bottom Glow */}

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/15 to-pink-500/10 blur-[150px]" />

      {/* Fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050816] to-transparent" />
          </section>
  );
}
