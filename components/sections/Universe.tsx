"use client";

import { motion } from "framer-motion";

export default function Universe() {
  return (
    <section
      id="universe"
      className="relative overflow-hidden bg-black py-28 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-400">
            The Universe
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Every Chapter
            <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Expands The Story
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            ORBY Genesis is the beginning of a universe that grows with every
            builder, every holder and every milestone reached together.
          </p>
        </motion.div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8"
          >
            <div className="mb-5 text-5xl">🌌</div>

            <h3 className="mb-4 text-2xl font-bold">
              Infinite Expansion
            </h3>

            <p className="leading-8 text-zinc-400">
              Every new feature, partnership and milestone becomes another
              chapter in the ORBY universe. Growth is continuous—not temporary.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8"
          >
            <div className="mb-5 text-5xl">🛰️</div>

            <h3 className="mb-4 text-2xl font-bold">
              Connected Ecosystem
            </h3>

            <p className="leading-8 text-zinc-400">
              Applications, creators and community members are connected under
              one vision, building a living ecosystem instead of isolated
              products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8"
          >
            <div className="mb-5 text-5xl">🚀</div>

            <h3 className="mb-4 text-2xl font-bold">
              Future Without Limits
            </h3>

            <p className="leading-8 text-zinc-400">
              ORBY Genesis is designed to evolve beyond today&apos;s expectations,   
              unlocking new experiences, technologies, and opportunities for
              every generation of the community.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-24 rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-950/30 via-zinc-950 to-red-950/30 p-12 text-center"
        >
          <h3 className="text-3xl font-black">
            One Vision.
            <span className="block text-red-400">
              Infinite Possibilities.
            </span>
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            The future of ORBY is not defined by a single launch. It is shaped
            by every person who joins the journey and helps write the next
            chapter of the universe.
          </p>
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />
    </section>
  );
}