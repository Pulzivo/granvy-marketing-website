"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex flex-col overflow-hidden bg-black md:min-h-screen"
    >
      <HeroBackground />

      <Container className="relative z-10 flex flex-col items-center pt-40 text-center md:pt-48">
        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="liquid-glass mb-6 flex items-center gap-2 rounded-lg px-3 py-2"
          >
            <span className="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-black">
              {hero.pillBadge}
            </span>
            <span className="text-sm font-medium text-muted">{hero.pillText}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-3 text-5xl font-medium leading-tight tracking-[-2px] text-white md:text-7xl md:leading-[1.1]"
          >
            <span className="block">{hero.headlineLine1}</span>
            <span className="block">
              {hero.headlinePrefix}{" "}
              <span className="font-serif italic font-normal">{hero.headlineAccent}</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-xl text-lg leading-6 text-mist/90"
          >
            {hero.subtitle}
            <br />
            {hero.subtitleLine2}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="#book-demo" variant="ghost">
              {hero.primaryCta}
            </Button>
            <Button href={hero.secondaryCtaHref} variant="secondary">
              {hero.secondaryCta}
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ y: dashboardY }}
        className="relative mt-16 md:mt-20 md:flex-1"
      >
        <div
          className="relative w-screen min-h-[420px] md:min-h-[520px]"
          style={{ marginLeft: "calc(-50vw + 50%)" }}
        >
          <div className="relative z-10 flex justify-center px-4 pb-10 pt-8 md:pb-16 md:pt-12">
            <div className="w-full max-w-4xl">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
