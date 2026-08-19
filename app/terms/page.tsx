import type { Metadata } from "next";
import { LegalShell, LegalSection } from "@/components/legal-shell";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service | Granvy",
  description:
    "The baseline terms for using Granvy, the front-desk operating system for owner-operated service businesses.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="August 19, 2026">
      <LegalSection heading="What Granvy is">
        <p>
          Granvy ({brand.domain}) provides software that runs the front desk
          of a service business: AI voice reception, online booking and
          scheduling, deposits and payments, client records and forms,
          messaging, follow-ups, and reporting. By using Granvy, or by signing
          up your business for it, you agree to these terms.
        </p>
      </LegalSection>

      <LegalSection heading="Your account and your responsibilities">
        <p>
          You are responsible for the accuracy of the business information you
          load into Granvy (services, prices, hours, calendar) and for keeping
          your login credentials secure.
        </p>
        <p>
          If you enable call recording or voice reception, you are responsible
          for meeting the notice and consent requirements that apply to call
          recording in your jurisdiction. If you collect intake, consent, or
          medical form data through Granvy, you are responsible for having the
          right to collect it and for how you use it in your practice.
        </p>
      </LegalSection>

      <LegalSection heading="Payments">
        <p>
          Payments, deposits, and invoices handled through Granvy are
          processed by third-party payment processors and are also subject to
          those processors&apos; terms. Fees for the Granvy service itself are
          agreed with you directly when you sign up.
        </p>
      </LegalSection>

      <LegalSection heading="Acceptable use">
        <p>
          Do not use Granvy to send spam, to harass people, to break the law,
          or to collect information you have no right to collect. Do not
          attempt to probe, overload, or reverse engineer the service. We may
          suspend accounts that do.
        </p>
      </LegalSection>

      <LegalSection heading="Your data">
        <p>
          Your business data and your clients&apos; data remain yours. We
          process them to provide the service, as described in our{" "}
          <a href="/privacy" className="text-white underline underline-offset-2">
            Privacy Policy
          </a>
          . If you leave Granvy, you can request an export of your records.
        </p>
      </LegalSection>

      <LegalSection heading="What Granvy is not">
        <p>
          Granvy is administrative software. It books appointments, stores
          records, and sends messages; it does not provide medical, legal, or
          financial advice, and its automated answers are not a substitute for
          your professional judgment. You remain responsible for the services
          your business delivers to its clients.
        </p>
      </LegalSection>

      <LegalSection heading="Availability and liability">
        <p>
          We work to keep Granvy available around the clock, but the service
          is provided &quot;as is&quot; and we cannot promise it will be
          uninterrupted or error-free. To the maximum extent permitted by law,
          Granvy&apos;s liability for claims arising from the service is
          limited to the amounts you paid for it in the twelve months before
          the claim.
        </p>
      </LegalSection>

      <LegalSection heading="Ending the relationship">
        <p>
          You can stop using Granvy at any time. We may suspend or end
          accounts that violate these terms, with notice where practical.
          Sections that by their nature should survive (data handling,
          liability limits) survive termination.
        </p>
      </LegalSection>

      <LegalSection heading="Changes and contact">
        <p>
          We will update these terms as the product and our legal review
          evolve, and change the date at the top when we do. Continued use
          after an update means you accept the new terms. Questions go to{" "}
          <a href={`mailto:${brand.contactEmail}`} className="text-white underline underline-offset-2">
            {brand.contactEmail}
          </a>{" "}
          or {brand.contactPhone}.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
