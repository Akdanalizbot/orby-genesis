"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language/LanguageContext";

export default function Roadmap() {
  const { language } = useLanguage();

  const phases =
    language === "en"
      ? [
          {
            number: "01",
            name: "GENESIS",
            title: "The Universe Awakens",
            description:
              "The identity of ORBYZ takes form. ORBI emerges, the visual language is established, and the foundations of the universe are created.",
          },
          {
            number: "02",
            name: "SIGNAL",
            title: "The Community Connects",
            description:
              "The signal spreads beyond its origin. Early explorers enter the universe, connect with its story, and begin shaping the community around ORBYZ.",
          },
          {
            number: "03",
            name: "EXPANSION",
            title: "The Ecosystem Grows",
            description:
              "ORBYZ expands beyond its first boundaries. New experiences, ideas and layers begin connecting the universe into a growing digital ecosystem.",
          },
          {
            number: "04",
            name: "BEYOND",
            title: "The Path Remains Open",
            description:
              "The future is not defined by a fixed destination. ORBYZ continues to evolve through its universe, technology and the community building within it.",
          },
        ]
      : [
          {
            number: "01",
            name: "GENESIS",
            title: "Evren Uyanıyor",
            description:
              "ORBYZ'in kimliği şekilleniyor. ORBI ortaya çıkıyor, görsel dil oluşturuluyor ve evrenin temelleri atılıyor.",
          },
          {
            number: "02",
            name: "SİNYAL",
            title: "Topluluk Bağlanıyor",
            description:
              "Sinyal kökeninin ötesine yayılıyor. İlk kaşifler evrene giriyor, hikâyesiyle bağ kuruyor ve ORBYZ çevresindeki topluluğu şekillendirmeye başlıyor.",
          },
          {
            number: "03",
            name: "GENİŞLEME",
            title: "Ekosistem Büyüyor",
            description:
              "ORBYZ ilk sınırlarının ötesine genişliyor. Yeni deneyimler, fikirler ve katmanlar evreni büyüyen bir dijital ekosisteme dönüştürmeye başlıyor.",
          },
          {
            number: "04",
            name: "ÖTESİ",
            title: "Yol Açık Kalıyor",
            description:
              "Gelecek sabit bir varış noktasıyla tanımlanmıyor. ORBYZ; evreni, teknolojisi ve içinde gelişen topluluğuyla evrilmeye devam ediyor.",
          },
        ];

  return (
    <section
      id="roadmap"
      className="relative min-h-screen w-full overflow-hidden bg-black px-6 py-32"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-black" />

      {/* Cyan Atmosphere */}
      <div
        className="
          absolute
          left-1/2
          top-[35%]
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/[0.07]
          blur-[240px]
        "
      />

      {/* Violet Depth */}
      <div
        className="
          absolute
          left-1/2
          top-[80%]
          h-[700px]
          w-[1000px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/[0.07]
          blur-[260px]
        "
      />

      {/* ================= HEADER ================= */}

      <div className="relative z-10 mx-auto mb-24 max-w-4xl text-center">
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mb-6
            text-xs
            font-medium
            uppercase
            tracking-[0.5em]
            text-cyan-300/60
          "
        >
          ORBYZ // EVOLUTION
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            text-5xl
            font-semibold
            tracking-[-0.05em]
            text-white
            md:text-7xl
          "
        >
          {language === "en" ? "THE PATH OF" : "EVRİMİN"}

          <span className="block text-cyan-300">
            {language === "en" ? "EVOLUTION." : "YOLU."}
          </span>
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            delay: 0.3,
          }}
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-base
            leading-8
            text-white/40
            md:text-lg
          "
        >
          {language === "en" ? (
            <>
              ORBYZ is not built around deadlines.
              It evolves through stages — each one expanding
              the universe beyond what came before.
            </>
          ) : (
            <>
              ORBYZ son tarihler etrafında inşa edilmez.
              Aşamalar boyunca evrilir — her aşama evreni
              kendinden öncekinin ötesine taşır.
            </>
          )}
        </motion.p>
      </div>

      {/* ================= EVOLUTION PATH ================= */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Central Base Line */}
        <div
          className="
            absolute
            bottom-0
            left-5
            top-0
            w-px
            bg-white/[0.06]
            md:left-1/2
            md:-translate-x-1/2
          "
        />

        {/* Animated Energy Line */}
        <motion.div
          initial={{
            scaleY: 0,
          }}
          whileInView={{
            scaleY: 1,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 2.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            bottom-0
            left-5
            top-0
            w-px
            origin-top
            bg-gradient-to-b
            from-cyan-300/80
            via-cyan-300/30
            to-violet-400/20
            shadow-[0_0_18px_rgba(103,232,249,.25)]
            md:left-1/2
            md:-translate-x-1/2
          "
        />

        {/* ================= PHASES ================= */}

        <div className="space-y-20 md:space-y-28">
          {phases.map((phase, index) => {
            const leftSide = index % 2 === 0;

            return (
              <div
                key={phase.number}
                className="
                  relative
                  grid
                  grid-cols-[40px_1fr]
                  items-center
                  gap-6
                  md:grid-cols-[1fr_80px_1fr]
                  md:gap-10
                "
              >
                {/* ================= DESKTOP LEFT ================= */}

                <div className="hidden md:block">
                  {leftSide && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -40,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.4,
                      }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1,
                      }}
                      className="ml-auto max-w-md text-right"
                    >
                      <PhaseContent phase={phase} />
                    </motion.div>
                  )}
                </div>

                {/* ================= NODE ================= */}

                <div className="relative flex justify-center">
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.4,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15 + index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      relative
                      z-20
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-cyan-300/30
                      bg-black
                    "
                  >
                    {/* Node Glow */}
                    <motion.div
                      className="
                        absolute
                        h-8
                        w-8
                        rounded-full
                        bg-cyan-300/10
                        blur-md
                      "
                      animate={{
                        opacity: [0.25, 0.8, 0.25],
                        scale: [0.8, 1.4, 0.8],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4,
                      }}
                    />

                    {/* Core */}
                    <div
                      className="
                        relative
                        h-2
                        w-2
                        rounded-full
                        bg-cyan-200
                        shadow-[0_0_18px_rgba(103,232,249,.9)]
                      "
                    />
                  </motion.div>
                </div>

                {/* ================= DESKTOP RIGHT ================= */}

                <div className="hidden md:block">
                  {!leftSide && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 40,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.4,
                      }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1,
                      }}
                      className="max-w-md text-left"
                    >
                      <PhaseContent phase={phase} />
                    </motion.div>
                  )}
                </div>

                {/* ================= MOBILE CONTENT ================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="md:hidden"
                >
                  <PhaseContent phase={phase} />
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* ================= FINAL NODE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="
            relative
            z-20
            ml-[4px]
            mt-20
            h-8
            w-8
            rounded-full
            border
            border-violet-300/20
            bg-violet-300/10
            shadow-[0_0_40px_rgba(167,139,250,.2)]
            md:mx-auto
            md:mt-28
          "
        >
          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              h-2
              w-2
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white
            "
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="
            mt-6
            text-center
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-white/20
          "
        >
          {language === "en"
            ? "THE PATH CONTINUES"
            : "YOL DEVAM EDİYOR"}
        </motion.p>
      </div>
    </section>
  );
}

/* =========================================================
   PHASE CONTENT
========================================================= */

function PhaseContent({
  phase,
}: {
  phase: {
    number: string;
    name: string;
    title: string;
    description: string;
  };
}) {
  return (
    <>
      <p
        className="
          mb-3
          text-xs
          font-medium
          uppercase
          tracking-[0.4em]
          text-cyan-300/50
        "
      >
        {phase.number} // {phase.name}
      </p>

      <h3
        className="
          mb-4
          text-2xl
          font-medium
          tracking-[-0.02em]
          text-white
          md:text-3xl
        "
      >
        {phase.title}
      </h3>

      <p
        className="
          text-sm
          leading-7
          text-white/40
          md:text-base
        "
      >
        {phase.description}
      </p>
    </>
  );
}