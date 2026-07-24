import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-cyan-400 text-black hover:scale-105"
      : "border border-white/20 text-white hover:bg-white/10";

  return (
    <Link
      href={href}
      className={`rounded-full px-8 py-4 text-lg font-semibold transition duration-300 ${styles}`}
    >
      {children}
    </Link>
  );
}
