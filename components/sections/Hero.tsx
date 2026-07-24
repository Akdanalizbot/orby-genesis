"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm tracking-[0.25em] uppercase text-cyan-300"
        >
          Born on Robinhood Chain
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-5xl font-black leading-tight md:text-7xl"
        >
          ORBY
          <span className="block orby-title">
            Genesis
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl"
        >
          A story-driven Web3 universe built around loyalty, purpose,
          and community. More than a token.
          <span className="text-white font-semibold">
            {" "}A movement begins.
          </span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-12 flex flex-col gap-5 sm:flex-row"
        >
          <Link
            href="#vision"
            className="orby-button rounded-xl px-8 py-4 font-semibold text-white"
          >
            Explore Vision
          </Link>

          <Link
            href="#roadmap"
            className="rounded-xl border border-zinc-700 px-8 py-4 font-semibold transition hover:border-cyan-400 hover:bg-zinc-900"
          >
            View Roadmap
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-4"
        >
          <div className="rounded-2xl orby-card p-6">
            <h3 className="text-3xl font-black text-red-400">∞</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Long-Term Vision
            </p>
          </div>

          <div className="rounded-2xl orby-card p-6">
            <h3 className="text-3xl font-black text-red-400">100%</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Community Driven
            </p>
          </div>
          <div className="rounded-2xl orby-card p-6">
            <h3 className="text-3xl font-black text-red-400">Web3</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Story Universe
            </p>
          </div>

          <div className="rounded-2xl orby-card p-6">
            <h3 className="text-3xl font-black text-red-400">2026</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Genesis Begins
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </motion.div>
      </div>
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}