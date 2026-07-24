"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-black py-28 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-400">
            The Story Begins
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Every Universe
            <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Starts With A Purpose
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            ORBY Genesis was never meant to be another short-lived crypto
            project. It was created to become the foundation of a living Web3
            universe where loyalty, vision, and community shape everything that
            comes next.
          </p>
        </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-20 grid gap-8 md:grid-cols-3"
          >
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8">
              <div className="mb-5 text-4xl">🔥</div>

              <h3 className="mb-4 text-2xl font-bold">
                Loyalty
              </h3>

              <p className="leading-7 text-zinc-400">
                ORBY is built for those who stay through every chapter,
                believing that true value comes from patience and conviction.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8">
              <div className="mb-5 text-4xl">🌌</div>

              <h3 className="mb-4 text-2xl font-bold">
                Vision
              </h3>

              <p className="leading-7 text-zinc-400">
                Every release expands the universe, transforming a simple idea
                into an immersive Web3 experience with long-term direction.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8">
              <div className="mb-5 text-4xl">⚡</div>

              <h3 className="mb-4 text-2xl font-bold">
                Community
              </h3>

              <p className="leading-7 text-zinc-400">
                The strongest universes are not built by one creator.
                They are built by thousands of believers moving toward
                the same future.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-24 max-w-4xl rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-950/40 via-zinc-950 to-red-950/40 p-10 text-center"
          >
            <p className="text-lg leading-8 text-zinc-300">
              <span className="font-bold text-white">
                ORBY Genesis
              </span>{" "}
              is the first chapter of a much bigger story.
              The token is only the beginning.
              The universe is what gives it meaning.
            </p>
          </motion.div>
      </div>

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />
    </section>
  );
}