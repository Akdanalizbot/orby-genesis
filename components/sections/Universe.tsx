export default function Universe() {
  const planets = [
    {
      title: "The Home Planet",
      icon: "🌍",
      description:
        "A growing community where every explorer helps shape the future of ORBY.",
    },
    {
      title: "The Launch Station",
      icon: "🚀",
      description:
        "Innovation begins here. Building products, tools and experiences on Robinhood Chain.",
    },
    {
      title: "The Infinite Universe",
      icon: "🌌",
      description:
        "Our journey doesn't stop with one launch. Every new explorer expands the ORBY universe.",
    },
  ];

  return (
    <section
      id="universe"
      className="relative overflow-hidden bg-[#050816] px-6 py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#06b6d420,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="text-center">

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.45em] text-cyan-300">
            Explore
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            The ORBY Universe
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-400">
            Every great journey begins with a single step.
            Every explorer needs a destination.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {planets.map((planet) => (
            <div
              key={planet.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="mb-6 text-6xl">
                {planet.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white">
                {planet.title}
              </h3>

              <p className="leading-8 text-gray-400">
                {planet.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
