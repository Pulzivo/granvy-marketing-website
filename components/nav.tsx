"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { nav } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled
            ? "border-b border-line bg-paper/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <Logo />
          <div className="flex items-center gap-7">
            <div className="hidden items-center gap-7 md:flex">
              {nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <Button href="/#book-demo" variant="primary" className="!px-5 !py-2.5 text-sm">
              {nav.cta}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
