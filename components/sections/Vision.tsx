import Link from "next/link";

export default function Vision() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-32">

      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.45em] text-cyan-300">
          The Future
        </span>

        <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
          Ready To Explore
          <br />
          The Future?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
          ORBY is more than a project.
          <br />
         It&apos;s a growing universe built by explorers,
          creators and believers.
          <br />
          Join us and help shape the future.
        </p>

        <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">

          <Link
            href="#"
            className="rounded-full bg-cyan-400 px-10 py-4 font-bold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,.45)]"
          >
            Join Community
          </Link>

          <Link
            href="#"
            className="rounded-full border border-white/15 bg-white/5 px-10 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            Read Whitepaper
          </Link>

        </div>

      </div>

    </section>
  );
}
