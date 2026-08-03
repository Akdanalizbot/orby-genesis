"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "ORIGIN", href: "#story" },
  { label: "ORBI", href: "#orbi" },
  { label: "UNIVERSE", href: "#universe" },
  { label: "VISION", href: "#vision" },
  { label: "EVOLUTION", href: "#roadmap" },
];

export default function Navbar() {
  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        px-6
        py-5
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-full
          border
          border-white/[0.06]
          bg-black/30
          px-6
          py-3
          backdrop-blur-xl
        "
      >
        {/* ================= ORBYZ ================= */}

        <a
          href="#genesis"
          onClick={(event) =>
            scrollToSection(event, "#genesis")
          }
          className="
            text-sm
            font-semibold
            tracking-[0.35em]
            text-white
            transition-colors
            duration-300
            hover:text-cyan-300
          "
        >
          ORBYZ
        </a>

        {/* ================= NAVIGATION ================= */}

        <nav
          className="
            hidden
            items-center
            gap-8
            md:flex
          "
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(event) =>
                scrollToSection(event, item.href)
              }
              className="
                relative
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/40
                transition-all
                duration-300
                hover:text-cyan-300
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ================= STATUS ================= */}

        <div
          className="
            hidden
            items-center
            gap-2
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-white/25
            lg:flex
          "
        >
          <motion.span
            animate={{
              opacity: [0.35, 1, 0.35],
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

          SYSTEM ONLINE
        </div>
      </div>
    </motion.header>
  );
}