"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-black tracking-wider"
        >
          <span className="text-white">ORBY</span>
          <span className="text-red-500">.</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link href="#story" className="transition hover:text-red-400">
            Story
          </Link>

          <Link href="#vision" className="transition hover:text-red-400">
            Vision
          </Link>

          <Link href="#universe" className="transition hover:text-red-400">
            Universe
          </Link>

          <Link href="#roadmap" className="transition hover:text-red-400">
            Roadmap
          </Link>
          <Link
            href="#story"
            className="transition-colors hover:text-red-400"
          >
            Story
          </Link>

          <Link
            href="#vision"
            className="transition-colors hover:text-red-400"
          >
            Vision
          </Link>

          <Link
            href="#universe"
            className="transition-colors hover:text-red-400"
          >
            Universe
          </Link>

          <Link
            href="#roadmap"
            className="transition-colors hover:text-red-400"
          >
            Roadmap
          </Link>
        </nav>

        <Link
          href="#"
          className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-red-500"
        >
          Launch App
        </Link>
      </div>
    </header>
  );
}