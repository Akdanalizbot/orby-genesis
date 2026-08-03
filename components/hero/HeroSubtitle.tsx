"use client";

import { useLanguage } from "@/components/language/LanguageContext";

export default function HeroSubtitle() {
  const { language } = useLanguage();

  return (
    <p className="mt-8 text-sm uppercase tracking-[0.55em] text-gray-400">
      {language === "en"
        ? "THE UNIVERSE IS AWAKENING"
        : "EVREN UYANIYOR"}
    </p>
  );
}