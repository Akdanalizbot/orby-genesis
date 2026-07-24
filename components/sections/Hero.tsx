import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">

        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.4em] text-cyan-300 backdrop-blur-md">
          Born on Robinhood Chain
        </span>

        <h1 className="mt-8 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-7xl font-black tracking-tight text-transparent md:text-9xl">
          ORBY
        </h1>

        <h2 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-white md:text-6xl">
          The First Explorer
          <br />
          Of Robinhood Chain
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-400">
          More than a token.
          <br />
          A story.
          <br />
          A character.
          <br />
          A universe.
        </p>

        <div className="mt-14 flex flex-col gap-5 sm:flex-row">

          <Link
            href="#"
            className="rounded-full bg-cyan-400 px-10 py-4 text-lg font-bold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,.5)]"
          >
            Launch App
          </Link>

          <Link
            href="#"
            className="rounded-full border border-white/20 bg-white/5 px-10 py-4 text-lg font-semibold backdrop-blur-xl transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            Explore Universe
          </Link>

        </div>

        <div className="mt-24 animate-bounce text-3xl text-cyan-300">
          ↓
        </div>

      </div>
    </section>
  );
}
