import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

export default function Card({
  title,
  children,
}: CardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">

      <h3 className="mb-5 text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
        {title}
      </h3>

      <div className="leading-8 text-slate-400">
        {children}
      </div>

    </div>
  );
}
