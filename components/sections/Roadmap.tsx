import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Genesis",
    description:
      "Build the brand identity, website and the foundation of the ORBY universe.",
  },
  {
    phase: "Phase 2",
    title: "Community",
    description:
      "Grow a loyal community through storytelling, creativity and engagement.",
  },
  {
    phase: "Phase 3",
    title: "Launch",
    description:
      "Launch ORBY on Robinhood Chain with a strong community behind it.",
  },
  {
    phase: "Phase 4",
    title: "Expansion",
    description:
      "Expand the ecosystem with partnerships, utilities and new experiences.",
  },
];

export default function Roadmap() {
  return (
    <section className="bg-[#050816] py-32">
      <Container>
        <SectionTitle
          eyebrow="ROADMAP"
          title="Building Step by Step"
          description="Great projects aren't rushed. Every milestone strengthens the foundation."
        />

        <div className="space-y-8">
          {roadmap.map((item) => (
            <div
              key={item.phase}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:border-cyan-400/40"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                {item.phase}
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
