export default function Roadmap() {
  const missions = [
    {
      id: "01",
      title: "Genesis",
      status: "Completed",
      description:
        "Build the ORBY identity, establish the brand and launch the first explorer.",
    },
    {
      id: "02",
      title: "Community Expansion",
      status: "In Progress",
      description:
        "Grow a loyal global community and create a strong presence across Web3.",
    },
    {
      id: "03",
      title: "Ecosystem",
      status: "Coming Soon",
      description:
        "Launch utilities, partnerships and products that strengthen the ORBY universe.",
    },
    {
      id: "04",
      title: "Beyond Robinhood",
      status: "Future",
      description:
        "Expand the ORBY universe and connect explorers across multiple ecosystems.",
    },
  ];

  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-[#040712] px-6 py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06b6d415,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        <div className="text-center">

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.45em] text-cyan-300">
            Mission Timeline
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            The Journey Ahead
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-400">
            Every great universe is built mission by mission.
          </p>

        </div>

        <div className="mt-24 space-y-8">

          {missions.map((mission) => (
            <div
              key={mission.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div>

                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                    Mission {mission.id}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-white">
                    {mission.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-8 text-gray-400">
                    {mission.description}
                  </p>

                </div>

                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300">
                  {mission.status}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
