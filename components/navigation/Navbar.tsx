"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePortal } from "@/components/transitions/PortalContext";

const navItems = [
  { label: "ORIGIN", href: "#story" },
  { label: "ORBI", href: "#orbi" },
  { label: "UNIVERSE", href: "#universe" },
  { label: "VISION", href: "#vision" },
  { label: "EVOLUTION", href: "#roadmap" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { resetPortal } = usePortal();

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

    setMenuOpen(false);
  };

  const returnToEnter = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    setMenuOpen(false);

    resetPortal();
  };

  return (
    <>
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
          px-4
          py-4
          md:px-6
          md:py-5
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
            px-5
            py-3
            backdrop-blur-xl
            md:px-6
          "
        >
          {/* ================= ORBYZ / HOME ================= */}

          <a
            href="#"
            onClick={returnToEnter}
            aria-label="Return to ENTER ORBYZ"
            className="
              relative
              z-50
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

          {/* ================= DESKTOP NAVIGATION ================= */}

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

          {/* ================= MOBILE HAMBURGER ================= */}

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              relative
              z-50
              flex
              h-8
              w-8
              flex-col
              items-center
              justify-center
              gap-[5px]
              md:hidden
            "
          >
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 7 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25 }}
              className="
                block
                h-px
                w-5
                bg-white
              "
            />

            <motion.span
              animate={
                menuOpen
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
              transition={{ duration: 0.2 }}
              className="
                block
                h-px
                w-5
                bg-white
              "
            />

            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -5 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25 }}
              className="
                block
                h-px
                w-5
                bg-white
              "
            />
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed
              inset-0
              z-40
              flex
              items-center
              justify-center
              bg-black/80
              backdrop-blur-2xl
              md:hidden
            "
          >
            {/* Ambient glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[350px]
                w-[350px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-400/[0.04]
                blur-[100px]
              "
            />

            {/* Navigation */}

            <nav
              className="
                relative
                z-10
                flex
                flex-col
                items-center
                gap-8
              "
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(event) =>
                    scrollToSection(event, item.href)
                  }
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    text-sm
                    font-medium
                    uppercase
                    tracking-[0.4em]
                    text-white/50
                    transition-colors
                    duration-300
                    hover:text-cyan-300
                  "
                >
                  {item.label}
                </motion.a>
              ))}

              {/* Mobile status */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                }}
                className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  text-[8px]
                  uppercase
                  tracking-[0.35em]
                  text-white/20
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
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}