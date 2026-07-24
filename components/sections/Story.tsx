export default function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#040712] px-6 py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.45em] text-cyan-300">
            Chapter I
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            The Story Begins
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-400">
            Every universe has an origin.
            <br />
            Every legend has a first step.
          </p>

        </div>

        {/* Timeline */}

        <div className="mt-24 space-y-12">

          {/* Card 1 */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-300">
              Chapter I
            </p>

            <h3 className="mb-6 text-3xl font-bold text-white">
              The Beginning
            </h3>

            <p className="text-lg leading-9 text-gray-400">
              In a universe where every blockchain looked the same,
              one explorer searched for something different.
              Not another hype.
              Not another short-lived trend.
              Something built to last.
            </p>

          </div>

          {/* Card 2 */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-300">
              Chapter II
            </p>

            <h3 className="mb-6 text-3xl font-bold text-white">
              The Discovery
            </h3>

            <p className="text-lg leading-9 text-gray-400">
              That journey led to Robinhood Chain.
              A place full of possibilities,
              waiting for builders, dreamers and pioneers
              to create something extraordinary together.
            </p>

          </div>

          {/* Card 3 */}

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-10 backdrop-blur-xl">

            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-300">
              Chapter III
            </p>

            <h3 className="mb-6 text-3xl font-bold text-white">
              The Genesis
            </h3>

            <p className="text-lg leading-9 text-gray-300">
              ORBY wasn&apos;t created to chase trends.
              <br />
              It was created to build a community.
              <br />
              A story people can belong to.
              <br />
              A universe that continues to grow with every new explorer.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
