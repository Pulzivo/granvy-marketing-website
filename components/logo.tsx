import Link from "next/link";
import { cn } from "@/lib/utils";
import { LogoMark } from "./logo-mark";

// tone="dark" renders ink-on-paper (default); tone="light" renders cream
// for the pine-ink footer and other dark surfaces.
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2",
        tone === "dark" ? "text-ink" : "text-cream",
        className,
      )}
    >
      <LogoMark className={cn("h-7 w-7", tone === "dark" ? "text-pine" : "text-cream")} />
      <span className="text-lg font-semibold tracking-tight">granvy</span>
    </Link>
  );
}
