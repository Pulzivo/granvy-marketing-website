import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const onPaper = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.22em]",
              onPaper ? "text-pine" : "text-cream/60",
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display mt-4 text-4xl leading-[1.05] md:text-5xl",
            onPaper ? "text-ink" : "text-cream",
          )}
        >
          {heading}
        </h2>
      </Reveal>
      {subheading && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed md:text-lg",
              onPaper ? "text-ink-soft" : "text-cream/75",
            )}
          >
            {subheading}
          </p>
        </Reveal>
      )}
    </div>
  );
}
