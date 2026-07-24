"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-zinc-950 py-28 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 uppercase tracking-[0.3em] text-red-400 text-sm">
            Our Vision
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Building More Than
            <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              A Blockchain Project
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            ORBY Genesis is designed as the starting point of a long-term
            ecosystem where technology, storytelling and community evolve
            together.
          </p>
        </motion.div>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-zinc-800 bg-black/60 p-10"
          >
            <h3 className="mb-6 text-3xl font-bold">
              The Mission
            </h3>

            <p className="leading-8 text-zinc-400">
              We believe the next generation of Web3 projects will be remembered
              not because of speculation, but because they create culture,
              identity, and a lasting community.
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              ORBY Genesis lays the foundation for an ecosystem where every
              chapter expands the universe instead of chasing short-term hype.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-950/30 via-zinc-950 to-black p-10"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🚀</div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Long-Term Growth
                  </h4>
                  <p className="mt-2 leading-7 text-zinc-400">
                    Sustainable development comes from continuous building,
                    meaningful products, and a loyal community—not temporary
                    trends.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">🌍</div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Global Community
                  </h4>

                  <p className="mt-2 leading-7 text-zinc-400">
                    ORBY aims to unite builders, creators, and supporters from
                    around the world into one connected ecosystem.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">✨</div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Endless Evolution
                  </h4>

                  <p className="mt-2 leading-7 text-zinc-400">
                    Genesis is only the first chapter. Every milestone expands
                    the universe with new experiences, technology, and
                    innovation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[650px] -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />
    </section>
  );
}