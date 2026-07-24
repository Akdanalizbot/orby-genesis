import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export default function Vision() {
  return (
    <section className="bg-[#050816] py-32">
      <Container>

        <SectionTitle
          eyebrow="OUR VISION"
          title="Building More Than A Token"
          description="We believe Web3 deserves brands people remember. Not because of hype. Not because of price. But because of purpose, creativity and community."
        />

        <div className="grid gap-8 md:grid-cols-3">

          <Card title="Brand First">
            ORBY is designed as an iconic brand before becoming a token.
          </Card>

          <Card title="Community">
            Every explorer helps shape the future of the ORBY universe.
          </Card>

          <Card title="Future">
            Born on Robinhood Chain. Built for the next generation of Web3.
          </Card>

        </div>

      </Container>
    </section>
  );
}
