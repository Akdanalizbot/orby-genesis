export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060816]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">

        <div>
          <h2 className="text-2xl font-bold text-white">
            ORBY
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Born on Robinhood Chain
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-cyan-400 transition">
            Story
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Universe
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Roadmap
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Community
          </a>
        </div>

        <div className="text-sm text-gray-500">
          © 2026 ORBY. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
