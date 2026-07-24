import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Vision from "@/components/sections/Vision";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Vision />
      <Footer />
    </>
  );
}
