"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  const returnToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        border-t
        border-white/[0.05]
        bg-black
        px-6
        py-16
      "
    >
      {/* ================= ATMOSPHERE ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[300px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/[0.05]
          blur-[140px]
        "
      />

      {/* ================= CONTENT ================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-10
          text-center
          md:flex-row
          md:text-left
        "
      >
        {/* ================= BRAND ================= */}

        <div>
          <button
            type="button"
            onClick={returnToTop}
            className="
              text-sm
              font-semibold
              tracking-[0.4em]
              text-white
              transition-colors
              duration-300
              hover:text-cyan-300
            "
          >
            ORBYZ
          </button>

          <p
            className="
              mt-4
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-white/25
            "
          >
            {language === "en"
              ? "THE UNIVERSE IS AWAKENING"
              : "EVREN UYANIYOR"}
          </p>
        </div>

        {/* ================= CENTER SIGNAL ================= */}

        <div
          className="
            flex
            items-center
            gap-3
            text-[9px]
            uppercase
            tracking-[0.35em]
            text-white/20
          "
        >
          <motion.span
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-300
              shadow-[0_0_10px_rgba(103,232,249,.8)]
            "
          />

          {language === "en"
            ? "THE SIGNAL CONTINUES"
            : "SİNYAL DEVAM EDİYOR"}
        </div>

        {/* ================= COPYRIGHT ================= */}

        <div
          className="
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/20
            md:text-right
          "
        >
          <p>
            © {year} ORBYZ
          </p>

          <p className="mt-2">
            {language === "en"
              ? "ALL RIGHTS RESERVED"
              : "TÜM HAKLARI SAKLIDIR"}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}