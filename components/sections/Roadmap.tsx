"use client";

import { motion } from "framer-motion";

const roadmap = [
  {
    phase: "Phase 01",
    title: "Genesis",
    description:
      "Launch the ORBY Genesis brand, establish the foundation, and grow the first loyal community.",
  },
  {
    phase: "Phase 02",
    title: "Expansion",
    description:
      "Introduce ecosystem tools, partnerships, and community-driven initiatives.",
  },
  {
    phase: "Phase 03",
    title: "Universe",
    description:
      "Expand the ORBY universe with new experiences, products, and long-term utilities.",
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-zinc-950 py-28 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-400">
            Roadmap
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Building The
            <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Future Step By Step
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Every milestone brings ORBY Genesis closer to becoming a complete
            Web3 ecosystem.
          </p>
        </motion.div>

        <div className="mt-24 space-y-8">
          {roadmap.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              className="flex flex-col gap-6 rounded-3xl border border-zinc-800 bg-black/50 p-8 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-black">
                  {index + 1}
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-red-400">
                    {item.phase}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="max-w-2xl leading-8 text-zinc-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-24 rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-950/30 via-zinc-950 to-red-950/30 p-12 text-center"
        >
          <h3 className="text-3xl font-black">
            This Is Only
            <span className="block text-red-400">
              The Beginning
            </span>
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Our roadmap is not just a checklist. It represents a long-term
            commitment to building, innovating, and expanding the ORBY
            ecosystem together with the community.
          </p>
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />
    </section>
  );
}