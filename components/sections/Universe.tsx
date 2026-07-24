const cards = [
  {
    title: "Explore",
    text: "Discover the ORBY ecosystem and everything waiting beyond the horizon.",
  },
  {
    title: "Community",
    text: "A strong brand is built by people who believe in the same vision.",
  },
  {
    title: "Innovation",
    text: "Always moving forward with creativity and new ideas.",
  },
  {
    title: "Future",
    text: "Born on Robinhood Chain. Built for the next generation of Web3.",
  },
  {
    title: "Genesis",
    text: "Every great universe begins with a single story.",
  },
  {
    title: "Builders",
    text: "Together we create something that lasts far beyond trends.",
  },
];

export default function Universe() {
  return (
    <section className="bg-[#070b1f] py-32 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 text-center">

          <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
            UNIVERSE
          </p>

          <h2 className="mt-6 text-5xl font-extrabold gradient-text md:text-6xl">
            Explore The ORBY Universe
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            More than a project.
            <br />
            More than a community.
            <br />
            Welcome to a universe built for explorers.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {cards.map((card) => (
            <div
              key={card.title}
              className="glass rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="mb-4 text-2xl font-bold">
                {card.title}
              </h3>

              <p className="leading-8 text-slate-400">
                {card.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
