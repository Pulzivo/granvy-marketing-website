"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { HeroBackground } from "./hero-background";
import { DashboardMockup } from "./dashboard-mockup";
import { hero } from "@/lib/content";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // The whole headline block lifts and fades as you scroll past the first screen,
  // handing off to the parallax dashboard below.
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const dashboardY = useTransform(scrollYProgress, [0.2, 1], [120, -120]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section ref={sectionRef} id="top" className="relative bg-black">
      {/* Full-viewport cinematic headline */}
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="aurora" />

        <motion.div
          style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
          className="relative z-10"
        >
          <Container className="flex flex-col items-center text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-mist/50"
            >
              {hero.eyebrow}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-7xl md:text-8xl lg:text-[8.5rem]"
            >
              <span className="block text-glow">{hero.headlineLine1}</span>
              <span className="block">
                {hero.headlinePrefix}{" "}
                <span className="text-aurora font-serif italic font-normal">
                  {hero.headlineAccent}
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 max-w-2xl text-base leading-relaxed text-mist/80 md:text-lg"
            >
              {hero.subtitle} {hero.subtitleLine2}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <Button href="#book-demo" variant="primary" className="!px-9 !py-4 text-base">
                {hero.primaryCta}
              </Button>
            </motion.div>
          </Container>
        </motion.div>

        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-mist/50"
          >
            <span className="text-[11px] uppercase tracking-[0.3em]">Scroll</span>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </div>

      {/* Parallax dashboard hand-off into the rest of the page */}
      <div className="relative overflow-hidden pb-24 md:pb-32">
        <motion.div
          style={{ y: dashboardY }}
          className="relative z-10 flex justify-center px-4"
        >
          <div className="w-full max-w-4xl">
            <DashboardMockup />
          </div>
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>
    </section>
  );
}
