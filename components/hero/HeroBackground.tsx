import Starfield from "@/components/effects/Starfield";

export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1d2d74_0%,#0b1028_25%,#000000_70%)] opacity-80" />

      <div className="absolute -left-64 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-cyan-500 blur-[180px] opacity-10" />

      <div className="absolute -right-64 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-violet-600 blur-[180px] opacity-10" />

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[120px] opacity-10" />

      <Starfield />
    </>
  );
}