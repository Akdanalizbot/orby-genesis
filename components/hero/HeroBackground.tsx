import Starfield from "@/components/effects/Starfield";

export default function HeroBackground() {
  return (
    <>
      {/* Base */}
      <div className="absolute inset-0 bg-black" />

      {/* Deep Space Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#17316f_0%,#0b1230_30%,#03050f_65%,#000000_100%)] opacity-100" />

      {/* Left Quantum Glow */}
      <div className="absolute -left-72 top-1/2 h-[850px] w-[850px] -translate-y-1/2 rounded-full bg-cyan-400 blur-[220px] opacity-[0.10]" />

      {/* Right Quantum Glow */}
      <div className="absolute -right-72 top-1/2 h-[850px] w-[850px] -translate-y-1/2 rounded-full bg-violet-500 blur-[220px] opacity-[0.09]" />

      {/* Core Glow */}
      <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 blur-[140px] opacity-[0.08]" />

      {/* Top Ambient */}
      <div className="absolute left-1/2 top-[-260px] h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500 blur-[220px] opacity-[0.03]" />

      {/* Bottom Ambient */}
      <div className="absolute bottom-[-280px] left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600 blur-[220px] opacity-[0.03]" />

      <Starfield />
    </>
  );
}