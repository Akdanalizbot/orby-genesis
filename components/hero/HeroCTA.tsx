"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language/LanguageContext";

export default function HeroCTA() {
  const { language } = useLanguage();

  const enterMordyz = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        bubbles: true,
      })
    );
  };

  return (
    <motion.button
      type="button"
      onClick={enterMordyz}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 4.5,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        mt-10
        rounded-full
        border
        border-cyan-400/20
        bg-white/5
        px-8
        py-3
        text-sm
        uppercase
        tracking-[0.35em]
        text-white
        backdrop-blur-xl
        transition-all
        duration-500
        hover:scale-105
        hover:border-cyan-300/60
        hover:bg-cyan-400/10
        hover:shadow-[0_0_40px_rgba(34,211,238,.35)]
      "
    >
      {language === "en" ? "ENTER MORDYZ" : "MORDYZ'E GİR"}
    </motion.button>
  );
}