import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

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
    <section className="bg-[#070b1f] py-32">
      <Container>
        <SectionTitle
          eyebrow="UNIVERSE"
          title="Explore The ORBY Universe"
          description="More than a project. More than a community. Welcome to a universe built for explorers."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.title} title={card.title}>
              {card.text}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
