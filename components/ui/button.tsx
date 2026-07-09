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
  primary: "bg-green text-black hover:bg-green-light",
  secondary: "liquid-glass text-white hover:bg-white/5",
  ghost: "bg-white text-black hover:opacity-90",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const isExternal =
    href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http");

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
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
