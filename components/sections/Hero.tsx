import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6">

      {/* Stars */}
      <div className="absolute inset-0">

        <div className="absolute left-[10%] top-[18%] h-1 w-1 animate-pulse rounded-full bg-white"></div>
        <div className="absolute left-[25%] top-[32%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300"></div>
        <div className="absolute left-[82%] top-[22%] h-1 w-1 animate-pulse rounded-full bg-white"></div>
        <div className="absolute left-[70%] top-[65%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-200"></div>
        <div className="absolute left-[18%] top-[72%] h-1 w-1 animate-pulse rounded-full bg-white"></div>
        <div className="absolute left-[55%] top-[12%] h-1 w-1 animate-pulse rounded-full bg-white"></div>
        <div className="absolute left-[90%] top-[78%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300"></div>

      </div>

      {/* Glow Effects */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="absolute -left-20 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl"></div>

      <div className="absolute -right-20 top-24 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-3xl"></div>

      {/* Grid */}

      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">

        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-2 backdrop-blur-xl">

          <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">
            Born on Robinhood Chain
          </p>

        </div>

        <h1 className="mt-8 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-7xl font-black tracking-tight text-transparent md:text-9xl">

          ORBY

        </h1>

        <h2 className="mt-8 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">

          The First Explorer
          <br />
          Of Robinhood Chain

        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-9 text-gray-400">

          Building a community-driven universe
          for the next generation of Web3.

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

        <div className="mt-14 flex flex-col gap-5 sm:flex-row">

          <Link
            href="#"
            className="rounded-full bg-cyan-400 px-10 py-4 font-bold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,.45)]"
          >
            Launch App
          </Link>

          <Link
            href="#"
            className="rounded-full border border-white/15 bg-white/5 px-10 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            Explore Universe
          </Link>

        </div>

        <div className="mt-24 flex flex-col items-center">

          <span className="mb-2 text-xs uppercase tracking-[0.35em] text-gray-500">
            Scroll
          </span>

          <div className="animate-bounce text-3xl text-cyan-300">
            ↓
          </div>

        </div>

      </div>

    </section>
  );
}
