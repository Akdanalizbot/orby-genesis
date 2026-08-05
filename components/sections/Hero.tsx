"use client";

import { motion, AnimatePresence } from "framer-motion";

import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";

import HeroBackground from "@/components/hero/HeroBackground";
import HeroLogo from "@/components/hero/HeroLogo";
import HeroSubtitle from "@/components/hero/HeroSubtitle";
import HeroCTA from "@/components/hero/HeroCTA";

import LanguageSwitcher from "@/components/language/LanguageSwitcher";
import { LanguageProvider } from "@/components/language/LanguageContext";

import OrbiScene from "@/components/orb/OrbiScene";

import Community from "@/components/sections/Community";
import Genesis from "@/components/sections/Genesis";
import Story from "@/components/sections/Story";
import Orbi from "@/components/sections/Orbi";
import Universe from "@/components/sections/Universe";
import Vision from "@/components/sections/Vision";
import Roadmap from "@/components/sections/Roadmap";

import QuantumPortal from "@/components/transitions/QuantumPortal";
import GenesisTransition from "@/components/transitions/GenesisTransition";

import {
  PortalProvider,
  usePortal,
} from "@/components/transitions/PortalContext";

/* =========================================================
   HERO EXPERIENCE
========================================================= */

function HeroExperience() {
  const { genesisActive } = usePortal();

  return (
    <main
      className={
        genesisActive
          ? "relative min-h-screen bg-black"
          : "relative h-screen overflow-hidden bg-black"
      }
    >
      {/* ================= LANGUAGE SWITCHER ================= */}

      <LanguageSwitcher />

      {/* =====================================================
          OPENING EXPERIENCE
      ===================================================== */}

      <AnimatePresence>
        {!genesisActive && (
          <motion.section
            key="opening"
            className="relative h-screen overflow-hidden bg-black"
            initial={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* Background */}

            <HeroBackground />

            {/* Hero Content */}

            <div className="relative z-20 flex h-full items-center justify-center px-6">
              <div className="text-center">

                {/* ================= ORBI ================= */}

                <motion.div
                  className="mx-auto mb-10 h-[200px] w-[950px]"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1.8,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <OrbiScene />
                </motion.div>

                {/* ================= LOGO ================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.2,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 2.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <HeroLogo />
                </motion.div>

                {/* ================= SUBTITLE ================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 2.5,
                  }}
                >
                  <HeroSubtitle />
                </motion.div>

                {/* ================= CTA ================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 3.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <HeroCTA />
                </motion.div>
              </div>
            </div>

            {/* Quantum Portal */}

            <QuantumPortal />
          </motion.section>
        )}
      </AnimatePresence>

      {/* =====================================================
          Mordyz MAIN SITE
      ===================================================== */}

      {genesisActive && (
        <motion.div
          key="Mordyz-main"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          {/* ================= NAVBAR ================= */}

          <Navbar />

          {/* ================= SECTIONS ================= */}

          <Genesis />

          <Story />

          <Orbi />

          <Universe />

          <Vision />

          <Community />

          <Roadmap />

          {/* ================= FOOTER ================= */}

          <Footer />
        </motion.div>
      )}

      {/* =====================================================
          PORTAL → GENESIS TRANSITION
      ===================================================== */}

      {!genesisActive && <GenesisTransition />}
    </main>
  );
}

/* =========================================================
   PROVIDERS
========================================================= */

export default function Hero() {
  return (
    <LanguageProvider>
      <PortalProvider>
        <HeroExperience />
      </PortalProvider>
    </LanguageProvider>
  );
}