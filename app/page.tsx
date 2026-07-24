import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#060816] text-white">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center px-6">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#5b5cff33,transparent_60%)]"></div>

          <div className="relative z-10 mx-auto max-w-7xl text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-300">
              Born on Robinhood Chain
            </p>

            <h1 className="mb-6 text-6xl font-extrabold tracking-tight md:text-8xl">
              ORBY
            </h1>

            <h2 className="mx-auto mb-8 max-w-3xl text-2xl font-semibold text-gray-200 md:text-4xl">
              The Future Starts Here.
            </h2>

            <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-gray-400">
              ORBY is building an iconic community brand for the next generation
              of Web3.
              <br />
              More than a token.
              <br />
              A story. A character. A universe.
            </p>

            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href="#"
                className="rounded-full bg-cyan-400 px-8 py-4 text-lg font-semibold text-black transition hover:scale-105"
              >
                Launch App
              </Link>

              <Link
                href="#"
                className="rounded-full border border-white/20 px-8 py-4 text-lg font-semibold transition hover:bg-white/10"
              >
                Explore
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
