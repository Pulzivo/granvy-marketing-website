"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { DashboardMockup } from "./dashboard-mockup";
import { hero } from "@/lib/content";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const productY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={sectionRef} id="top" className="grain relative overflow-hidden bg-black">
      {/* Signature spectrum glow behind the headline + product */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 z-0 h-[900px] spectrum opacity-30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-64 bg-gradient-to-t from-black to-transparent" />

      <Container className="relative z-10 pb-20 pt-32 text-center md:pb-28 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-mist/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green" />
          {hero.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.03em] text-white md:text-7xl"
        >
          {hero.headlineLine1} {hero.headlinePrefix}{" "}
          <span className="gradient-text font-serif italic font-normal">
            {hero.headlineAccent}
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist/70 md:text-lg"
        >
          {hero.subtitle} {hero.subtitleLine2}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button href="#book-demo" variant="primary" className="!px-8 !py-3.5">
            {hero.primaryCta}
          </Button>
          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-mist/80 transition-colors hover:text-white"
          >
            {hero.secondaryCta}
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Framed product surface with depth and spectrum glow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: productY }}
          className="relative mx-auto mt-16 max-w-5xl md:mt-20"
        >
          <div className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 -z-10 spectrum opacity-40 blur-3xl" />
          <div className="panel-product overflow-hidden p-2 text-left md:p-3">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <DashboardMockup />
            </div>
          </div>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 flex flex-col items-center gap-6"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-mist/40">
            {hero.trust}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-white">{stat.value}</span>
                <span className="text-sm text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
