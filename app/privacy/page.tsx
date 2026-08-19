import type { Metadata } from "next";
import { LegalShell, LegalSection } from "@/components/legal-shell";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Granvy",
  description:
    "How Granvy collects, uses, and protects booking, contact, call, payment, and intake-form data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="August 19, 2026">
      <LegalSection heading="Who we are">
        <p>
          Granvy ({brand.domain}) is a front-desk operating system for
          owner-operated service businesses: it answers calls, books
          appointments, collects deposits and payments, sends intake and
          consent forms, and follows up with clients on behalf of the
          businesses that use it.
        </p>
        <p>
          That means personal information reaches us in two ways: directly,
          when you visit this website or contact us, and indirectly, when you
          are a client of a business that runs its front desk on Granvy. This
          policy covers both.
        </p>
      </LegalSection>

      <LegalSection heading="Information we collect">
        <p>Depending on how you interact with Granvy, this can include:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-ink">Contact and booking details.</strong>{" "}
            Name, phone number, email address, and appointment details
            (service, date, time, notes) when you book with a business that
            uses Granvy or when you contact us.
          </li>
          <li>
            <strong className="text-ink">Call data.</strong> When a business
            has voice reception or call recording enabled, calls handled by
            Granvy may be recorded and transcribed so the business has a
            record of what was discussed and booked.
          </li>
          <li>
            <strong className="text-ink">Payment information.</strong>{" "}
            Deposits, invoices, and checkout payments are processed by a
            third-party payment processor. Granvy does not store full card
            numbers; we keep records of the transactions themselves (amount,
            date, status).
          </li>
          <li>
            <strong className="text-ink">Intake, consent, and medical
            form data.</strong> Businesses such as medical aesthetics clinics
            use Granvy to send and store intake forms, consent forms,
            treatment notes, and photos. This information is collected on
            behalf of, and controlled by, that business.
          </li>
          <li>
            <strong className="text-ink">Basic website data.</strong>{" "}
            Standard technical information generated when you visit this
            site, such as pages viewed and browser type.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="How we use it">
        <ul className="list-disc space-y-2 pl-5">
          <li>To run the front desk of the business you interacted with: book and confirm appointments, hold deposits, send reminders, forms, and follow-ups.</li>
          <li>To operate, secure, and improve the Granvy service.</li>
          <li>To respond when you contact us about the product.</li>
        </ul>
        <p>We do not sell personal information.</p>
      </LegalSection>

      <LegalSection heading="Who we share it with">
        <p>
          We share data only with the service providers needed to run the
          product, such as telephony providers (to handle and record calls),
          payment processors (to take deposits and payments), and hosting
          infrastructure. Each business that uses Granvy can see the
          information collected about its own clients; other businesses
          cannot.
        </p>
      </LegalSection>

      <LegalSection heading="If you are a client of a business using Granvy">
        <p>
          The business you booked with controls your booking, call, and form
          data; Granvy processes it on their behalf. Requests to access,
          correct, or delete that information can go to the business directly
          or to us at{" "}
          <a href={`mailto:${brand.contactEmail}`} className="text-ink underline underline-offset-2">
            {brand.contactEmail}
          </a>
          , and we will help route them.
        </p>
      </LegalSection>

      <LegalSection heading="Retention and security">
        <p>
          We keep personal information for as long as it is needed to provide
          the service to the business that collected it, and then delete or
          anonymize it. We use industry-standard safeguards to protect data in
          transit and at rest, and we limit access to people who need it to
          operate the service.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <p>
          You can ask us what we hold about you, ask us to correct it, or ask
          us to delete it, subject to records the business is required to
          keep (for example, signed consent forms). You can opt out of
          marketing messages at any time using the link or reply instructions
          in the message itself.
        </p>
      </LegalSection>

      <LegalSection heading="Changes and contact">
        <p>
          We will update this policy as the product and our legal review
          evolve, and change the date at the top when we do. Questions go to{" "}
          <a href={`mailto:${brand.contactEmail}`} className="text-ink underline underline-offset-2">
            {brand.contactEmail}
          </a>{" "}
          or {brand.contactPhone}.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
