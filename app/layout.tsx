import type { Metadata } from "next";
import { Poppins, Instrument_Serif } from "next/font/google";
import { brand } from "@/lib/content";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  display: "swap",
});

// One argument everywhere: title tag, OG/Twitter cards, and the on-page H1
// ("The front desk you don't have to hire") all make the same claim.
const siteTitle = "Granvy | The Front Desk You Don't Have to Hire";
const siteDescription =
  "Granvy answers your calls, books appointments, takes deposits, sends intake forms, and follows up with clients. The front-desk operating system for salons, med-aesthetics clinics, escape rooms, studios, and trades.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://granvy.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://granvy.com",
    siteName: "Granvy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

// Structured data: only facts that are true today. No ratings, review counts,
// prices, or founding dates get invented here.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://granvy.com/#organization",
      name: brand.name,
      url: "https://granvy.com",
      description: brand.tagline,
      email: brand.contactEmail,
      telephone: brand.contactPhone,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: brand.contactEmail,
          telephone: brand.contactPhone,
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: brand.name,
      url: "https://granvy.com",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: siteDescription,
      publisher: { "@id": "https://granvy.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${instrumentSerif.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
