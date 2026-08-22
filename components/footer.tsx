import { Logo } from "./logo";
import { Container } from "./ui/container";
import { footer, brand } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-pine-ink py-16 text-cream">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">{footer.tagline}</p>
            <div className="mt-6 space-y-1 text-sm text-cream/60">
              <a href={`mailto:${brand.contactEmail}`} className="block transition-colors hover:text-cream">
                {brand.contactEmail}
              </a>
              <a
                href={`tel:${brand.contactPhone.replace(/[^\d+]/g, "")}`}
                className="block transition-colors hover:text-cream"
              >
                {brand.contactPhone}
              </a>
            </div>
          </div>

          {footer.columns.map((column) => (
            <div key={column.heading}>
              {/* h2, not h3: the footer is its own landmark, so its column
                  headings sit directly under the page h1 rather than under
                  one of the section h2s above them. Classes unchanged. */}
              <h2 className="text-sm font-semibold text-cream">{column.heading}</h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-cream/60 transition-colors hover:text-cream">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/50">
            &copy; {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footer.legal.map((link) => (
              <a key={link.label} href={link.href} className="text-xs text-cream/50 transition-colors hover:text-cream">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
