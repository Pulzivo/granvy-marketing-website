import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  className,
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
}) {
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
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-mist/50">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="mt-3 text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.1] text-white">
          {heading}
        </h2>
      </Reveal>
      {subheading && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">
            {subheading}
          </p>
        </Reveal>
      )}
    </div>
  );
}
