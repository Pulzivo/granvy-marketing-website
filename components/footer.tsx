import { Logo } from "./logo";
import { Container } from "./ui/container";
import { footer, brand } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{footer.tagline}</p>
            <div className="mt-6 space-y-1 text-sm text-muted">
              <a href={`mailto:${brand.contactEmail}`} className="block hover:text-white">
                {brand.contactEmail}
              </a>
              <a
                href={`tel:${brand.contactPhone.replace(/[^\d+]/g, "")}`}
                className="block hover:text-white"
              >
                {brand.contactPhone}
              </a>
            </div>
          </div>

          {footer.columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold text-white">{column.heading}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footer.legal.map((link) => (
              <a key={link.label} href={link.href} className="text-xs text-muted hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
