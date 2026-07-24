import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Vision from "@/components/sections/Vision";
import Universe from "@/components/sections/Universe";
import Roadmap from "@/components/sections/Roadmap";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Vision />
      <Universe />
      <Roadmap />
      <Footer />
    </>
  );
}
