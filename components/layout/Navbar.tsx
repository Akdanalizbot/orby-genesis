export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-violet-600 glow"></div>

          <span className="text-2xl font-bold gradient-text">
            ORBY
          </span>
        </div>

        {/* Menu */}

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          <a href="#">Story</a>

          <a href="#">Universe</a>

          <a href="#">Roadmap</a>

          <a href="#">Community</a>

          <a href="#">Whitepaper</a>

        </nav>

        {/* Button */}

        <button
          className="px-5 py-3 rounded-full bg-violet-600 hover:bg-violet-500 transition glow"
        >
          Launch App
        </button>

      </div>
    </header>
  );
}
