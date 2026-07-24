export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/60 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-[0_0_30px_rgba(34,211,238,.35)]">
            <span className="text-lg font-black text-black">
              O
            </span>
          </div>

          <div>
            <h1 className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-xl font-black text-transparent">
              ORBY
            </h1>

            <p className="-mt-1 text-[11px] uppercase tracking-[0.25em] text-gray-500">
              Genesis
            </p>
          </div>

        </div>

        {/* Menu */}

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-300 md:flex">

          <a className="transition hover:text-cyan-300" href="#">
            Story
          </a>

          <a className="transition hover:text-cyan-300" href="#">
            Universe
          </a>

          <a className="transition hover:text-cyan-300" href="#">
            Roadmap
          </a>

          <a className="transition hover:text-cyan-300" href="#">
            Community
          </a>

          <a className="transition hover:text-cyan-300" href="#">
            Whitepaper
          </a>

        </nav>

        {/* Button */}

        <button className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(34,211,238,.45)]">
          Launch App
        </button>

      </div>
    </header>
  );
}
