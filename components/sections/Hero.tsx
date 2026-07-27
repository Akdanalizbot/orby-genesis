import Scene from "@/components/orb/Scene";
import HeroBackground from "@/components/hero/HeroBackground";
import HeroLogo from "@/components/hero/HeroLogo";
import HeroSubtitle from "@/components/hero/HeroSubtitle";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <HeroBackground />

      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="text-center">

            <div className="mx-auto mb-8 h-[460px] w-[460px]">
  <Scene />
</div>

          <HeroLogo />
          <HeroSubtitle />
        </div>
      </div>
    </section>
  );
}