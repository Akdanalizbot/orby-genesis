type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-20 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="mt-6 text-5xl font-extrabold gradient-text md:text-6xl">
        {title}
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
        {description}
      </p>
    </div>
  );
}
