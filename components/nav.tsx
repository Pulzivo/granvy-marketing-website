"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { nav } from "@/lib/content";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl liquid-glass px-4 py-3 md:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-mist/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#book-demo" variant="ghost" className="!px-6 !py-2.5 text-sm">
            {nav.cta}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-6xl rounded-2xl liquid-glass p-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-mist/80 hover:text-white"
              >
                {link.label}
                <ChevronRight size={16} />
              </a>
            ))}
            <div className="mt-2">
              <Button href="#book-demo" variant="ghost" className="w-full !py-3 text-sm">
                {nav.cta}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
