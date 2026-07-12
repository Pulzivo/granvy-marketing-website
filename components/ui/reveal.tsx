"use client";

import { motion, type Variants } from "framer-motion";

type RevealVariant = "up" | "left" | "right" | "scale" | "blur";

const ease = [0.22, 1, 0.36, 1] as const;

function buildVariants(variant: RevealVariant, y: number): Variants {
  const hidden: Record<string, number | string> = { opacity: 0 };
  switch (variant) {
    case "left":
      hidden.x = -48;
      break;
    case "right":
      hidden.x = 48;
      break;
    case "scale":
      hidden.scale = 0.9;
      hidden.y = y;
      break;
    case "blur":
      hidden.filter = "blur(14px)";
      hidden.y = y;
      break;
    default:
      hidden.y = y;
  }
  return {
    hidden,
    show: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
  };
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  variant = "up",
  duration = 0.6,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  variant?: RevealVariant;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={buildVariants(variant, y)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
