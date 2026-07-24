"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] text-white">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed22,transparent_45%)]" />

        <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[160px]" />

      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 pt-32 pb-24 lg:flex-row">

        {/* LEFT */}

        <div className="flex-1 text-center lg:text-left">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">

              Born on Robinhood Chain

            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="mt-8 text-6xl font-black leading-none md:text-8xl"
          >
            ORBY

            <span className="orby-title block mt-2">
              GENESIS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:.35 }}
            className="mt-8 max-w-xl text-lg leading-8 text-zinc-300"
          >
            The beginning of a new digital universe powered by
            community, imagination and long-term vision.
          </motion.p>
                    <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#universe"
              className="orby-button rounded-xl px-8 py-4 text-center font-semibold"
            >
              Explore Universe
            </Link>

            <Link
              href="#vision"
              className="rounded-xl border border-cyan-400/30 px-8 py-4 text-center font-semibold transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              Read Vision
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="orby-card mt-12 flex max-w-md items-center gap-4 rounded-2xl p-5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-2xl">
              👾
            </div>

            <div>
              <h3 className="font-semibold">
                Meet Orbi
              </h3>

              <p className="mt-1 text-sm text-zinc-400">
                Your guide through the ORBY Universe. Built for explorers,
                creators and dreamers.
              </p>
            </div>
          </motion.div>

        </div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="relative flex flex-1 items-center justify-center"
        >
          <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-[120px]" />

          <motion.div
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <Image
              src="/images/orbi.png"
              alt="Orbi"
              width={520}
              height={520}
              priority
              className="drop-shadow-[0_0_60px_rgba(124,58,237,0.55)]"
            />
          </motion.div>
        </motion.div>
                {/* Bottom Cards */}

      </div>

      <div className="relative z-10 mx-auto mt-8 grid max-w-7xl gap-6 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-4">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="orby-card rounded-2xl p-6 text-center"
        >
          <div className="mb-4 text-4xl">🌌</div>

          <h3 className="text-xl font-bold">
            Community
          </h3>

          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Built together with a loyal community that believes in long-term
            growth.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .1 }}
          viewport={{ once: true }}
          className="orby-card rounded-2xl p-6 text-center"
        >
          <div className="mb-4 text-4xl">🚀</div>

          <h3 className="text-xl font-bold">
            Innovation
          </h3>

          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Creating a modern Web3 ecosystem instead of another ordinary token.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="orby-card rounded-2xl p-6 text-center"
        >
          <div className="mb-4 text-4xl">🤖</div>

          <h3 className="text-xl font-bold">
            AI Ready
          </h3>

          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Designed for future AI experiences and next generation utilities.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="orby-card rounded-2xl p-6 text-center"
        >
          <div className="mb-4 text-4xl">💎</div>

          <h3 className="text-xl font-bold">
            Long Term
          </h3>

          <p className="mt-3 text-sm leading-7 text-zinc-400">
            A brand focused on sustainability, trust and continuous evolution.
          </p>

        </motion.div>

      </div>
            {/* Bottom Fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050816] to-transparent" />

      {/* Floating Stars */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[8%] top-[18%] h-1.5 w-1.5 rounded-full bg-cyan-300 opacity-70 animate-pulse" />

        <div className="absolute right-[15%] top-[28%] h-2 w-2 rounded-full bg-purple-300 opacity-70 animate-pulse" />

        <div className="absolute left-[22%] bottom-[18%] h-1 w-1 rounded-full bg-white opacity-80 animate-pulse" />

        <div className="absolute right-[32%] bottom-[24%] h-1.5 w-1.5 rounded-full bg-cyan-200 opacity-60 animate-pulse" />

        <div className="absolute left-1/2 top-[12%] h-1 w-1 rounded-full bg-white opacity-70 animate-pulse" />

      </div>

    </section>
  );
}
