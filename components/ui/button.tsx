"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  // Deep pine, cream text: the one loud element on the page.
  primary: "bg-pine text-cream hover:bg-pine-hover shadow-[0_1px_2px_rgba(36,31,23,0.15),0_8px_20px_-8px_rgba(29,91,67,0.45)]",
  // Quiet outline on paper.
  secondary: "border border-line-strong bg-card text-ink hover:border-ink-faint",
  // Cream on dark pine surfaces.
  ghost: "bg-cream text-pine-deep hover:bg-white",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const isExternal =
    href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http");

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-200",
        variants[variant],
        className,
      )}
    >
      {children}
    </motion.span>
  );

  if (isExternal) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}
