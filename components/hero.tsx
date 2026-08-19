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
  const productY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden bg-paper">
      <Container className="relative pb-16 pt-32 md:pb-24 md:pt-44">
        {/* Left-aligned editorial headline block */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-pine" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-6 text-5xl leading-[1.02] text-ink md:text-7xl"
          >
            {hero.headlineLine1} {hero.headlinePrefix}{" "}
            <em className="text-pine">{hero.headlineAccent}</em>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg"
          >
            {hero.subtitle} {hero.subtitleLine2}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#book-demo" variant="primary" className="!px-8 !py-3.5">
              {hero.primaryCta}
            </Button>
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-1.5 px-2 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {hero.secondaryCta}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Product frame: real software, real shadow, no glow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: productY }}
          className="relative mx-auto mt-16 max-w-5xl md:mt-20"
        >
          <div className="shadow-lift overflow-hidden rounded-2xl border border-line-strong bg-card text-left">
            <div className="flex items-center gap-2 border-b border-line bg-paper-deep/60 px-4 py-2.5">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              </span>
              <span className="mx-auto hidden rounded-md border border-line bg-card px-3 py-0.5 text-[11px] text-ink-faint sm:block">
                app.granvy.com
              </span>
            </div>
            <DashboardMockup />
          </div>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-14 max-w-5xl border-t border-line pt-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xs text-xs font-semibold uppercase leading-relaxed tracking-[0.18em] text-ink-faint">
              {hero.trust}
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <span className="font-display text-3xl text-ink">{stat.value}</span>
                  <span className="text-sm text-ink-soft">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
