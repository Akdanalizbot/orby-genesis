import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />

        <div className="absolute -right-32 top-20 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050816_90%)]" />

      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-16 px-6 py-24 lg:flex-row">

        {/* LEFT */}

        <div className="max-w-2xl text-center lg:text-left">

          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-2 backdrop-blur-xl">

            <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">
              Born on Robinhood Chain
            </p>

          </div>

          <className="mt-8 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-6xl font-black tracking-tight text-transparent sm:text-7xl md:text-9xl">
            ORBY
          </h1>

          <className="mt-8 text-3xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            The First Explorer
            <br />
            Of Robinhood Chain
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">
            Building a community-driven universe for the next generation of
            Web3.

            <br />
            <br />

            More than a token.

            <br />

            A story.

            <br />

            A character.

            <br />

            A universe.

          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">

            <Link
              href="#"
              className="rounded-full bg-cyan-400 px-10 py-4 text-center font-bold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,.45)]"
            >
              Launch App
            </Link>

            <Link
              href="/whitepaper"
              className="rounded-full border border-white/15 bg-white/5 px-10 py-4 text-center font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              Read Genesis Paper
            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex items-center justify-center">
          <div className="absolute h-[420px] w-[420px] animate-pulse rounded-full bg-violet-500/20 blur-3xl" />

          <div className="absolute h-[320px] w-[320px] rounded-full border border-cyan-400/20" />

          <div className="relative flex h-[380px] w-[380px] items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 backdrop-blur-xl shadow-[0_0_80px_rgba(139,92,246,.35)]">

            {/* ORBY Placeholder */}

            <div className="text-center">

              <div className="animate-bounce text-8xl">
                ✨
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                ORBY
              </h3>

              <p className="mt-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
                The First Explorer
              </p>

              <p className="mt-4 text-gray-400">
                Mascot Coming Soon
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}