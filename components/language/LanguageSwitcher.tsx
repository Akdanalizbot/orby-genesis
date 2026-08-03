"use client";

import { motion } from "framer-motion";
import {
  Language,
  useLanguage,
} from "@/components/language/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        fixed
        right-5
        top-5
        z-[70]
        flex
        items-center
        gap-2
        rounded-full
        border
        border-white/[0.06]
        bg-black/30
        px-3
        py-2
        backdrop-blur-xl
        md:right-7
        md:top-6
      "
    >
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        aria-label="Switch language to English"
        className={`
          text-[9px]
          font-medium
          tracking-[0.2em]
          transition-all
          duration-300
          ${
            language === "en"
              ? "text-cyan-300"
              : "text-white/30 hover:text-white/70"
          }
        `}
      >
        EN
      </button>

      <span
        className="
          text-[8px]
          text-white/15
        "
      >
        /
      </span>

      <button
        type="button"
        onClick={() => changeLanguage("tr")}
        aria-label="Dili Türkçe yap"
        className={`
          text-[9px]
          font-medium
          tracking-[0.2em]
          transition-all
          duration-300
          ${
            language === "tr"
              ? "text-cyan-300"
              : "text-white/30 hover:text-white/70"
          }
        `}
      >
        TR
      </button>
    </motion.div>
  );
}