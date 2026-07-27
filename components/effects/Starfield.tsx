export default function Starfield() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(120)].map((_, i) => (
        <span
          key={i}
          className="absolute h-[3px] w-[3px] rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(85,216,255,0.9)] animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}